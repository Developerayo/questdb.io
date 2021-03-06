---
id: joins
title: JOINS
sidebar_label: JOINS
---

QuestDB supports the following types of joins: `INNER`, `OUTER`, `CROSS`, `ASOF` and `SPLICE`. `FULL` joins are not yet implemented and are on our roadmap. All supported
join types can be combined in a single SQL statement; it is job of QuestDB SQL optimiser to determine best execution order and algorithms.

There are no known limitations on size of tables or sub-queries participating in joins and there are no limitations on number of joins either.

## Join Syntax
![alt-text](assets/joins.svg)

Following data join columns from joined tables are combined in single row. Same name columns originating from different tables will be automatically aliased to create
unique column namespace of the result set.

Though it is a best practice to diligently specify join conditions, QuestDB will also analyse `WHERE` clause for implicit join condition and will derive transient join conditions where necessary.

> When tables are joined on column that has the same name in both tables you can use shorthand `ON (column)` clause

## (INNER) JOIN 

### Overview
`(INNER) JOIN` is used to return rows from 2 tables where the records on the compared column have matching values in both tables
![alt-text](assets/innerjoin.gif)

### Examples

The following query will return the movieId and the average rating from table `ratings`. It will also add a column
for the `title` from table `movies`. The corresponding title will be identified based on the `movieId` in the `ratings` table
matching an `id` in the `movies` table.
```sql
SELECT movieId a, title, avg(rating)
FROM ratings
INNER JOIN (select movieId id, title from movies)
ON ratings.movieId = id; 
```

By default `JOIN` is interpreted as `INNER JOIN`. Therefore `INNER` can be dropped

```sql
SELECT movieId a, title, avg(rating)
FROM ratings
JOIN (select movieId id, title from movies)
ON ratings.movieId = id; 
```

## OUTER JOIN

### Overview
`OUTER JOIN` will return **all** records from the LEFT table, and if matched, the records of the RIGHT table.
When there is no match for the RIGHT table, it will return `NULL` values in right table fields
![alt-text](assets/leftjoin.gif)

### Examples
General syntax is as follows:
```sql
SELECT tab1.colA, tab2.colB 
FROM table1 tab1 
OUTER JOIN table2 tab2
ON tab1.colA = tab2.colB;
```

`OUTER JOIN` query can also be used to select all rows in left table that do not exist in right table. 

```sql
SELECT tab1.colA, tab2.colB 
FROM table1 tab1 
OUTER JOIN table2 tab2
ON tab1.colA = tab2.colB
WHERE tab2.colB = NULL
```

## CROSS JOIN

### Overview
`CROSS JOIN` will return the cartesian product of the two tables being joined. It can be used to a table with all possible combinations.

> Note that `CROSS JOIN` does not have `ON` clause.

### EXAMPLE
The following will return all possible combinations of starters and deserts
```sql
SELECT * FROM starters CROSS JOIN deserts;
```


## ASOF JOIN

### Overview
`ASOF` joins are used on time-series data to join two tables based on timestamp where timestamps do not exactly match.
For a given record at a given timestamp, it will return the corresponding record in the other table at the closest timestamp
**prior to** the timestamp in the first table.

>To be able to leverage `ASOF JOIN`, both joined table must have a designated `timestamp` column. To designate a column as `timestamp`, 
>please refer to the **[CREATE TABLE](createTable.md)** section.

`ASOF` join is performed on tables or result sets that are ordered by time. When table is created as ordered by time order of records is
enforced and timestamp column name is in table metadata. `ASOF` join will use timestamp column from metadata.

### Example
Consider the following tables.
```shell script
ASKS                               
===================================
ts,                          ask   
-----------------------------------
2019-10-17T00:00:00.000000Z, 100   
2019-10-17T00:00:00.200000Z, 101   
2019-10-17T00:00:00.400000Z, 102   
```

```shell script
BIDS                             
=================================
 ts,                          bid
---------------------------------
 2019-10-17T00:00:00.100000Z, 101
 2019-10-17T00:00:00.300000Z, 102
 2019-10-17T00:00:00.500000Z, 103
```

Therefore the following query:
```sql
SELECT
 BIDS.ts timebid,
 bid,
 ask 
FROM BIDS ASOF JOIN ASKS
```

Will return the following results
```shell script
RESULTS                               
=================================================
ts,                          bid        ask
-------------------------------------------------
2019-10-17T00:00:00.000000Z, 100,      101
2019-10-17T00:00:00.200000Z, 101,      101
2019-10-17T00:00:00.400000Z, 102,      102
```

>Note that there is no `ASKS` at timestamp `2019-10-17T00:00:00.100000Z`. The `ASOF JOIN` will look for the value in the
>`BIDS` table that has the closest timestamp inferior or equal to the target timestamp.

In case tables do not have designated timestamp column, but data is in chronological order, timestamp columns can be specified at runtime:

```sql
SELECT
 BIDS.ts timebid,
 bid,
 ask 
FROM (BIDS timestamp(ts)) ASOF JOIN (ASKS timestamp (ts))
```

>`ASOF` join does not check timestamp order, if data is not in chronological order join result is non-deterministic

Above query assumes that there is only one instrument in `BIDS` and `ASKS` tables and therefore does not use the optional `ON` clause. 

If both tables store data for multiple instruments `ON` clause will allow you to find bids for asks with matching instrument value.

```sql
SELECT * FROM ASKS ASOF JOIN BIDS ON (instrument);
```

## SPLICE JOIN

### Overview
`SPLICE JOIN` is a full `ASOF JOIN`. It will return all the records from both tables. For each record from left table splice join will find
prevailing record from right table and for each record from right table - prevailing record from left table. 

### Examples
Considering the following tables.
```shell script
ASKS                               
===================================
ts,                          ask   
-----------------------------------
2019-10-17T00:00:00.000000Z, 100   
2019-10-17T00:00:00.200000Z, 101   
2019-10-17T00:00:00.400000Z, 102   
```

```shell script
BIDS                             
=================================
 ts,                          bid
---------------------------------
 2019-10-17T00:00:00.100000Z, 101
 2019-10-17T00:00:00.300000Z, 102
 2019-10-17T00:00:00.500000Z, 103
```

This query:
```sql
SELECT ts timebid, bid, ask 
FROM BIDS SPLICE JOIN ASKS
```

Will return the following results
```shell script
RESULTS                               
=================================================
ts,                          bid        ask
-------------------------------------------------
2019-10-17T00:00:00.000000Z, 100,      null
2019-10-17T00:00:00.100000Z, 100,      101
2019-10-17T00:00:00.200000Z, 101,      101
2019-10-17T00:00:00.300000Z, 101,      102
2019-10-17T00:00:00.400000Z, 102,      102
2019-10-17T00:00:00.500000Z, 101,      103
```

Note that the above query does not use the optional `ON` clause. In case you need additional filtering on the two tables, you can use the `ON` clause as follows:

```sql
SELECT ts timebid, instrument bidInstrument, bid, ask 
FROM BIDS 
SPLICE JOIN 
    (
    SELECT ts timesask, instrument askInstrument, ask ask 
    FROM ASKS
    )
    ON bidInstrument=askInstrument;
```
