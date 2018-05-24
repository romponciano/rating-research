import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { MovieComponent } from '../movie/movie.component';
import { FormComponent } from '../form/form.component';
import { StarRatingComponent } from '../rating/star-rating/star-rating.component';
import { ThumbsRatingComponent } from '../rating/thumbs-rating/thumbs-rating.component';
import { RatingComponent } from '../rating/rating.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    FormComponent,
    HeaderComponent,
    FooterComponent,
    StarRatingComponent,
    ThumbsRatingComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
