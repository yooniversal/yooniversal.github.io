---
title: "[Programmers] 괄호 변환"
excerpt: 2020 KAKAO BLIND RECRUITMENT
category: PS
date: 2020-07-29
toc: true
author:
  name: Yooniversal
  role: 개발
---
문제 바로가기 : [https://programmers.co.kr/learn/courses/30/lessons/60058](https://programmers.co.kr/learn/courses/30/lessons/60058)<br>
문제 설명은 위 링크에서 확인해주시길 바랍니다.
## Solution
<script src="https://gist.github.com/yooniversal/d1493b61d39eefff4cc8e8e25be3d3cb.js"></script>
<br>

### review
문제 설명 안에 매커니즘이 포함돼있다. 잘 읽고 그대로 옮기면 된다(?) 입력받은 문자열이 올바른 괄호 문자열이 아니면 문자열을 2개로 쪼개고 각각 조건에 맞춰 진행하면 되는데, 앞을 `u`, 뒤를 `v`라고 하면 앞은 조건에 맞춰 진행할 수 있도록 하고 뒤는 recursive로 값을 구해서 붙여주면 된다.

<script src="https://utteranc.es/client.js"
        repo="yooniversal/blog-comments"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
