import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../drinks.Service';


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
  //TODO: make the timer an effect

  getTime() { //interval for updating the stopwatch 
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

  calculateBAC():number { //function for doing the calucation
    var timeCalc:number
    this.drinksDrank.forEach(drink =>{ //for each drink had, count the amount of alcohol consumed
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

    if(this.person.gender === 'Male'){ //set the gender constant
        this.constant = .68;
    }else if(this.person.gender === 'Female'){
        this.constant = .55;
    }

      timeCalc= (60*this.hour + this.minutes)/60; //get time as a fraction of an hour


    this.BAC = ((this.alcGrams* 5.14)/(this.person.weight * this.constant)) - (timeCalc *.015); //fill formula
    
    return this.BAC;
  }

}
