import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { DisplayNotesComponent } from './components/display-notes/display-notes.component';
import { IconsComponent } from './components/icons/icons.component';
import { UpdateNoteComponent } from './components/update-note/update-note.component';
import { TrashNoteComponent } from './components/trash-note/trash-note.component';
import { ArchiveNoteComponent } from './components/archive-note/archive-note.component';
import { AuthguardService } from './services/auth-guard/authguard.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchPipe } from './Pipe/search.pipe';
import { CollaboratorComponent } from './components/collaborator/collaborator.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    DashbordComponent,
    CreateNoteComponent,
    GetAllNotesComponent,
    DisplayNotesComponent,
    IconsComponent,
    UpdateNoteComponent,
    TrashNoteComponent,
    ArchiveNoteComponent,
    SearchPipe,
    CollaboratorComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    MatMenuModule,
    MatTooltipModule,
    MatDialogModule,
    FlexLayoutModule
  ],
  providers: [AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
