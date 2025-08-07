import { node } from "./node.js";

 export class LinkedList{
    _head;

    constructor(){
        this._head = null;
    }

    isEmpty(){
    
        return this._head == null;

    }
    addFirst(value){

        this._head = new node(value);

    }
    append(value){
        
        if(this._head == null){
            this.addFirst(value);
        }
        else{
            let temp = this._head;
            while(temp.next != null){
                temp = temp.next;
            }
            temp.next = new node(value);
        }

    }

    prepend(value){
        if(this._head == null){
            this.addFirst(value);
        }
        else{
           
           let temp = this._head;
           this.addFirst(value);
           this._head.next = temp;
        }
    }

    size(){

        let temp = this._head;
        let size = 0;
        while(temp != null){
            temp = temp.next;
            size++;
        }
        return size;

    }

    head(){
        return this._head.value;
    }

    tail(){
        let temp = this._head;
        while(temp.next != null){
            temp = temp.next;
        }
        return temp;
    }


    toString(){
        let temp = this._head;
        let string = "";
        while(temp != null){

            string += "( " + temp.value + " )" + " -> ";
            temp = temp.next;

        }
        string += "null"
        return string;
    }

  
}