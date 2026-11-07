---
title: "[BOJ 7626]"
excerpt: 직사각형
category: PS
date: 2020-08-21
toc: true
author:
  name: Yooniversal
  role: 개발
---

문제 바로가기 : [https://www.acmicpc.net/problem/7626](https://www.acmicpc.net/problem/7626)<br>
문제 설명은 위 링크에서 확인해주시길 바랍니다.
<br>

**solution**

<script src="https://gist.github.com/yooniversal/4ae08562173db329ba9fb1905f746103.js"></script>
<br>

### review
[BOJ 3392: 화성지도](/ps/post86/)와 거의 똑같은 문제다. 출력해야 하는 내용은 같다. 직사각형의 넓이를 구하면 되는 문젠데 다만 다른 점이 있다면 좌표 범위가 다르다. 좌표 범위가 장난 아니기 때문에 인덱스에 고스란히 담을 수가 없다. 하지만 점의 개수가 최대 20만이다! 그러므로 좌표 압축을 통해서 풀 수 있다. 이 부분만 신경쓰면 다른 로직은 똑같다.

<script src="https://utteranc.es/client.js"
        repo="yooniversal/blog-comments"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
