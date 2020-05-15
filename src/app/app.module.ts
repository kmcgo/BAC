import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { drinkreducer } from './drinks-list/state/drink.reducer';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DrinksComponent } from './drinks-list/drinks-list.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { FormsModule, } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({
      'component.drinkState': drinkreducer,
    }),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'drinks', component: DrinksComponent },
      { path: 'scoreboard', component: ScoreboardComponent },
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    DrinksComponent,
    ScoreboardComponent,
  ],
  bootstrap: [ AppComponent ],
  providers: [AppComponent]
})

export class AppModule { }
