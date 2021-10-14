import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { UserFacade } from 'src/app/store/facade/user.facade';
import { SnackbarProvider } from './snackbar-provider/snackbar-provider.service';

@Component({
  selector: 'snackbar-component',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent implements OnInit {
  showSnackbar = false;
  awayClass = false;
  title = '';

  constructor(
    private userFacade: UserFacade,
    private snackbarProvider: SnackbarProvider
  ) {}

  async ngOnInit(): Promise<void> {
    // There's no problem to subscribe and no de-subscribe. See profiler
    this.snackbarProvider.showSnackbar$.subscribe(async ({ show }) => {
      if (show) {
        this.title = (
          await this.userFacade.user$.pipe(take(1)).toPromise()
        ).name;
        this.showSnackbar = true;
        await this.timer(3000);
        this.awayClass = true;
        await this.timer(2000);
        this.showSnackbar = false;
      }
    });
  }

  timer(time: number) {
    return timer(time).pipe(take(1)).toPromise();
  }
}
