import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Location } from '@angular/common';
import { MoviesFacade } from 'src/app/store/facade/movies.facade';

import SwiperCore, { Pagination } from 'swiper';
import { Router } from '@angular/router';
import { ModalService } from '../../modal/ModalProvider/modal.service';
import { timer } from 'rxjs';

SwiperCore.use([Pagination]);
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DetailsComponent implements OnInit {
  currentMovie: any = {};
  showLoader = true;

  constructor(
    private moviesFacade: MoviesFacade,
    private router: Router,
    private location: Location,
    private loader: ModalService
  ) {}

  async ngOnInit(): Promise<void> {
    this.loader.showLoader();
    const movies = await this.moviesFacade.currentMovie$
      .pipe(take(1))
      .toPromise();
    this.currentMovie = movies;
    if (movies) {
      this.currentMovie = movies;
      const loadingImg = timer(2000);
      loadingImg.subscribe(() => {
        this.loader.hideLoader();
      });
    } else {
      this.loader.hideLoader();
      this.router.navigate(['/dashboard']);
    }
  }

  goBack() {
    this.location.back();
  }
}
