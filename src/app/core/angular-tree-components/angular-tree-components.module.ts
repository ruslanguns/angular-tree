import { NgModule } from '@angular/core';
import { TreeModule } from 'angular-tree-component';



@NgModule({
  imports: [TreeModule.forRoot()],
  exports: [TreeModule]
})
export class AngularTreeComponentsModule {}
