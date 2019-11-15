---
title: Sql 문법
date: "2019-11-15T15:00:00.000Z"
tags: ["grammar"]
description: "Sql 문법"
---

## Select
```sql
#mssql
select * from Users

#mongodb
db.Users.find()
```

|sql|mongodb|
|:---|:---|
|select * from Users|db.Users.find()|

## Where
```sql
#mssql
select * from Users where Lv > 10

#mongodb 
db.Users.find({Lv:: { $gt: 10}})
```