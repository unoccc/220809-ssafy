const nums = [1,2,3,4,5,6,7,8,9,10];

// const result = nums.reduce((acc, cur) => acc + cur);
// console.log(result);

//초기값이 있을 때
const newNums = nums.reduce((acc, cur) => {
  console.log(acc);
  console.log(cur);
  acc.push(cur+1);
  return acc;
}, []);

console.log(newNums);