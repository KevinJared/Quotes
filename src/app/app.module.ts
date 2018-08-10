import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteUpvoteComponent } from './quote-upvote/quote-upvote.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteFormComponent,
    QuoteUpvoteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
