1. extension

- Auto Rename Tag: 태그 쌍으로 변경
- Bracket Pair Colorizer : 태그 영역 가독성 높이기
- Prettier : code formatter , 설정도 가능
  1. VS Code Settings : JavaScript Format
  2. VS Code Settings : Format On Save (선택) -> 저장하면 자동으로 변경
  3. Edit in setting.json =>editor.formatOnSave: true
- Auto import : 자동 import

2. 리액트 복습

- 출생연도를 받아서 성인인지 미성년자인지 알려주는 페이지 생성
- component
  1. App
  2. Form (form,input,button)
- 연도를 입력하고 (number) 확인버튼을 누르면 화면에 '미성년자' or '성인'(state)을 보여줌

3. 오늘 진도

- 위에 만든 코드에 스타일드 컴포넌트 추가해보기
- component란? 왜 쓰는지? 지키야할 규칙
  1. 컴포넌트란 앱을 이루는 최소한의 단위
  2. 항상 대문자로 시작(html element와 구분하기 위해)
  3. 재사용성을 높이기 위해 여러 조각으로 나누어 구현 => 한 컴포넌트는 하나의 기능만 하도록
  4. state가 변해야 제렌더링 -> 단순히 변수를 선언하고 바꾸면 화면 업데이트가 안됨
- (시간이 된다면) 한 화면에 연도에 따라 결과를 출력하는 부분과 현재 만나이를 보여주는 결과를 출력 => 위에 만들어둔 Form컴포넌트를 2번 사용
