---
title: Sql 문법
date: "2019-11-15T15:00:00.000Z"
tags: ["grammar"]
description: "Sql 문법"
---

|query|sql|mongodb|
|:---|:---|:---|
|Select|select * from Users|db.Users.find()|
|Where|select * from Users where Lv > 10|db.Users.find({Lv:: { $gt: 10}})|
|Delete|delete from Users|db.Users.remove()|
|Orderby|select * from Users order by Lv|db.Users.find().sort({"Lv": 1})|

## Select
```sql
#mssql
select * from Users

#mongodb
db.Users.find()
```

## Where
```sql
#mssql
select * from Users where Lv > 10

#mongodb 
db.Users.find({Lv:: { $gt: 10}})
```