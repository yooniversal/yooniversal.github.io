---
title: "[Spring] java.lang.NoSuchFieldError: Class com.sun.tools.javac.tree.JCTree"
excerpt: ""
category: Project
date: 2023-07-25
toc: true
author:
  name: Yooniversal
  role: 개발
---

### 문제 상황
intellij에서 `Gradle(우측 탭)-clean-build`를 통해 테스트, 컴파일 및 빌드를 해왔는데 이렇게 빌드를 할 때는 문제가 없었으나 Github Actions로 CI를 붙이려는 중에 `gradlew`로 빌드를 하는 과정이 있어 터미널로 직접 해보다가 에러가 발생했다.
> java.lang.NoSuchFieldError: Class com.sun.tools.javac.tree.JCTree

### 해결 방법
JDK 로컬 환경변수와 intellij 환경변수가 달라서 컴파일(`compileJava`)이 계속 안되고 있었다. 맥을 사고나서 지금까지 JDK 환경변수를 로컬에서 따로 설정해주지 않고 intellij에서만 등록해서 사용해와서 몰랐는데 로컬과 intellij에서의 환경변수를 서로 맞춰주니 해결할 수 있었다.
<br>

터미널에서 `cd /Library/Java/JavaVirtualMachines`을 입력하면 JDK가 있는 경로로 이동할 것이고, 거기서 사용할 JDK 버전을 찾는다. 만약 JDK 17이라면 `jdk-17.jdk`을 기억해두자. 그리고 `vi ~/.bash_profile`를 입력해 `bash_profile` 파일을 vim으로 연 뒤 다음 내용을 입력하고 저장해주자.
```
JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home
PATH=$PATH:$JAVA_HOME/bin
export JAVA_HOME
export PATH
```
<br>

그리고 `source .bash_profile`를 입력해주면 `bash_profile`에 저장한 내용을 등록할 수 있다. `echo $JAVA_HOME` 그리고 `java -version`을 입력해 java 버전을 확인해주자. 참고로 intellij 터미널에서는 `echo $JAVA_HOME`, `java -version`을 입력해도 제대로 값이 안나올 수 있다. 그래도 `bash_profile`에 내용이 이미 저장된 상태이므로 `source .bash_profile`를 입력하면 해결된다.
<br>

## Reference
[개발 GYM: [java] mac os , 맥북 JAVA 환경변수 설정](https://gymdev.tistory.com/72)
