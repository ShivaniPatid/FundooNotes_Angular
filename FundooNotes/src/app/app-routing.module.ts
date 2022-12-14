import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveNoteComponent } from './components/archive-note/archive-note.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { TrashNoteComponent } from './components/trash-note/trash-note.component';
import{AuthenticationGuard} from './Guard/authentication.guard';

const routes: Routes = [
  { path:'register', component: RegistrationComponent},
  { path:'login', component: LoginComponent},
  { path:'forget', component: ForgetPasswordComponent},
  { path:'reset', component: ResetPasswordComponent},
  { path:'' , redirectTo:"/login", pathMatch:'full'},
  { path:'dashbord', component: DashbordComponent,canActivate:[AuthenticationGuard],
  children:[
    {path:'notes', component: GetAllNotesComponent},
    {path:'trash', component: TrashNoteComponent},
    {path:'archive', component: ArchiveNoteComponent}
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
