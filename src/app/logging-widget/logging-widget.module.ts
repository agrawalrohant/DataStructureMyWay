import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleLogsComponent } from './simple-logs/simple-logs.component';


@NgModule({
  declarations: [
    SimpleLogsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SimpleLogsComponent
  ]
})
export class LoggingWidgetModule { }
