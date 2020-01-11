import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicArrayComponent } from './basic-array/basic-array.component';
import { BasicStackComponent } from './basic-stack/basic-stack.component';
import { BasicTreeComponent } from './basic-tree/basic-tree.component';
import { BasicQueueComponent } from './basic-queue/basic-queue.component';
import{ LoggingWidgetModule } from './logging-widget/logging-widget.module';


@NgModule({
  declarations: [
    AppComponent,
    BasicArrayComponent,
    BasicStackComponent,
    BasicTreeComponent,
    BasicQueueComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoggingWidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
