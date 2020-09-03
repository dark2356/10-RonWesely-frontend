# 10-Rone-wesely-frontend

## 프론트앤드가 지켜야 할 기본 사항!!!
- 아침 10시 회의
- 백앤드와 소통
- 커밋하기 전에 팀원들에게 확인 하기
- 작업 시작 전, 수시로 소스 최신버전 받기

## 개발 인원 및 기간
- 개발 기간 : 2020/07/20 ~ 2020/07/31
- 개발 인원 : 프론트엔드 3명 , 백엔드 2명


## 팀원
[백엔드]
- 10기 이곤호 [PM]
- 10기 황수미

[프론트엔드]
- 10기 서동찬
- 10기 이병훈
- 10기 이윤식

## 목적
+ Front-End 
  + React 기술로 활용한 첫 팀 웹페이지 프로젝트
  + React의 기본인 LifeCycle과 state/props를 이해하기 위하여 Class형 컴포넌트 적용
  + 백앤드 (서버) 비동기 통신 이해를 위해 Javascript 내장객체 fetch 함수 활용
  + 2주라는 짧은 기간동안 배운 기술을 활용하여 최대한 실제 와이즐리 면도기 사이트를 재현

## 적용 기술 및 구현 기능
### 적용 기술 
- React (Class Component)
- HTML
- SCSS/SASS
- GIT : 소스 협업 관리
- Fetch 내장함수 (백 앤드와 api 통신)
- SLACK / Trello : 프로젝트 진행 관리


## Front-End 담당 업무
### 10기 서동찬
- [x] 상단 네비게이션
+ [x] 오른쪽 사이드바 
  + 제품 색상 선택
  + 제품 장바구니
    + 제품 추가 / 수정 / 삭제 
- [x] 시작하기 (메인) 페이지 구현

### 10기 이병훈
+ [x] 대용량 팩 할인 페이지 구현
+ [x] 쉐이빙 젤 페이지 구현
  + 제품 중복 선택 방지
- [x] 구매 목록 구현

### 10기 이윤식
- [x] 로그인
- [x] 회원 가입
- [x] 회원 수정
- [x] 마이페이지


# 깃 작업 순서
0. `git pull origin master` <- 항상 시작 전 / 수시로 최신버전을 받음.
1. `git branch feature/브랜치명` <- 항상 작업하기 전에 자신의 브랜치 확인
2. `git pull origin master` 명령어로 최신 코드를 받기
3. 코드를 작업
4. 프로젝트 상위 디렉토리로 가서 `git add .` 명령어로 내가 수정한 코드를 git stage로 올림
5. `git status` add가 잘 되었는지 확인
6. `git commit -m "commit message"` <- commit message작성
7. `git push origin feature/jun` <- 본인 브랜치에서 작업한 내용 push (팀원에게 확인 후)
