프로젝트: 가위바위보 게임 구현

1. 프로젝트 소개
이 프로젝트는 간단한 HTML, CSS, JavaScript를 활용하여 누구나 쉽게 즐길 수 있는 가위바위보 게임을 제작하였습니다.
사용자의 선택에 따라 컴퓨터와 대결하며, 결과(승리, 패배, 무승부)를 화면에 실시간으로 출력합니다.

2. 주요 기능

사용자와 컴퓨터의 선택 표시
사용자가 버튼을 클릭하면, 선택한 값이 화면에 표시됩니다.
컴퓨터는 랜덤으로 "가위", "바위", "보" 중 하나를 선택하며, 그 결과도 실시간으로 화면에 출력됩니다.
결과 판정 및 표시

사용자의 선택과 컴퓨터의 선택을 비교하여 승리, 패배, 무승부를 결정합니다.
결과 메시지가 화면에 출력됩니다.
직관적인 UI와 인터렉션

버튼 클릭만으로 게임을 진행할 수 있어 누구나 쉽게 사용할 수 있습니다.
게임 결과가 실시간으로 업데이트되며, 사용자 경험을 고려한 직관적인 UI를 구현했습니다.

3. 사용된 기술

HTML
게임의 구조와 기본 콘텐츠를 정의했습니다.
사용자와 컴퓨터의 선택, 그리고 결과를 표시할 영역을 구성했습니다.

CSS
게임의 시각적 요소를 디자인하여 깔끔하고 보기 좋은 화면을 구현했습니다.
버튼 스타일링과 결과 텍스트의 가시성을 강조했습니다.

JavaScript
게임의 핵심 로직을 구현했습니다.
이벤트 핸들러를 사용하여 버튼 클릭 시 작동하도록 설정했습니다.
컴퓨터의 랜덤 선택과 승패 판정 로직을 작성했습니다.


4. 코드 특징
유지보수성: show, game, play와 같은 함수로 로직을 분리하여 코드의 가독성과 재사용성을 높였습니다.
랜덤성 구현: Math.random()을 활용하여 컴퓨터의 선택을 무작위로 설정했습니다.
DOM 조작: querySelector와 innerText를 활용하여 실시간으로 화면을 업데이트했습니다.
![game](https://github.com/user-attachments/assets/6a84358d-1524-41b7-a67e-9b1074ba080b)