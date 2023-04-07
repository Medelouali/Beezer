import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { ArtistsComponent } from './artists/artists.component';
import { CommentComponent } from './comment/comment.component';
import { EditorialComponent } from './editorial/editorial.component';
import { GenreComponent } from './genre/genre.component';
import { SearchComponent } from './search/search.component';
import { InfoComponent } from './info/info.component';
import { RadioComponent } from './radio/radio.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { TrackComponent } from './track/track.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path: "Albums", component: AlbumComponent},
  {path: "Artists", component: ArtistsComponent},
  {path: "Comments", component: CommentComponent},
  {path: "Editorials", component: EditorialComponent},
  {path: "Genres", component: GenreComponent},
  {path: "Search", component: SearchComponent},
  {path: "Info", component: InfoComponent},
  {path: "Radio", component: RadioComponent},
  {path: "Playlists", component: PlaylistComponent},
  {path: "Tracks", component: TrackComponent},
  {path: "**", component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
