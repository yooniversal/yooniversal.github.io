---
title: "[Programmers] [1차] 캐시"
excerpt: 2018 KAKAO BLIND RECRUITMENT
category: PS
date: 2020-09-07
toc: true
author:
  name: Yooniversal
  role: 개발
---
문제 바로가기 : [https://programmers.co.kr/learn/courses/30/lessons/17680](https://programmers.co.kr/learn/courses/30/lessons/17680)<br>
문제 설명은 위 링크에서 확인해주시길 바랍니다.

**solution**

<script src="https://gist.github.com/yooniversal/eca2393e19a039be11c4457d65697ac2.js"></script>
<br>

### review
최근에 사용되지 않은 페이지를 제거하는 LRU 알고리즘을 구현해서 캐시 크기를 고려하며 답을 갱신해주면 된다. 성능을 전혀 고려하지 않고 짰지만 통과하는덴 문제 없었다. 좀 더 효율적으로 구현하려면 리스트를 사용해야 한다. LRU 알고리즘 예제를 알아보기 전까지 아예 잘못 이해하고 풀어서 한동안 진전이 없었었는데, 각 페이지에 갱신된 횟수(`cnt`)를 고려하면 안된다!!

말 그대로 **제일 적게 사용된** 페이지를 제거해야 한다. 횟수와 상관없다. 이전에 썼던 코드에서 일부만 주석 처리하니 AC가 떠가지고 그 부분만 급하게 지웠는데 구조체 data의 `cnt`는 필요가 없다!

<script src="https://utteranc.es/client.js"
        repo="yooniversal/blog-comments"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
