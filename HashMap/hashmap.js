const Node = (key, value) => {
  return {
    key,
    value,
    next: null,
  };
};

export const hashmap = (capacity, loadFactor) => {
  let arr = new Array(capacity);

  const hash = (key) => {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  };

  const set = (key, value) => {
    let index = hash(key) % capacity;

    if (!arr[index]) {
      arr[index] = Node(key, value);
      return;
    }

    let current = arr[index];
    while (true) {
      if (current.key === key) {
        current.value = value;
        return;
      }
      if (!current.next) break;
      current = current.next;
    }
    current.next = Node(key, value);
  };

  const get = (key) => {
    let index = hash(key) % capacity;
    let current = arr[index];
    while (current) {
      if (current.key === key) {
        return current.value;
      }
      current = current.next;
    }
    return null;
  };

  const has = (key) => {
    let index = hash(key) % capacity;

    let current = arr[index];
    while (current) {
      if (current.key === key) {
        return true;
      }
      current = current.next;
    }
    return false;
  };

  const remove = (key) => {
    let index = hash(key) % capacity;

    let current = arr[index];

    if (!current) {
      return false;
    }
    if (!current.next && current.key === key) {
      arr[index] = null;
      return true;
    }
    let prev = null;
    while (current) {
      if (current.key === key) {
        if (prev) {
          prev.next = current.next;
        } else {
          arr[index] = current.next;
        }
        return true;
      }
      prev = current;
      current = current.next;
    }

    return false;
  };

  const length = () =>{
     let length = 0;
    for(let i = 0; i < capacity; i++){
        if(!arr[i]){
            continue;
        }
        let current = arr[i];
        while(current){
            current = current.next;
            length++;
        }
    }
    return length;
}

const clear = () =>{

      for(let i = 0; i < capacity; i++){
        if(!arr[i]){
            continue;
        }
        arr[i] = null;
    }

}

const keys = () =>{

    let keys = [];
    for(let i = 0; i < capacity; i++){
        if(!arr[i]){
            continue;
        }
        let current = arr[i];
        while(current){
            keys.push(current.key)
            current = current.next;
            
        }
    }
    return keys;

}

const values = () =>{

    let values = [];
    for(let i = 0; i < capacity; i++){
        if(!arr[i]){
            continue;
        }
        let current = arr[i];
        while(current){
            values.push(current.value)
            current = current.next;
            
        }
    }
    return values;

}

const entries = () =>{

     let entries = [];
    for(let i = 0; i < capacity; i++){
        if(!arr[i]){
            continue;
        }
        let current = arr[i];
        while(current){
            entries.push([current.key, current.value])
            current = current.next;
            
        }
    }
    return entries;



}


  return {
    arr,
    set,
    get,
    has,
    remove,
    length,
    clear,
    keys,
    values,
    entries,
  };
};
