import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCompoComponent } from "./my-compo/my-compo.component";

const routes: Routes = [{
  path: '',
  component: MyCompoComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
