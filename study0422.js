//복습!
/*
1. 변수와 자료형=> 10이라는 값을 가진 변수 num 
2.조건문=> num이 짝수면 짝수 / 홀수면 홀수 / 0 이면 0으로 출력
3. 반복문=> num의 구구단을 출력 (num=2 이면 2단 전체 출력, 형식은 마음대로)
4. 함수 (2,3 모두 함수로 만들어서 써보기)
5. 배열 => 1~5까지 정수가 담긴 배열을 선언, 배열의 모든 수를 합해서 출력하는 함수(for문,합을 저장하는 변수 sumNum)
6. 객체 => name, age, talk(함수) 속성을 가진 객체를 선언
*/
let num = 10;
const isOddEven = (num) => {
  if (num % 2 == 0) {
    console.log("짝수");
  } else if (num % 2 == 1) {
    console.log("홀수");
  } else {
    console.log("0");
  }
};
isOddEven(num);

for (let i = 1; i < 10; i++) {
  console.log(`${num}x${i}=${num * i}`);
}

console.log("---");

const multi = () => {
  let res = 0;
  for (let i = 1; i < 11; i++) {
    res += i;
  }
  return res;
};
console.log(multi());

const dict = {
  name: "jieun",
  age: 26,
  talk() {
    console.log("talk talk");
  },
};
dict.talk();

//오늘 배울 내용-react위주로 기초=> 리액트 기초 세팅 다시 해보기

/*
1) input관련 
1. form, input, button 하나 만들어보기
2. input의 값을 state로 관리
3. input으로 num을 받아서 짝수인지 홀수인지 출력해보기(조건문 활용)

2) 컴포넌트 분리 & props
1. 짝수 홀수 판별 내용을 별도로 분리
2. App에서 input을 받고 props로 넘겨주기
*/
