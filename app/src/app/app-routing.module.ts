import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './core/component/chat/chat.component';
import { LoginComponent } from './core/component/login/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'chat', component: ChatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
