---
id: crudOperations
title: CRUD Operations
sidebar_label: CRUD Operations
---

`LASTEST BY` allows QuestDB developers to implement CRUD operations over immutable data stores. 
In this document we will describe each of CRUD operations and how to implement it using `LATEST BY`.

## (C)reate

Create operation in QuestDB append records to bottom of a table. If the table is partitioned, the `timestamp` value determines 
partition the record is appended to. Only the last partition can be appended to and an attempt to add a timestamp in middle of a
table will result in error. When a table is not partitioned, records can be added in any timestamp order and the table will only have one partition.

Lets create table that holds bank balances for customers.

<!--DOCUSAURUS_CODE_TABS-->
<!--SQL-->
```sql
create table balances (
	cust_id int, 
	balance_ccy symbol, 
	balance double, 
	status byte, 
	timestamp timestamp
);
```
<!--REST-->
```shell 
curl -G "http://localhost:13005/exec" --data-urlencode "query=
create table balances (
    cust_id int,
    balance_ccy symbol,
    balance double,
    status byte,
    timestamp timestamp
)"
```
<!--Java-->
```java
final String cairoDatabaseRoot = "/tmp";
try (CairoEngine engine = new CairoEngine(
    new DefaultCairoConfiguration(cairoDatabaseRoot))
) {
    try (SqlCompiler compiler = new SqlCompiler(engine)) {
        compiler.compile("create table balances (\n" +
                "    cust_id int, \n" +
                "    balance_ccy symbol, \n" +
                "    balance double, \n" +
                "    status byte, \n" +
                "    timestamp timestamp\n" +
                ")");
    }
}
```
<!--JDBC-->
```java
Properties properties = new Properties();
properties.setProperty("user", "admin");
properties.setProperty("password", "quest");
properties.setProperty("sslmode", "disable");

final Connection connection = 
    DriverManager.getConnection("jdbc:postgresql://localhost:9120/qdb", properties);
PreparedStatement statement = connection.prepareStatement(
    "create table balances (" +
    "    cust_id int," +
    "    balance_ccy symbol," +
    "    balance double," +
    "    status byte," +
    "    timestamp timestamp" +
    ")"
);
statement.execute();
connection.close();

```
<!--END_DOCUSAURUS_CODE_TABS-->

 - `cust_id` is the customer identifier. It uniquely identifies customer.
 - `balance_ccy` balance currency. We use `SYMBOL` here to avoid storing text against each record to save space and increase database performance.
 - `balance` is the current balance for customer and currency tuple.
 - `timestamp` timestamp in microseconds of the record.

Lets insert records:
<!--DOCUSAURUS_CODE_TABS-->
<!--SQL-->

```sql
insert into balances (cust_id, balance_ccy, balance, timestamp)
	values (1, 'USD', 1500.00, to_timestamp(6000000001));

insert into balances (cust_id, balance_ccy, balance, timestamp)
	values (1, 'EUR', 650.50, to_timestamp(6000000002));

insert into balances (cust_id, balance_ccy, balance, timestamp)
	values (2, 'USD', 900.75, to_timestamp(6000000003));

insert into balances (cust_id, balance_ccy, balance, timestamp)
	values (2, 'EUR', 880.20, to_timestamp(6000000004));
```
<!--REST-->
```shell 
curl -G "http://localhost:13005/exec" --data-urlencode "query=
insert into balances (cust_id, balance_ccy, balance, timestamp)
	values (1, 'USD', 1500.00, to_timestamp(6000000001))
"
```
<!--Java Raw-->
```java
CairoConfiguration configuration = new DefaultCairoConfiguration(".");
try (CairoEngine engine = new CairoEngine(configuration)) {
    try (TableWriter writer = engine.getWriter(AllowAllCairoSecurityContext.INSTANCE, "balances")) {
        TableWriter.Row r;

        r = writer.newRow(6000000001); // timestamp
        r.putInt(0, 1); // cust_id
        r.putSym(1, "USD"); // symbol
        r.putDouble(2, 1500.00); // balance
        r.append();

        r = writer.newRow(6000000002); // timestamp
        r.putInt(0, 1); // cust_id
        r.putSym(1, "EUR"); // symbol
        r.putDouble(2, 650.5); // balance
        r.append();

        r = writer.newRow(6000000003); // timestamp
        r.putInt(0, 2); // cust_id
        r.putSym(1, "USD"); // symbol
        r.putDouble(2, 900.75); // balance
        r.append();

        r = writer.newRow(6000000004); // timestamp
        r.putInt(0, 2); // cust_id
        r.putSym(1, "USD"); // symbol
        r.putDouble(2, 880.2); // balance
        r.append();

        writer.commit();
    }
}
```
<!-- JDBC -->
```java
Properties properties = new Properties();
properties.setProperty("user", "admin");
properties.setProperty("password", "quest");
properties.setProperty("sslmode", "disable");

final Connection connection = 
    DriverManager.getConnection("jdbc:postgresql://localhost:9120/qdb", properties);
PreparedStatement insert = connection.prepareStatement(
    "insert into balances (cust_id, balance_ccy, balance, timestamp)"+
     	"values (?, ?, ?, to_timestamp(?))";

)
insert.setInt(1, 1);
insert.setString(2, "USD");
insert.setDouble(3, 1500);
insert.setLong(4, 6000000001);

insert.execute();
connection.close();

```

<!--END_DOCUSAURUS_CODE_TABS-->


## (R)ead

Reading records can be done using `SELECT` or by reading a table directly via the Java API. 
Reading via the Java API (see tab `Java Raw`) iterates over a table and can therefore only access one table at a time.
If you would like to query various tables via the Java API, you can pass SQL to Java and read the resulting table 
(see tab `Java SQL`).

<!--DOCUSAURUS_CODE_TABS-->
<!--SQL-->
```sql
select * from balances;
```
<!--REST-->
```shell 
curl -G "http://localhost:9000/exec" --data-urlencode "query=select * from balances"
```
<!--Java SQL-->
```java
final String cairoDatabaseRoot = "/tmp";
CairoConfiguration configuration = new DefaultCairoConfiguration(cairoDatabaseRoot);
try (CairoEngine engine = new CairoEngine(configuration)) {
    try (SqlCompiler compiler = new SqlCompiler(engine)) {
        try (RecordCursorFactory factory = compiler.compile("select * from balances").getRecordCursorFactory()) {

            try (RecordCursor cursor = factory.getCursor()) {
                final Record record = cursor.getRecord();
                while (cursor.hasNext()) {
                    record.getInt(0); // cust_id
                    record.getSym(1); // symbol
                    record.getDouble(2); // balance
                    record.getByte(3); // status
                    record.getTimestamp(4); // timestamp
                }
            }
        }
    }
}
```
<!--Java Raw-->
```java
CairoConfiguration configuration = new DefaultCairoConfiguration(".");
try (CairoEngine engine = new CairoEngine(configuration)) {
    try (TableReader reader = engine.getReader(AllowAllCairoSecurityContext.INSTANCE, "balances")) {
        // closing this cursor will close reader too
        // lets close reader explicitly
        final TableReaderRecordCursor cursor = reader.getCursor();
        final Record record = cursor.getRecord();
        while (cursor.hasNext()) {
            record.getInt(0); // cust_id
            record.getSym(1); // symbol
            record.getDouble(2); // balance
            record.getByte(3); // status
            record.getTimestamp(4); // timestamp
        }
    }
}
```
<!--JDBC-->
```java
Properties properties = new Properties();
properties.setProperty("user", "admin");
properties.setProperty("password", "quest");
properties.setProperty("sslmode", "disable");

final Connection connection =
        DriverManager.getConnection("jdbc:postgresql://localhost:8812/qdb", properties);
PreparedStatement statement = connection.prepareStatement("select * from balances");

ResultSet resultSet = statement.executeQuery();

while (resultSet.next()) {
    System.out.println(resultSet.getInt(1)); // cust_id
    System.out.println(resultSet.getString(2)); // symbol
    System.out.println(resultSet.getDouble(3)); // balance
    System.out.println(resultSet.getByte(4)); // status
    System.out.println(resultSet.getTimestamp(5)); // timestamp
}
connection.close();
```
<!--END_DOCUSAURUS_CODE_TABS-->

## (U)pdate

Lets update balance of customer `1` in the `balances` table:

```sql
insert into balances (cust_id, balance_ccy, balance, timestamp)
	values (1, 'USD', 660.50, to_timestamp(6000000005));
```

You might expect an `UPDATE`. QuestDB uses `INSERT` which means each table keeps change history.
In order to select only the latest value, our `SELECT` statement will have to change. 
We use `LATEST BY` to only select last row for the `(1,USD)` tuple.

```sql
select * from balances latest by cust_id, balance_ccy
```

To view balances of selected customers you can run this query:                                                                       

```sql
select * from balances latest by cust_id, balance_ccy where cust_id = 1
```

In the above example QuestDB will execute the `where` clause *before* `latest by`. To execute `where` _after_ `latest by` 
we have to rely on sub-queries. This is an example of how to select customers with balances over 800.

```sql
(select * from balances latest by cust_id, balance_ccy) where balance > 800

```

> `latest by` performance note: QuestDB will search time series from newest values to oldest. For single `SYMBOL` column in `latest by` clause QuestDB will know all distinct values upfront. Time series scan will end as soon as
> all values are matched. For all other field types, or multiple fields QuestDB will scan entire time series. Although scan is very fast you should be aware that performance wil degrade on hundreds of millions of records. 