import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ArtistsComponent } from './artists/artists.component';
import { InfoComponent } from './info/info.component';
import { RadioComponent } from './radio/radio.component';
import { GenreComponent } from './genre/genre.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { EditorialComponent } from './editorial/editorial.component';
import { TrackComponent } from './track/track.component';
import { CommentComponent } from './comment/comment.component';
import { AlbumComponent } from './album/album.component';
import { ErrorComponent } from './error/error.component';
import { CardComponent } from './search/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ArtistsComponent,
    InfoComponent,
    RadioComponent,
    GenreComponent,
    PlaylistComponent,
    EditorialComponent,
    TrackComponent,
    CommentComponent,
    AlbumComponent,
    ErrorComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
