const nums = [4,3,5,1,6,5];

let cnt = 0;

nums.forEach((val) => {if(val%2==1) cnt++;});

console.log(cnt);