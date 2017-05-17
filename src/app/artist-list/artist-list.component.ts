import { Component, OnInit, Input } from '@angular/core';
import { Artist } from '../artist';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {
@Input() artistlist: Artist[];
  constructor() { }

  ngOnInit() {
  }
  toggleFavorite(favartist: Artist) {
    favartist.favorite = !favartist.favorite;
  }
}
