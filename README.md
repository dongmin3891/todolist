## TodoList web

* 할 일 목록 사이트로 사용자의 이름, 할 일을 저장하고 실시간으로 시간,날짜를 보여주며 API를 통해 현재 지역과 온도를 보여준다.

### 목록
*  사용 방법
*  기능
*  링크

#### 1. 사용 방법 - 사용자 재설정

* 이름과 할일을 작성한다.
 ![todolist1](https://user-images.githubusercontent.com/65215746/82330558-f6965d80-9a1d-11ea-9bba-7baf7cccf233.PNG)


* 위 그림에 보이는 파란색 버튼을 눌러 Appliacation 클릭
 ![todolist2](https://user-images.githubusercontent.com/65215746/82334933-9c000000-9a23-11ea-8dcc-ae9695105211.PNG)




* Local Srorage에 들어가 currentUser 를 지운다.
 ![todolist3](https://user-images.githubusercontent.com/65215746/82330575-fac27b00-9a1d-11ea-9854-69484ec8e53d.PNG)

#### 2. 기능

* TodoList
  * 할 일 목록은 창을 나갔다와도 데이터를 유지한다 그 이유는 Local Storage에 객체배열 형태로 저장하고 있기 때문이다.
![todolist4](https://user-images.githubusercontent.com/65215746/82330579-fbf3a800-9a1d-11ea-8dce-7fc94740030e.PNG)

* BackGround
  * TodoList의 background는 총 5개의 배경을 가지고 있으며 사용자가 새로고침 할 시 랜덤함수를 통해 배경화면이 변경된다.

* Clock
  * New Date() 객체를 선언하고 객체 내부에 있는 함수를 통해 년, 월, 일, 요일, 시간 등을 구현하였다.
특히 요일같은 경우는 일 = 0, 월 = 1 함수내에서 숫자로 나타냈기 때문에 영어나 한글로 나타내고 싶다면 따로 코드를 구현해 사용해야한다.

* Weather
  * API openweathermap을 통해 현재 지역과 온도를 나타내준다. 사용자가 처음 사이트에 접속하면 현재
  위치에 접근할 수 있는지의 여부를 묻는 경고창을 띄운다. 

### 링크
* https://dongmin3891.github.io/todolist/
