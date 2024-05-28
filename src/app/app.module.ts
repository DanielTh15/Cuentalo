import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgComponent } from './components/img/img.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { StoryComponent } from './components/story/story.component';
import { StoriesComponent } from './components/stories/stories.component';
import { ShorStoryPipe } from './pipes/shor-story.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    NavbarComponent,
    LoginComponent,
    FooterComponent,
    StoryComponent,
    StoriesComponent,
    ShorStoryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
