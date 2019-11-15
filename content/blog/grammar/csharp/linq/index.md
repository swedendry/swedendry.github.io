---
title: C# Linq 문법
date: "2019-11-15T15:00:00.000Z"
tags: ["grammar"]
description: "C# Linq 문법"
---

## Where
```c#
#query
from item in items
where item.count < 10

#lambda
items.Where(item => item.count < 10)
```