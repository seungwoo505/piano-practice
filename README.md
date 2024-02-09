# 피아노 연습과 네트워크를 통해 소리 전송

## 개요
3인 개발입니다.

개인 기여도 : 90%

## UI
![Piano](https://github.com/seungwoo505/piano-practice/blob/main/mainScreen.png)

## 특징
키보드, 마우스 또는 터치로 입력할 경우 아두이노에서 어떤 음인지 디스플레이를 통해 표시가 되고 소리가 납니다.

그리고 3개 정도의 입력된 곡을 듣고 따라 칠 수 있는 기능도 존재합니다.

## 문제점
원래는 아두이노와 연동이 되어 아두이노에 탑재되어있는 스피커를 통해 스피커에서 소리가 나오게 설계가 되었으나
학교에서 지급된 와이파이 성능이 좋지못해 딜레이가 100ms 이상 차이가 발생되어 기대했던 수치 이하로 나오게되어 소리가 아두이노에서 정상적으로 출력이 되지않아 사운드는 웹 동작에서 처리하도록 변경되었습니다.

그래서 아두이노에서는 현재 어떤 음인지 또는 예시용 노래가 어떤 노래인지 확인할 수 있는 디스플레이만 동작하는 상태입니다.

본 계획은 5G 시대에 맞춰 10ms 이하 레이턴시 정도의 오차범위를 두고 개발이 되었으나 10배 이상의 성능 저하가 발생되어 하드웨어면에서 실패했다고 볼 수 있습니다.
