---
title: "[BOJ 12999]"
excerpt: 화려한 마을3
category: PS
date: 2020-09-17
toc: true
author:
  name: Yooniversal
  role: 개발
---
문제 바로가기 : [https://www.acmicpc.net/problem/12999](https://www.acmicpc.net/problem/12999)<br>
문제 설명은 위 링크에서 확인해주시길 바랍니다.

**solution**

<script src="https://gist.github.com/yooniversal/474fea648c9bbcf9351d5e9f8704db9e.js"></script>
<br>

### review
**Mo's Algorithm** 응용 문제. 유사한 문제로는 [BOJ 12986: 화려한 마을2](https://www.acmicpc.net/problem/12986), [BOJ 6515: Frequent values](https://www.acmicpc.net/problem/6515)가 있다. 사실 유사하다기 보다는 Mo's Algorithm으로 코드를 짰다면 입력 형식만 맞췄을 때 동일한 코드로 모두 통과할 수 있다. 화려한 마을2는 입력받는 수열이 오름차순이라는 조건만 다른데 Mo's Algorithm은 수열의 정렬 상태와는 관련없이 답을 구할 수 있다. 때문에 무작위로 받는 화려한 마을3 문제에서도 같은 코드로 통과할 수 있다.

[BOJ 13548: 수열과 쿼리 6](/ps/post137/)도 유사 문제인데 입력받는 수가 음수를 포함하지 않는다. 때문에 이 부분만 해결해주면 쉽게 AC를 받을 수 있다.

<script src="https://utteranc.es/client.js"
        repo="yooniversal/blog-comments"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
