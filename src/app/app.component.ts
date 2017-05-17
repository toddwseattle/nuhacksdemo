import { Component } from '@angular/core';
import { Artist } from './artist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  artist = '';
  artists: Artist[]= [ ];
  title = 'Favorite Muscians';
  addArtist(toadd: string) {
    this.artists.push(new Artist(toadd));
    this.artist = '';
  }
}
