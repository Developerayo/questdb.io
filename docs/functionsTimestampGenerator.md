---
id: functionsTimestampGenerator
title: Timestamp Generator
sidebar_label: Timestamp Generator
---

## timestamp_sequence
- `timestamp_sequence(startTimestamp, step)` - generates increasing timestamps.

#### Arguments
- `startTimestamp`: is a `timestamp` representing the starting (i.e lowest) generated timestamp in the sequence.
- `step`: is a `long` representing the interval between 2 consecutive generated timestamps in `microseconds`.

#### Description
- `timestamp_sequnence(startTimestamp, step)` generates a sequence of `timestamp` starting at `startTimestamp`, 
and incrementing by a `step` set as a `long` value in microseconds. This `step` can be
    - a static value, in which case the growth will be monotonic.
    - a randomized value, in which case the growth will be randomized. 
    This is done using **[random value generator functions](functionsRandomValueGenerators.md)**.

#### Return value
Return value type is `timestamp`. 

#### Examples
- Monotonic timestamp increase
```sql
SELECT x, timestamp_sequence
            (
            to_timestamp('2019-10-17T00:00:00', 'yyyy-MM-ddTHH:mm:ss'), 
            100000L
            ) 
FROM long_sequence(5);
```

```
| x         | timestamp_sequence                |
|-----------|-----------------------------------|
| 1         | 2019-10-17T00:00:00.000000Z       |
| 2         | 2019-10-17T00:00:00.100000Z       |
| 3         | 2019-10-17T00:00:00.200000Z       |
| 4         | 2019-10-17T00:00:00.300000Z       |
| 5         | 2019-10-17T00:00:00.400000Z       |
```
 
- Randomized timestamp increase, in this case steps between 10 and 50 milliseconds .
```sql
SELECT x, timestamp_sequence
            (
            to_timestamp('2019-10-17T00:00:00', 'yyyy-MM-ddTHH:mm:ss'), 
            rnd_short(1,5) * 100000L
            ) 
FROM long_sequence(5);
```

```
| x         | timestamp_sequence                |
|-----------|-----------------------------------|
| 1         | 2019-10-17T00:00:00.000000Z       |
| 2         | 2019-10-17T00:00:00.100000Z       |
| 3         | 2019-10-17T00:00:00.600000Z       |
| 4         | 2019-10-17T00:00:00.900000Z       |
| 5         | 2019-10-17T00:00:01.300000Z       |
```
