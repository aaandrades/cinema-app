import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { HelperDialogComponent } from './components/helper-dialog/helper-dialog.component';

import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/reducer/user.reducer';
import { moviesReducer } from './store/reducer/movies.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effects/user.effects';
import { ModalComponent } from './components/modal/modal.component';
import { LoaderEffects } from './store/effects/loader.effects';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { SearchComponent } from './components/pages/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MoviesEffects } from './store/effects/movies.effect';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CustomModalComponent } from './components/custom-modal/custom-modal.component';
import { ModalEffects } from './store/effects/modal.effects';
import { DetailsComponent } from './components/pages/details/details.component';

import { SwiperModule } from 'swiper/angular';
import { PremiersComponent } from './components/pages/premiers/premiers.component';
import { UsersComponent } from './components/pages/users/users.component';


export const userFeatureName = 'userState';
export const moviesFeatureName = 'moviesState';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    HelperDialogComponent,
    ModalComponent,
    DashboardComponent,
    SearchComponent,
    NavbarComponent,
    CustomModalComponent,
    DetailsComponent,
    PremiersComponent,
    UsersComponent,
  ],
  imports: [
    FormsModule,
    SwiperModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    StoreModule.forFeature(userFeatureName, userReducer),
    StoreModule.forFeature(moviesFeatureName, moviesReducer),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([LoaderEffects, UserEffects, MoviesEffects, ModalEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
