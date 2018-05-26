import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { MovieComponent } from '../movie/movie.component';
import { FormComponent } from '../form/form.component';
import { RatingComponent } from '../rating/rating.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirebaseConfig } from '../properties/firebase.config';
import { AngularFireModule } from 'angularfire2/index';
import { TermsComponent} from '../terms/terms.component';
import { RouterModule, Routes } from '@angular/router';
import { ThanksComponent } from '../thanks/thanks.component';
import { ContactComponent } from '../contact/contact.component';

import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AngularFireDatabase } from 'angularfire2/database';

const appRoutes: Routes = [
  { path: '', component: FormComponent },
  { path: 'home', component: FormComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'thanks', component: ThanksComponent }
];

let teste: string;

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    FormComponent,
    RatingComponent,
    TermsComponent,
    ThanksComponent,
    ContactComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    RouterModule,
    AngularFireModule.initializeApp(FirebaseConfig)
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
