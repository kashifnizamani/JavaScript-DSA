export const hashmap =  (capacity, loadFactor) =>{

    let arr = new Array(capacity);

  
    const hash = (key)=> {
   let hashCode = 0;
      
   const primeNumber = 31;
   for (let i = 0; i < key.length; i++) {
     hashCode = primeNumber * hashCode + key.charCodeAt(i);
     
   }

   return hashCode;
 }

 function set(key, value){
          let index = hash(key)%capacity;
          if(arr[index] == null || arr[index].key == key){
          arr[index] = {key: key, value: value}
          }
       
        

  }

  function get(key){
    let index = hash(key)%capacity;
    if(arr[index] == null){
        return null;
    }
    return arr[index].value;
  }

return {
    arr, set, get
}

}
