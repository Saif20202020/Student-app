import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';

import { AngularFireModule } from '@angular/fire';

import { environment } from '../environments/environment';
import { StudentService } from './shared/services/student.service';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { ListStudentsComponent } from './list-students/list-students.component';

// const routes: Routes = [
// { path: 'add-student', component: AddStudentComponent },
// { path: 'all-student', component: ListStudentsComponent }
// ];
 
@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    ListStudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),

    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [StudentService, AngularFirestore],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
