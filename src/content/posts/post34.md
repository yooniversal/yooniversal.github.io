---
title: "[Programmers] 124 나라의 숫자"
excerpt: ""
category: PS
date: 2020-07-22
toc: true
author:
  name: Yooniversal
  role: 개발
---
문제 바로가기 : [https://programmers.co.kr/learn/courses/30/lessons/12899](https://programmers.co.kr/learn/courses/30/lessons/12899)<br>
문제 설명은 위 링크에서 확인해주시길 바랍니다.

**Solution**

<script src="https://gist.github.com/yooniversal/9ca72e1443849b271ffe92ecd1a1a4fb.js"></script>
<br>

### review

틀린 답을 제출해보니 '효율성 테스트'가 있어서.. DP로 만들어보면 어떨까 싶어 짜봤다. string을 반환하는건 처음해보는데 정답이란건 없고 표현하는 만큼 자유로워지는게 코딩이구나 싶더라. 아무튼! 이 문제는 10진수를 1, 2, 4로 이루어진 숫자로 나타내면 된다. 당연히 3진법이 떠올랐다.

3진법은 0, 1, 2로 이루어져있는데 이 문제는 '0'은 없고 '4'는 있다. 근데 또 서로 대응되는 관계는 아니다. 몇가지 예를 들어서 힌트를 찾아보자.
```cpp
/*
8 = 3 * 2 + 2 : 22
9 = 3 * 3 + 0 : 24

13 = 3 * 4 + 1 : 111
14 = 3 * 4 + 2 : 112
15 = 3 * 5 + 0 : 114

n%3 == 0 이면 3으로 나눈 몫(n/3)을 1로 낮추고 뒷자리를 4로 채운다.
*/
=> if(n%3==0) dp[n] = ddp(n/3 -1) + ddp("4");
```
참고로 2000001은 큰 의미가 있는건 아니고 메모리 초과가 나는거 같아서 오류가 안나는만큼 정해줬다.

<script src="https://utteranc.es/client.js"
        repo="yooniversal/blog-comments"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
