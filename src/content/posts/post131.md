---
title: "[BOJ 1753]"
excerpt: 최단 경로
category: PS
date: 2020-09-08
toc: true
author:
  name: Yooniversal
  role: 개발
---
문제 바로가기 : [https://www.acmicpc.net/problem/1753](https://www.acmicpc.net/problem/1753)<br>
문제 설명은 위 링크에서 확인해주시길 바랍니다.

### solution
<script src="https://gist.github.com/yooniversal/1411def643b90cefabf706efc2a7a266.js"></script>
<br>

### review
시작점이 input으로 주어진다. 이 시작점으로부터 다른 정점까지 가는 최단 거리를 구하면 된다. 다익스트라 알고리즘을 사용하며 우선순위 큐(`pq`)에 들어간 값 중 중복된 값은 `visited`를 이용해 넘어가야 TLE를 안받는다.

<script src="https://utteranc.es/client.js"
        repo="yooniversal/blog-comments"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
