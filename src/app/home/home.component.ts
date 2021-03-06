import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { DrinkService } from '../drinks.Service';
import { Person } from './person.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  public genders = ['Male', 'Female'];
  public model: Person = {name: "Joe", weight: 160, gender: 'male'}; //model used for form control
  
  public person: Person;
  public time: number=0;
  public seconds:number=0;
  public minutes:number=0;
  public hour:number=0
  public submitted: boolean = false;
  public name = new FormControl('', [Validators.required]);
  public weight = new FormControl('', [Validators.required]);
  public gender = new FormControl('', [Validators.required]);
  public contactForm: FormGroup = new FormGroup({
  });


  constructor(
    private drinkService: DrinkService,

  ) { 
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.submitted){
      if(this.time<1){
        this.startTimer(); //start the timer
      }
      this.submitted=true;
      this.drinkService.setPerson(this.name.value, this.weight.value, this.gender.value);
    }
  }

  interval;
  startTimer() { //interval for keeping time
    this.interval = setInterval(() => {
        this.drinkService.updateTime();
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
  }

}
