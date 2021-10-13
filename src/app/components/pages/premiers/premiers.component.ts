import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { MoviesFacade } from 'src/app/store/facade/movies.facade';

@Component({
  selector: 'app-premiers',
  templateUrl: './premiers.component.html',
  styleUrls: ['./premiers.component.scss'],
})
export class PremiersComponent implements OnInit {
  premiers$!: Observable<any>;
  comingSoon$!: Observable<any>;

  constructor(private moviesFacade: MoviesFacade) {}

  async ngOnInit(): Promise<void> {
    const alreadyLoaded = await this.moviesFacade.comingSoon$
      .pipe(take(1))
      .toPromise();

    if (!alreadyLoaded) {
      this.moviesFacade.getPremiersMovies();
    }
    
    this.comingSoon$ = this.moviesFacade.comingSoon$;
    this.premiers$ = this.moviesFacade.premierMovies$;
  }
}
