# 🎱 로또 게임

## 🚀 기능 요구사항

- 로또 게임 기능을 구현해야 한다.
- 로또 구입 금액을 입력하면 구입 금액에 해당하는 로또를 발급해야 한다.
- 로또 1장의 가격은 1000원이다.
- 로또 당첨 금액은 고정되어 있는 것으로 가정한다.
- 수익률을 계산해 출력해야 한다.

## ✔️ 구현할 기능 목록

- 입력받은 구입 금액이 올바른 값인지 확인한다.
  - 1000원 단위인지 확인
  - 올바른 값이 아니면 alert로 경고 메시지를 띄운다.
- 구매한 개수만큼 로또를 생성해서 출력한다.
  - 로또 번호는 1 ~ 45 사이의 랜덤한 숫자로 이루어져있다.
  - 로또 번호는 총 6개이다.
- 지난 주 당첨 번호를 입력받는다.
- 입력받은 지난 주 당첨 번호가 올바른 값인지 확인한다.
  - 쉼표로 구분되어 있는지 확인
  - 1 ~ 45 사이의 숫자인지 확인
  - 총 6개인지 확인
  - 올바른 값이 아니면 alert로 경고 메시지를 띄운다.
- 보너스 볼을 입력받는다.
  - 지난 주 당첨 번호와 겹치지 않는지 확인
  - 1 ~ 45 사이의 숫자인지 확인
  - 올바른 값이 아니면 alert로 경고 메시지를 띄운다.
- 당첨 통계를 출력한다.
  - 일치하는 당첨 번호 수에 따라 당첨 금액을 더한다.
  - 총 수익률을 계산한다.

## ✅ 프로그래밍 요구사항

- 사용자가 잘못된 입력 값을 작성한 경우 `alert`을 이용해 메시지를 보여주고, 재입력할 수 있게 한다.
- 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않고, 순수 Vanilla JS로만 구현한다.
- **자바스크립트 코드 컨벤션을 지키면서 프로그래밍** 한다
  - [https://google.github.io/styleguide/jsguide.html](https://google.github.io/styleguide/jsguide.html)
  - [https://ui.toast.com/fe-guide/ko_CODING-CONVENSION/](https://ui.toast.com/fe-guide/ko_CODING-CONVENTION)
- **indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용**한다.
  - 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
  - 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메소드)를 분리하면 된다.
- **함수(또는 메소드)의 길이가 15라인을 넘어가지 않도록 구현한다.**
  - 함수(또는 메소드)가 한 가지 일만 잘 하도록 구현한다.
- 변수 선언시 `var` 를 사용하지 않는다. `const` 와 `let` 을 사용한다.
  - [const](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/const)
  - [let](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/let)
- `import` 문을 이용해 스크립트를 모듈화하고 불러올 수 있게 만든다.
  - [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import)
- `template literal`을 이용해 데이터와 html string을 가독성 좋게 표현한다.
  - [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals)
