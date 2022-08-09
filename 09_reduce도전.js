const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13];

const result = arr.reduce((acc,cur) => {
  if(cur % 2 == 0){
    acc['짝수']++;
  }
  else{
    acc['홀수']++;
  }
  return acc;
}, {'홀수': 0, '짝수': 0});

console.log(result);
