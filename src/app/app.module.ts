import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TagComponent } from './tag/tag.component';
import { ReelComponent } from './reel/reel.component';
import { ImageComponent } from './image/image.component';
import { PictureService } from './picture.service';


@NgModule({
  declarations: [
    AppComponent,
    TagComponent,
    ReelComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PictureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
