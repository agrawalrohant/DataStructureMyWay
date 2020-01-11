import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-stack',
  templateUrl: './basic-stack.component.html',
  styleUrls: ['./basic-stack.component.scss']
})
export class BasicStackComponent implements OnInit {

  constructor() { }

    arr:number[] = [0,0,0,0,0];
    size=0;
    logMessages:string[] = [];
    warningMsg:string;

  ngOnInit() {
  }

  delete(){
    if(this.size > 0){
      this.size--;
      this.logMessages.push("Deleting number "+ this.arr[this.size] + " at index " + this.size);
      this.arr[this.size] = 0;
    }else{
      this.pushWarningMsg("Array is Empty");
    }
  }

  insert(num){
    if(isNaN(num.value)){
      this.pushWarningMsg("Choose a number to insert.");
      return;
    }
    if(this.size == 5){
      this.pushWarningMsg("Array is Full");
    }else{
      this.logMessages.push("Inserting number "+ num.value+ " at index " + this.size);
      this.arr[this.size] = num.value;
      this.size++;
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
