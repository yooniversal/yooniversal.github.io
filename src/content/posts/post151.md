---
title: "[BOJ 1486]"
excerpt: 등산
category: PS
date: 2020-10-07
toc: true
author:
  name: Yooniversal
  role: 개발
---
문제 바로가기 : [https://www.acmicpc.net/problem/1486](https://www.acmicpc.net/problem/1486)<br>
문제 설명은 위 링크에서 확인해주시길 바랍니다.

### solution
<script src="https://gist.github.com/yooniversal/6417e370afd837f40b01e371ab591900.js"></script>
<br>

### review
**플로이드 와샬**을 이용하면 깔끔하게 풀 수 있다. 범위가 적어서 적용 가능하다. 각 지점을 중심으로 상하좌우만 이동이 가능하다. 단, 높이 차가 `T`보다 작거나 같을 때만 허용된다. 조건에 맞춰서 이웃한 곳으로 이동할 때 드는 시간을 입력해주고 플로이드 와샬을 돌려서 모든 점으로 이동할 때 드는 최소 시간을 기록해준다. 최종적으로 왕복 시간이 `d`보다 작은 모든 산의 높이 중 최댓값을 취해 출력해주면 된다.

<script src="https://utteranc.es/client.js"
        repo="yooniversal/blog-comments"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
