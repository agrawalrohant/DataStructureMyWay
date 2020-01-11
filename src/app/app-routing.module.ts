import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicArrayComponent } from './basic-array/basic-array.component';
import { BasicStackComponent } from './basic-stack/basic-stack.component';
import { BasicQueueComponent } from './basic-queue/basic-queue.component';
import { BasicTreeComponent } from './basic-tree/basic-tree.component';


const routes: Routes = [
  { path: 'Array', component: BasicArrayComponent },
  { path: 'Stack',      component: BasicStackComponent },
  { path: 'Queue', component: BasicQueueComponent },
  { path: 'Tree', component: BasicTreeComponent },
  { path: '', component: BasicArrayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
