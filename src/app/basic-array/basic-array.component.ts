import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-array',
  templateUrl: './basic-array.component.html',
  styleUrls: ['./basic-array.component.scss']
})
export class BasicArrayComponent implements OnInit {

  constructor() { }
    size:number = 5;
    arr:number[] = new Array<number>(this.size);;
    arrayLength=0;
    logMessages:string[] = [];
    warningMsg:string;

  ngOnInit() {
  }

  deleteAt(deleteIndex){
    if(!deleteIndex.value && deleteIndex.value == ""){
      this.pushWarningMsg("Insert number for operation");
      return;
    }
    deleteIndex = parseInt(deleteIndex.value);
    if(this.arrayLength <= 0 || this.arrayLength <= deleteIndex){
       this.pushWarningMsg("Unable to delete");
      this.logMessages.push("deleteAt failed.");
    }else{
      let tempArr = [];
      for(let i=0;i<this.arr.length;i++){
        if(i<deleteIndex){
          tempArr[i] = this.arr[i];
        }else if(i=>deleteIndex){
          tempArr[i] = this.arr[i+1];
        }
      }
      this.arr = tempArr;
      this.arrayLength--;
      this.logMessages.push("Deleting number at index " + deleteIndex);
    }
  }

  insertAt(insertIndex,insertNum){
    if(!insertIndex.value && insertIndex.value == ""){
      this.pushWarningMsg("Insert index for operation");
      return;
    }
    if(!insertNum.value && insertNum.value == ""){
      this.pushWarningMsg("Insert number for operation");
      return;
    }
    insertIndex = parseInt(insertIndex.value);
    insertNum = parseInt(insertNum.value);
    if(this.arr.length <= insertIndex || this.arrayLength >= this.size){
       this.pushWarningMsg("Unable to insert");
      this.logMessages.push("insertAt failed.");
    }else{
      let tempArr = [];
      for(let i=0;i<this.arr.length;i++){
        if(i<insertIndex){
          tempArr[i] = this.arr[i];
        }else if(i == insertIndex){
          tempArr[i] = insertNum;
        }else if(i>insertIndex){
          tempArr[i] = this.arr[i-1];
        }
      }
      this.arr = tempArr;
      this.arrayLength++;
      this.logMessages.push("Inserting number "+ insertNum+ " at index " + insertIndex);
    }
  }

  sizeIncrease(){
    if(this.size*2 < 100){
      this.size *= 2;
      this.arr.length = this.size;
      this.logMessages.push("Size increased by 2X");
    }else{
      this.pushWarningMsg("Array size connot be more than 100");
      this.logMessages.push("Increase size failed.");
    }
  }

  sizeDecrease(){
    if(Math.floor(this.size / 2) >= 1){
      this.size = Math.floor(this.size / 2);
      this.arr.length = this.size;
      this.logMessages.push("Size decreased by 2X");
    }else{
      this.pushWarningMsg("Array size connot be less than 1");
      this.logMessages.push("Decrease size failed.");
    }
  }

  delete(){
    if(this.arrayLength > 0){
      this.arrayLength--;
      this.logMessages.push("Deleting number "+ this.arr[this.arrayLength] + " at index " + this.arrayLength);
      this.arr[this.arrayLength] = null;
    }else{
      this.logMessages.push("Delete Failed.");
      this.pushWarningMsg("Array is Empty");
    }
  }

  insert(num){
    if(!num.value && num.value == ""){
      this.pushWarningMsg("Insert number for operation");
      return;
    }
    if(isNaN(num.value)){
      this.pushWarningMsg("Choose a number to insert.");
      return;
    }
    if(this.arrayLength == this.size){
      this.pushWarningMsg("Array is Full");
      this.logMessages.push("Insert failed for "+ num.value );
    }else{
      this.logMessages.push("Inserting number "+ num.value+ " at index " + this.arrayLength);
      this.arr[this.arrayLength] = num.value;
      this.arrayLength++;
    }
  }

  pushWarningMsg(msg){
    this.warningMsg = msg;
    setTimeout(() => {
      this.warningMsg = null;
    }, 5000);
  }

  closeWarning(){
    this.warningMsg = null;
  }

}
