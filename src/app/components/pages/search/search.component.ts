import { Component, OnInit } from '@angular/core';
import { MoviesFacade } from 'src/app/store/facade/movies.facade';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  
  constructor(private moviesFacade: MoviesFacade) { }

  ngOnInit(): void { }
  
  searchMovies() {
    this.moviesFacade.getMovieByExpression('la ciudad');
  }
}
