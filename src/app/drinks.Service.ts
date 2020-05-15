import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Drink } from "./drinks-list/state/drink.model";
import { Store, StoreModule } from '@ngrx/store';
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

  updateTime():void{
    this.time++;
  }
  getTime():number{
    return this.time;
  }
  getCount():number{
    return this.drinkCount;
  }
  getDrinks():Drink[]{
    return this.bevsDrunk;
  }
  addDrink(drink:Drink):void{
    this.bevsDrunk.push(drink);
    this.drinkCount++;
  }
  soberUp():void{
    this.bevsDrunk = [];
    this.drinkCount = 0;
  }

  setPerson(nName:string, nWeight:number, nGender){
    this.person = {name: nName, weight: nWeight, gender: nGender};
  }
  getPerson(){
    return this.person
  }

  getDrinkMenu() : Observable<Drink[]>{
    return this.http.get("./assets/drinks.json").pipe(
      map(x => x as Drink[])
    );
  }
}
