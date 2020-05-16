import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Drink } from "./drinks-list/state/drink.model";
import { map } from 'rxjs/operators';
import { Person } from './home/person.model';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {
  public drinkCount: number = 0;
  public time: number=0;

  public person: Person;
  public bevsDrunk: Drink[] = [];

  constructor(
    private http: HttpClient,
  ) { 

  }


  //below are getters and setters --> TODO: they could all be replaced with actions and events, 
                                              //but this program is so small it would only complicate very simple tasks

  updateTime():void{
    this.time++; //update global time
  }
  getTime():number{
    return this.time; //getter for time var
  }
  getCount():number{
    return this.drinkCount; //getter for number of drinks consumed
  }
  getDrinks():Drink[]{ //getter for drinks consumed
    return this.bevsDrunk;
  }
  addDrink(drink:Drink):void{ //setter for drinks consumed
    this.bevsDrunk.push(drink);
    this.drinkCount++;
  }
  soberUp():void{ //clears drinks consumed
    this.bevsDrunk = [];
    this.drinkCount = 0;
  }

  setPerson(nName:string, nWeight:number, nGender){ //initializes a person
    this.person = {name: nName, weight: nWeight, gender: nGender};
  }
  getPerson(){
    return this.person
  }

  getDrinkMenu() : Observable<Drink[]>{ //used for initializing the state
    return this.http.get("./assets/drinks.json").pipe(
      map(x => x as Drink[])
    );
  }
}
