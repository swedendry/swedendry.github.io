---
title: GitHub 블로그 만들기 by Gatsby
date: "2019-11-14T17:00:00.000Z"
tags: ["react", "github"]
description: "GitHub 블로그 만들기"
---

## 필수 조건
+ github repository(username/github.io)
+ npm
+ node.js
+ gatsby
+ gh-pages

## 설치
```
#gatsby 설치
npm install -g gatsby-cli

#gh-pages 설치
npm install gh-pages --save-dev
```

## Gatsby
```
#https://github.com/gatsbyjs/gatsby-starter-blog 샘플 설치
gatsby new my-blog-starter https://github.com/gatsbyjs/gatsby-starter-blog
gatsby develop

#localhost:8000/ 확인
```

## 코드 수정
```
#package.json deploy 추가
 "scripts": {
     ~~~
    "deploy": "gatsby build --prefix-paths && gh-pages -d public -b master"
  }
  
#gatsby-config.js 수정
#package.json 수정
```

## GitHub
```
#develop branch에 개발 리소스 올리기
git remote add origin `repository`
git branch develop
git checkout develop
git push -u origin develop

#master branch에 빌드 리소스 올리기
npm run deploy

#username/github.io/ 확인
```
