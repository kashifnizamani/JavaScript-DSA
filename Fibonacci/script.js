function fibs(n) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    if (i < 2) {
      arr.push(i);
    } else {
     let num = arr[i - 2] + arr[i - 1];
      arr.push(num);
    }
  }
  return arr;
}

function fibsRec(n){

    if(n == 1){
        return [0];

    }
    else if(n == 2){
      return [0,1]
    }

    else{
      const arr = fibsRec(n - 1);
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return arr;
        

    }
       
   

}


   console.log(fibsRec(10));

 // console.log( "printed iterativelty: " + fibs(10));
