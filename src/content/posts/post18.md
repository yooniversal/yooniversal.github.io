---
title: "[BOJ 4195]"
excerpt: 친구 네트워크
category: PS
date: 2020-07-16
toc: true
author:
  name: Yooniversal
  role: 개발
---
문제 바로가기 : [https://www.acmicpc.net/problem/4195](https://www.acmicpc.net/problem/4195)<br>

**Solution**

<script src="https://gist.github.com/yooniversal/480cf48769567a3fb0c622f76dd45862.js"></script>
<br>

### review
처음엔 단순히 union-find 알고리즘과 시퀀스 컨테이너로 풀어보려고 했다. 알고 있는게 이것 뿐이어서😂 근데 작성할 수록 시간초과의 냄새가 진해졌다. string을 탐색하는데 계속 O(n)이면 답도 없다.. 도구를 바꿔보는게 맞다고 생각이 들었고 찾아보니 연관 컨테이너에 속해있는 **map**이나 **unordered-map**을 이용하면 됐다! 한 번도 써본적이 없어서 c++ stl map을 계속 뒤져봤는데 사용 방법은 2가지 모두 같고 구현 방식만 다르더라.

첫 번째가 string일 경우 map["String key"]가 value로 나오는게 진짜 놀라웠다. 이런 쩌는 방법이 있다니?.?

성장하는데 있어서 호기심 부족(~~게으름~~)은 큰 족쇄가 된다는걸 느끼는 문제였다. 관성에 젖지말자.

<script src="https://utteranc.es/client.js"
        repo="yooniversal/blog-comments"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
