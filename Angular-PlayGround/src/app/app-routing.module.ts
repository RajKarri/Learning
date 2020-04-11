import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TypeScriptTestComponent } from './type-script-test/type-script-test.component';
import { RxJsTestComponent } from './rx-js-test/rx-js-test.component';

const routes: Routes = [
  {path: "type-script", component: TypeScriptTestComponent},
  {path: "rx-js", component:RxJsTestComponent},
  {path: " ", component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
