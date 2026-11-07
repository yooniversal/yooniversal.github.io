---
title: "[BOJ 6850]"
excerpt: Cows
category: PS
date: 2020-08-30
toc: true
author:
  name: Yooniversal
  role: 개발
---

문제 바로가기 : [https://www.acmicpc.net/problem/6850](https://www.acmicpc.net/problem/6850)<br>
문제 설명은 위 링크에서 확인해주시길 바랍니다.
<br>

## solution
<script src="https://gist.github.com/yooniversal/9efa1537dff54dfc82c9c3fcf9118d21.js"></script>

### review
주어진 면적에서 소 한 마리당 필요한 면적 50을 나눈 값을 출력하면 된다. 볼록 껍질에 속하는 점들을 정렬된 상태로 모은 후 기준값과 나머지 두 점을 차례로 외적해 2로 나눈다. 외적해서 2로 나눈 값은 삼각형의 넓이가 된다. 이걸 모아서 50으로 나누면 끝.

<script src="https://utteranc.es/client.js"
        repo="yooniversal/blog-comments"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
