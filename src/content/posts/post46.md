---
title: "[BOJ 11585]"
excerpt: 속타는 저녁 메뉴
category: PS
date: 2020-07-28
toc: true
author:
  name: Yooniversal
  role: 개발
---
문제 바로가기 : [https://www.acmicpc.net/problem/11585](https://www.acmicpc.net/problem/11585)<br>
유사 문제 : [https://www.acmicpc.net/problem/10266](https://www.acmicpc.net/problem/10266)<br>
문제 설명은 위 링크에서 확인해주시길 바랍니다.

**Solution**

<script src="https://gist.github.com/yooniversal/8e3d1ac3b1a5233e159535bb7b7a9f53.js"></script>
<br>

### review
[BOJ 10266](https://www.acmicpc.net/problem/10266) 먼저 풀려고 했는데 관련 문제가 있다고 해서 어쩌다가 풀게됐다. 이렇게 하면 되지 않을까 싶어서 시도해봤는데 풀렸다! 아이디어도 어렵지 않게 떠올릴 수 있었다. 문자열 T, P가 있으면(length: T>=P) P가 얼마나 반복되는지 탐색하는 문제다. 길이 제한때문에 KMP 알고리즘으로 풀었다. 처음 입력받는 문자열이 P가 되고, 두번째로 입력받는 문자열의 2배가 T가 되어야 한다. 2배가 되는게 포인트다!

예를 들어보자. 위에서는 입력받는 문자열 2배가 T라고 했지만 편의상 여기선 입력받는 문자열을 T라고 해보자. T에서는 P가 반복될 수 없다. 서로 길이도 같아서 문자열의 일부는 맞을 수 있어도 전체가 일치할 수 없다. (T != P라고 가정)
```
T : EATIWANTM
P : IWANTMEAT
```
하지만 T에 T를 더해주면 상황이 달라진다. P를 탐색할 수 있게 된다. 답인 부분에 표시를 하면 다음과 같다.
```
T += T;

       *        *
T : EATIWANTMEATIWANTM
P : IWANTMEAT
```
근데 두번째 답은 P의 길이를 넘는 위치에 있다. 때문에 답에서 제외한다. 두번째 테스트 케이스를 보자. 답인 부분에 표시를 하면 다음과 같다.
```
     *  *   X
T : BAABAABAABAA
P : AABAAB
```
하지만 for문에서 T를 탐색하는 i의 범위를 다음과 같이 하면 틀리게 된다. 잘 생각해보자.
```cpp
for (int i = 0; i < 2*n; i++) {
		//불일치
		while (idxP > 0 && T[i] != P[idxP])
			idxP = saveP[idxP - 1];
		//일치
    ...
}
```
왜 이렇게하면 틀릴까? n=6이므로 P의 6번째까지 탐색이 유효하다. 길이가 6이니까 6~11번까지 탐색을 할 수 있다. 근데 2n으로 범위를 잡아서 12번도 탐색을 하게되면 위에서는 답이 안되지만 분명 답이 될 수 있는 후보다. 때문에 11번까지 탐색해야 하므로 `2n-1`로 고쳐주면 통과할 수 있다.

<script src="https://utteranc.es/client.js"
        repo="yooniversal/blog-comments"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
