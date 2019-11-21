---
title: C# Linq 문법
date: "2019-11-15T15:00:00.000Z"
tags: ["grammar"]
description: "C# Linq 문법"
---

## Select
```c#
#lambda
items.Select(item => item.id)

#query
from item in items
select item.id
```

## SelectMany
```c#
#lambda
items.SelectMany(item => item.Stats)

#query
from item in items
from stat in item.Stats
select stat;
```

## Where
```c#
#lambda
items.Where(item => item.count < 10)

#query
from item in items
where item.count < 10
select item
```

## Orderby
```c#
#lambda
items.OrderBy(item => item.Type).ThenByDescending(item => item.Stats.Average())

#query
from item in items
orderby item.Type ascending, item.Stats.Average() descending
select item
```

## GroupBy
```c#
#lambda
items.GroupBy(item => item.Type)

#query
from item in items
group item by item.Type into g
select g
```

## Take
```c#
#lambda
items.Take(2)

#query
(from item in items
 select item).Take(2)
```

## Skip
```c#
#lambda
items.Skip(2)

#query
(from item in items
 select item).Skip(2)
```

## GroupJoin
```c#
#lambda
items.GroupJoin(
costumes,
item => item.Type,
costume => costume.Type,
(item, costumeGroup) => costumeGroup)

#query
from item in items
join costume in costumes on item.Type equals costume.Type into costumeGroup
select costumeGroup
```

## InnerJoin
```c#
#lambda
items.Join(
costumes,
item => item.Type,
costume => costume.Type,
(item, costume) => new { Item = item, Costume = costume })

#query
from item in items
join costume in costumes on item.Type equals costume.Type
select new { Item = item, Costume = costume }
```

## OuterJoin
```c#
#lambda
items.GroupJoin(
costumes,
item => item.Type,
costume => costume.Type,
(item, costumeGroup) => new { Item = item, CostumeGroup = costumeGroup })

#query
from item in items
join costume in costumes on item.Type equals costume.Type into costumeGroup
select new { Item = item, CostumeGroup = costumeGroup }
```