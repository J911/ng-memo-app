import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MemoComponent } from './memo/memo.component';

import { MemoService } from './memo.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
