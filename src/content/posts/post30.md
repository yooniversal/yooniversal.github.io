---
title: "[Programmers] 멀쩡한 사각형"
excerpt: Summer/Winter Coding(2019)
category: PS
date: 2020-07-21
toc: true
author:
  name: Yooniversal
  role: 개발
---
문제 바로가기 : [https://programmers.co.kr/learn/courses/30/lessons/62048](https://programmers.co.kr/learn/courses/30/lessons/62048)<br>
문제 설명은 위 링크에서 확인해주시길 바랍니다.

**Solution**

<script src="https://gist.github.com/yooniversal/fd9a14fcb62f1164f67b2a1a41edeae6.js"></script>
<br>

### review

굳이 분류를 하자면 Math인거 같고 규칙을 찾기까지 이것저것 그려나가면서 풀었다. 이런 분류의 문제들은 상당 부분 몇가지 예를 통해 규칙을 찾아서 일반화(귀납)하면 풀린다. 반례를 얼마나 꼼꼼하게 찾느냐에 따라서 답 여부가 갈리긴 하는데 나같이 잔실수가 많으면 조금 힘들다. ㅠㅠ

예제 그림(링크 참고)에서 대각선이 지난 부분을 보면 같은 모양이 4번 반복된다. 몇 번 예를 그려보면 알겠지만 이 반복되는 횟수는 w, h의 최소공약수이다!

그럼 반복되는 모양 아니, 갯수는 어떻게 구해줘야 할까? 이것도 작은 케이스부터 그려나가면서 규칙을 찾았다. 대각선이 지나가는 부분을 x라고 하면, 아무리 적어도 x는 세로보다 크다. 즉, x >= h 이다. (ex. n*n 블럭) 계속 추가되는 블럭들은 (가로-1)이다. 규칙을 찾다 알게 된거라서 증명은 못하겠다..

반복되는 횟수는 GCD(w,h)라고 했다. 최소한 반복되는 블럭을 잡기 위해서 nw, nh을 정의해줬다.
```cpp
int GCD(int w, int h){
    while(h != 0){
        int tmp = w%h;
        w = h;
        h = tmp;
    }
    return w;
}
...

long long nw = w/GCD(h,w);
long long nh = h/GCD(h,w);
```
w>h, w<=h 로 나누기 귀찮아서 w<=h로 고정되도록 만들어줬고(swap) 반환하는 자료형이 long long임을 보아 w*h에서 int 범위를 초과할 수도 있다는 생각이 들었다. 그래서 long long을 덕지 덕지 붙여줬다. 더러워보인다면 죄송!.


<script src="https://utteranc.es/client.js"
        repo="yooniversal/blog-comments"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
