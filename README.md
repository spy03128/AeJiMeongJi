## 🐶 반려동물 길잡이 어플리케이션 애지멍지


![3팀](https://user-images.githubusercontent.com/57143818/193455201-5ce2a1b5-b64b-4bb8-afa9-c8d97e764669.png)

-----


## 1. 애지멍지 소개 영상

### [소개 영상](https://studio.youtube.com/video/8nHvTzSVFO4/edit)

### [공식 UCC]([애지멍지 UCC - YouTube](https://www.youtube.com/watch?v=ncZlw1T7s14))



----

## 2. 프로젝트 진행 기간

2022-07-11 ~ 2022-08-19



----

## 3. 기획 배경



강아지를 매일 산책시켜주고 강아지와 함께갈 수 있는 장소를 확인하고 정해진 기간에 예방접종을 맞아야하는 것처럼 강아지가 행복할 수 있도록 하기 위해서는 많은 지식이 필요합니다. 

하지만 정보를 얻기위해서는 다른 플랫폼을 이용하거나 검색에 의존해야 합니다. 
**저희는 이러한 불편함을 개선하기 위해 반려견 양육에 필요한 것들을 종합하여 제공 하고자합니다!**



----

## 4. 애지멍지 기능소개

***애지멍지는 반려견과 견주 모두 행복할 수 있도록 도와주는 모바일 어플리케이션 입니다***



**(1) 로그인 / 회원가입**

- 애지멍지는 회원가입 및 로그인을 기반으로 진행됩니다. 

- 로그인을 하게 되면 키우고 있는 강아지들을 등록할 수 있는 화면이 나옵니다. 

- 새로 가입한 유저인 경우 전환할 수 있는 강아지 프로필이 나타나지않으며 프로필 추가
  버튼을 선택해서 강아지를 등록할 수 있습니다.



**(2) 멀티 프로필**

- 여러 마리 강아지가 등록된 경우 각각의 프로필을 선택해서 전환할 수 있습니다. 

- 강아지별로 등록된 일정이나 정보가 다르지만 프로필 전환 탭을 통해서 쉽게 전환하고 관리할 수 있습니다.



**(3) 가이드**

- 강아지를 어떻게 하면 잘 키울 수 있는지에 대한 상세한 가이드 정보를 어플을 통해서 얻을 수 있습니다.



**(4) 일정관리**

- 하루 단위로 Todo list를 등록해서 홈화면에 표시할 수 있고 달력에서 산책현황을 볼 수 있습니다. 

- 또한 프로필 추가시 입력한 생년월일을 바탕으로 예방접종을 맞아야하는 날짜를 달력에 자동으로 표시해주어 강아지의 예방접종 시기를 놓치지않도록 도와줍니다.



**(5) 펫플레이스**

- 애지멍지는 현재위치를 기반으로 5km 이내 강아지와 동반할 수 있는 펫플레이스를 알려줍니다. 

- 관광지, 숙소, 캠핑, 쇼핑, 애견유치원, 음식점 총 6개의 카테고리별로 펫플레이스정보를 제공합니다. 

- 네이버 리뷰를 바탕으로 해당 장소에 대한 리뷰와 정보도 함께 제공합니다.



**(6)  산책**

- 강아지와 나갈 준비가 되었으면, 이제 출발하세요! 

- 견주가 강아지 산책 시작 버튼을 클릭하면 산책이 시작되고 GPS를 기반으로 지도에 실시간으로 이동한 위치가 표시됩니다. 

- 여러마리 반려견을 키우는 견주분들을 위해 산책 시 함께갈 반려견을 선택할 수 있는 기능도 제공됩니다.

---

## 주요 기술

**Backend - Spring**

-  Java 11

-  SpringBoot 2.7.2

-  DB : MySQL 8.0.29,

-  Redis 3.0.504

-  NodeJs : 16.16.0

-  기타 : Python 3.9.9

-  IDE : 인텔리제이 2022.01



**Frontend**

-  React : 16.13.1

-  React Native 0.69.2

-  JavaScript ES6↑

-  IDE : VScode 

  

**CI/CD**

- AWS EC2
- Jenkins
- NGINX



---

## 시스템 구성도

![image-20220819091149404](C:\Users\multicampus\AppData\Roaming\Typora\typora-user-images\image-20220819091149404.png)



---

### 프론트 컴포넌트 구조

```
📦src
 ┣ 📂Assets
 ┣ 📂components
 ┃ ┣ 📂Auth
 ┃ ┃ ┣ 📜Input.js
 ┃ ┃ ┣ 📜LoginForm.js
 ┃ ┃ ┣ 📜PhoneAuth.js
 ┃ ┃ ┣ 📜SignupForm.js
 ┃ ┃ ┗ 📜SignupForm2.js
 ┃ ┣ 📂Guide
 ┃ ┃ ┣ 📜CarouselCards.js
 ┃ ┃ ┣ 📜data.js
 ┃ ┃ ┣ 📜GuideCategoryCarousel.js
 ┃ ┃ ┣ 📜LikeButton.js
 ┃ ┃ ┗ 📜SubCard.js
 ┃ ┣ 📂Home
 ┃ ┃ ┣ 📜Guide.js
 ┃ ┃ ┣ 📜Place.js
 ┃ ┃ ┣ 📜Profile.js
 ┃ ┃ ┣ 📜Running.js
 ┃ ┃ ┗ 📜Todo.js
 ┃ ┣ 📂nav
 ┃ ┃ ┣ 📜CalendarNav.js
 ┃ ┃ ┣ 📜CustomNav.js
 ┃ ┃ ┣ 📜GuideNavbar.js
 ┃ ┃ ┣ 📜Navbar.js
 ┃ ┃ ┣ 📜PlaceNavbar.js
 ┃ ┃ ┗ 📜RunningNavbar.js
 ┃ ┣ 📂Place
 ┃ ┃ ┣ 📜CarouselItem.js
 ┃ ┃ ┣ 📜CarouselList.js
 ┃ ┃ ┣ 📜CategoryItem.js
 ┃ ┃ ┣ 📜DetailInfo.js
 ┃ ┃ ┣ 📜DogInfo.js
 ┃ ┃ ┣ 📜PlaceMap.js
 ┃ ┃ ┣ 📜Review.js
 ┃ ┃ ┗ 📜ReviewCarousel.js
 ┃ ┣ 📂Profile
 ┃ ┃ ┣ 📜ConnectMyInfo.js
 ┃ ┃ ┣ 📜DatePick.js
 ┃ ┃ ┣ 📜LikeGuide.js
 ┃ ┃ ┣ 📜MyPageLiked.js
 ┃ ┃ ┣ 📜NoGuide.js
 ┃ ┃ ┣ 📜ProfileHeader.js
 ┃ ┃ ┣ 📜ProfileImage.js
 ┃ ┃ ┣ 📜ProfileInput.js
 ┃ ┃ ┣ 📜ProfileItems.js
 ┃ ┃ ┣ 📜ProfileModal.js
 ┃ ┃ ┣ 📜SearchBreed.js
 ┃ ┃ ┣ 📜UploadModeModal.js
 ┃ ┃ ┗ 📜Weight.js
 ┃ ┣ 📂Running
 ┃ ┃ ┣ 📜data.js
 ┃ ┃ ┣ 📜RunningAlert.js
 ┃ ┃ ┣ 📜RunningData.js
 ┃ ┃ ┣ 📜RunningDataItem.js
 ┃ ┃ ┣ 📜RunningSelect.js
 ┃ ┃ ┗ 📜RunningTimer.js
 ┃ ┣ 📂Todo
 ┃ ┃ ┣ 📜Input.js
 ┃ ┃ ┣ 📜TodoForm.js
 ┃ ┃ ┗ 📜TodoList.js
 ┃ ┗ 📂ui
 ┃ ┃ ┣ 📜Button.js
 ┃ ┃ ┣ 📜GuideButton.js
 ┃ ┃ ┣ 📜ProgressBar.js
 ┃ ┃ ┣ 📜RunButton.js
 ┃ ┃ ┣ 📜RunButton2.js
 ┃ ┃ ┗ 📜RunButton3.js
 ┣ 📂constants
 ┃ ┗ 📜styles.js
 ┣ 📂navigation
 ┃ ┣ 📜AuthStack.js
 ┃ ┣ 📜BottomTabNavigator.js
 ┃ ┣ 📜GuideStack.js
 ┃ ┣ 📜HomeStack.js
 ┃ ┣ 📜MyPageStack.js
 ┃ ┣ 📜PlaceStack.js
 ┃ ┗ 📜RunningStack.js
 ┣ 📂screens
 ┃ ┣ 📂Auth
 ┃ ┃ ┣ 📜LoginScreen.js
 ┃ ┃ ┣ 📜SignupScreen.js
 ┃ ┃ ┣ 📜SignupScreen2.js
 ┃ ┃ ┗ 📜WelcomScreen.js
 ┃ ┣ 📂Calendar
 ┃ ┃ ┣ 📜CalendarHome.js
 ┃ ┃ ┗ 📜TodoUpload.js
 ┃ ┣ 📂Guide
 ┃ ┃ ┣ 📜GuideCategory.js
 ┃ ┃ ┣ 📜GuideDetail.js
 ┃ ┃ ┗ 📜GuideHome.js
 ┃ ┣ 📂Home
 ┃ ┃ ┗ 📜MainHome.js
 ┃ ┣ 📂Place
 ┃ ┃ ┣ 📜PlaceCategory.js
 ┃ ┃ ┣ 📜PlaceDetail.js
 ┃ ┃ ┗ 📜PlaceHome.js
 ┃ ┣ 📂Profile
 ┃ ┃ ┣ 📜MyInfoScreen.js
 ┃ ┃ ┣ 📜MyPage.js
 ┃ ┃ ┣ 📜ProfileChoiceScreen.js
 ┃ ┃ ┣ 📜ProfileEditScreen.js
 ┃ ┃ ┣ 📜ProfileHomeScreen.js
 ┃ ┃ ┗ 📜ProfileHomeScreen2.js
 ┃ ┣ 📂Running
 ┃ ┃ ┣ 📜RunningFinish.js
 ┃ ┃ ┣ 📜RunningGeolocation.js
 ┃ ┃ ┣ 📜RunningGeolocation2.js
 ┃ ┃ ┣ 📜RunningHome.js
 ┃ ┃ ┣ 📜RunningInfo.js
 ┃ ┃ ┗ 📜RunningProfile.js
 ┃ ┗ 📜Initial.js
 ┣ 📂store
 ┃ ┣ 📜auth.js
 ┃ ┣ 📜index.js
 ┃ ┣ 📜profile.js
 ┃ ┗ 📜running.js
 ┗ 📂utils
 ┃ ┣ 📜auth.js
 ┃ ┣ 📜guide.js
 ┃ ┣ 📜index.js
 ┃ ┣ 📜place.js
 ┃ ┣ 📜profile.js
 ┃ ┗ 📜running.js
```



### ERD

![image-20220819091207982](C:\Users\multicampus\AppData\Roaming\Typora\typora-user-images\image-20220819091207982.png)



----

## 협업 툴

- Git
- Notion
- JIRA
- MatterMost
- Webex



---



## 기타 자료

[API 명세](https://www.notion.so/API-afc6b28c4dcb4b578e6917125f4577aa)

[Swagger]([Swagger UI](http://i7d203.p.ssafy.io:8080/swagger-ui/#/))

[Jira]([SSAFY](https://jira.ssafy.com/projects/S07P12D203/summary))

[Notion ](https://www.notion.so/2-0d4019a2cdec49369f1b0fa7481b8360)
