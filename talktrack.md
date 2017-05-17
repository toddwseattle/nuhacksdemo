# basics
1. show index.html
2. show main.ts
3. show app.module.ts
4. show app.component [ts file, html file, css]
# basic data binding
5. show changing the app title
6. create artist input (no special angular stuff)
7. add two way binding to artist:
  - in ts file add artist variable
  - `[(ngModel)]="artist"`
  - add `<p>{{artist}}</p>`
8. create an array of artists
   - add in the ts file `artist: string[]=[];`
9. create a function to add it to artists
````
  addArtists(toadd:string) {
      this.artists.push(toadd);
      this.artist='';
  }
````
10. in the html, add `<button>Add</button>`  show that it's not wired up.   Add a click event `(click)="addArtists(artist)"`
11. introduce pipes and the json pipe.  insert `<p>{{artists | json}}</p>`
# structural directives: ngFor
12. show <ul><li>{{artists[0]}}</li><li>{{artists[1]}}</li></ul>
13. do an ngfor
````
<ul>
  <li *ngFor="let a of artists">{{a}}</li>
</ul>
````
# common cli assets:  add bootstrap
14.  `npm install bootstrap --save`
15.  go to `.angular-cli.json`
16.  add to the assets array `"../node_modules/bootstrap/dist/css/bootstrap.min.css"`
17. *IMPORTANT* restart ng serve.  takes a few seconds.
18. add some simple bootstrap styling
- add `class="form-group"` to the div
- add `class="form-control"` to the input
- add 'class="btn" to the button
19. add a button for favorites (not wired up).
- go to the <li> element.  add a button with a star glyph
`<button class="btn btn-xs"><span class="glyphicon glyphicon-star" aria-hidden="true"></span></button>`
# creating our first component
OK, so it's getting complicated.  we are going to need to make artist into a real class, it's going to need a name and a flag for whether it's a favorite.  Also it looks awkward as bullets, it would be better in a nice table.  let's create an artist list component.
20.  Create an artistlist component
- stop ng serve
- show dry run
`ng g component artistList --dry-run`
`ng g component artistList`
30. reference components
- show changed files, esp. the module file
- insert `<app-artist-list></app-artist-list>` in app.component.html
31. write component
- now go to app.component.html and cut the <ul> list
- paste into artistList
- add artistlist property to artistList.ts 
- change ngFor to artistlist
- run and show it doesn't have data...need to pass to component
32. @input property
- so need to add an input
- add `@input()` tag.  import `{Input}` to artist-list.component.ts
- add [artistlist]="artists" to app.component.html
# creating an artist class and wiring up favorites
- create a class with `ng g class Artist`
- create the basic class
````
  export class Artist {
    public favorite = false;
    constructor(public name: string) { }
}
````
## complete refactor
explain that typescript has more java style classes. Using constructor, public properties as parameters for declaration.  export so other htings can import
- put in the artist class in the components via import
- change input type
- change addArtist to do a new Artist(toadd)
- save a reload to show it still works
## add favorite setting
- add method toggleFavorite
````
    toggleFavorite(favartist: Artist) {
    favartist.favorite = !favartist.favorite;
  }
````
- change button in this way:

````
    <button (click)="toggleFavorite(a)" class="btn btn-xs">
        <span *ngIf="a.favorite" class="glyphicon glyphicon-star" aria-hidden="true"></span>
        <span *ngIf="!a.favorite" class="glyphicon glyphicon-star-empty" aria-hidden="true"></span>
    </button>{{a.name}}
````
# style list
ok.  so how do we get rid of these bullets? lets add some boostrap goodness
emmet for table: `div>table.table-striped.table-bordered>(tr>th{Fav}+th{Artist})+(tr>td+td{{{a.name}}})` or full artist-list.component.html:
````
div class="container">
  <table class="table-striped table-bordered artist-fav">
    <tr>
      <th class="col-md-1 col-sm-1">Fav</th>
      <th class="col-md-6 col-sm-4" >Artist</th>
    </tr>
    <tr *ngFor="let a of artistlist; let i=index">
      <td>
        <button (click)="toggleFavorite(a)" class="btn btn-xs artist-fav">
          <span *ngIf="a.favorite" class="glyphicon glyphicon-star" aria-hidden="true"></span>
          <span *ngIf="!a.favorite" class="glyphicon glyphicon-star-empty" aria-hidden="true"></span>
        </button>
      </td>
      <td >{{a.name}}</td>
    </tr>
  </table>
</div>
````
csss for artist fav:
````
.artist-fav {
    background-color: #4E2A84;
    color: #d8d6d6;
}



