---
title: "[BOJ 10254]"
excerpt: 고속도로
category: PS
date: 2020-08-28
toc: true
author:
  name: Yooniversal
  role: 개발
---

문제 바로가기 : [https://www.acmicpc.net/problem/10254](https://www.acmicpc.net/problem/10254)<br>
문제 설명은 위 링크에서 확인해주시길 바랍니다.
<br>

**solution**

<script src="https://gist.github.com/yooniversal/1847065b027d3c2e842fa2c1fb1c499b.js"></script>

### review
**Convex Hull 알고리즘**으로 볼록 껍질을 구한 후, 회전하는 캘리퍼스 알고리즘을 이용하면 원하는 답을 얻을 수 있다. [stonejjun님의 글](https://stonejjun.tistory.com/42)에 알고리즘 설명이 잘 돼있으니 참고! 코드에 쓰인 `A, B, C, D`는 위 링크에서 쓰이는 점 A, B, C, D를 의미한다.

기존에 썼던 [Convex Hull 알고리즘](/ps/post102/)을 가능한 건드리지 않으면서 추가했다.

<script src="https://utteranc.es/client.js"
        repo="yooniversal/blog-comments"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
