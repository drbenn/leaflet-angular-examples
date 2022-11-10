import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { HeatComponent } from './heat/heat.component';

const routes: Routes = [
  {path: 'basic', component: BasicComponent},
  {path: 'heat', component: HeatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
