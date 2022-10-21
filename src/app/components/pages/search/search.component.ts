import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesFacade } from 'src/app/store/facade/movies.facade';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  currentSearch = '';
  showingResults = false;
  startFetching: boolean = false;

  moviesResults$: Observable<Array<any>> = this.moviesFacade.searchMovies$;

  constructor(private moviesFacade: MoviesFacade) {}

  ngOnInit(): void {}

  async searchMovies() {
    this.showingResults = true;
    this.startFetching = true;
    this.moviesFacade.getMovieByExpression(this.currentSearch);
  }

  clearFilters() {
    this.startFetching = false;
    this.showingResults = false;
    this.currentSearch = '';
    this.moviesFacade.clearSearchMovie();
  }

  goToDetails(id: string) {
    this.moviesFacade.getMovieById(id);
  }
}
