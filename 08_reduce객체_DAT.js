const arr = ["피카츄", "라이츄", "파이리", "꼬부기", "피카츄", "파이리"];

const result = arr.reduce((acc, cur) => {
  if(acc[cur]){
    acc[cur] = acc[cur] + 1;
  }
  else{
    acc[cur] = 1;
  }
  return acc;
}, {});

console.log(result);