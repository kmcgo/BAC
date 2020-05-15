import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../drinks.Service';
import { Drink } from "./state/drink.model";
import { Store } from '@ngrx/store';
import { DrinkAppState } from './state/drink.state';
import { selectDrinksFor } from './state/selector';
import { Observable } from 'rxjs';
import { Person } from './state/person.model';


@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {
  
  public seconds=0;
  public minutes =0;
  public hour = 0;
  private time = 0;

  public drinksDrank = this.drinkService.getDrinks();
  public person = this.drinkService.getPerson();
  public drinkCount = this.drinkService.getCount();
  public BAC = 0;
  private constant: number;
  private alcGrams = 0;
  



  constructor(
    private drinkService: DrinkService,
  ) {
  }

  ngOnInit(): void {
    this.getTime();
  }

  interval;
  getTime() {
    this.interval = setInterval(() => {
      this.time = this.drinkService.getTime();
      this.seconds = this.time%60;
      if(this.time%60 == 0){
        this.minutes++;
        if(this.minutes %60==0){
          this.hour++;
          this.minutes=0;
        }
      }
    },1000)
    this.calculateBAC();
  }

  calculateBAC():number {
    var timeCalc:number
    this.drinksDrank.forEach(drink =>{
        var volume=0
        if(drink.percent<10){
            volume = 12;
        }else if(drink.percent>10 && drink.percent<22){
            volume = 5;
        }else if(drink.percent>23){
            volume = 2;
        }
        this.alcGrams += (drink.percent/100) * volume;
    })

    if(this.person.gender === 'Male'){
        this.constant = .68;
    }else if(this.person.gender === 'Female'){
        this.constant = .55;
    }

    if(this.hour<1){ 
        timeCalc= this.minutes/60;
    }else{
        timeCalc= (60*this.hour + this.minutes)/60;
    }

    this.BAC = ((this.alcGrams* 5.14)/(this.person.weight * this.constant)) - (timeCalc *.015);
    
    return this.BAC;
  }

}
