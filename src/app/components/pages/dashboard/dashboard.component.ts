import { Component, OnInit } from '@angular/core';
import { MoviesFacade } from 'src/app/store/facade/movies.facade';
import { moviesMock } from 'src/app/mocks/movies.mock';
import { MovieInterface } from '../../../store/model/movies.state';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  movies: MovieInterface[] = [];
  currentMovies: MovieInterface[] = [];
  moviesCounter = 0;
  currentSearch = '';

  constructor(private moviesFacade: MoviesFacade) {}

  async ngOnInit() {
    const moviesInfo = await this.moviesFacade.movies$
      .pipe(take(1))
      .toPromise();
    this.movies = moviesInfo;
    this.currentMovies = this.getIntervalMovies(this.movies, -1, 20);
    // this.currentMovies = this.getIntervalMovies(moviesMock, -1, 20);
  }

  filterMovies() {
    this.currentMovies = this.movies.filter((movie) =>
      movie.title.toLocaleLowerCase().trim().includes(this.currentSearch)
    );
  }

  getIntervalMovies(movies: MovieInterface[], from: Number, to: Number) {
    return movies.filter((_, index: Number) => from < index && index < to);
  }

  onScroll() {
    const moviesLength = this.movies.length;
    if (moviesLength !== this.moviesCounter) {
      this.moviesCounter = this.moviesCounter + 20;
      this.currentMovies = [
        ...this.currentMovies,
        ...this.getIntervalMovies(
          this.movies,
          this.moviesCounter,
          this.moviesCounter + 20
        ),
      ];
    }
  }

  goToDetail(id: string) {
    this.moviesFacade.getMovieById(id);
  }

  defaultValues() {
    this.currentMovies = this.movies;
    this.currentSearch = '';
  }
}
