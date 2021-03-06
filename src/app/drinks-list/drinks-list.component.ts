import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, } from '@angular/forms';
import { DrinkService } from '../drinks.Service';
import { Store } from '@ngrx/store';
import { Drink } from "./state/drink.model";
import { DrinkAppState } from './state/drink.state';
import { AddDrink } from './state/drink.Action';
import { selectDrinksFor } from './state/selector';
import { filter} from 'rxjs/operators';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks-list.component.html',
  styleUrls: ['./drinks-list.component.scss']
})
export class DrinksComponent implements OnInit {
  
  public drinkForm;
  public init:boolean = false;
  public drinks$ = this.store.select(selectDrinksFor);

  constructor(
    private formBuilder: FormBuilder,
    private drinkService: DrinkService,
    private store: Store<DrinkAppState>
  ) {  }

  ngOnInit(): void {

    this.drinkForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      percent: new FormControl(0, [Validators.required])
    });

    this.drinks$.pipe(filter(x=>x.length===0)).subscribe(()=>{ //if the observable is empty
      this.drinkService.getDrinkMenu().subscribe(drink => { //read in values from json 
          drink.forEach(drink => {
            this.store.dispatch( new AddDrink(drink)); //place them into the state
          });
          this.drinks$.subscribe(x=>console.log(x));
      });
    });
      
  }

  //TODO: use an action here
  addDrink(drink:Drink):void{
    this.drinkService.addDrink(drink); //add the drink to drinks consumed
    if(this.drinkService.getCount() > 6){ //give a message
      window.alert("This is drink number: " + this.drinkService.getCount() + "\nMight want to cool down there super chief");
    }else{
      window.alert("Enjoy that " + drink.name +"\nThis is drink number: " + this.drinkService.getCount());
    }
  }

  newDrink(drink:Drink):void{ //add the drink to the state for listing
    this.store.dispatch(new AddDrink({name: drink.name,  percent: drink.percent, type: drink.type}) )
    this.drinkService.addDrink(drink);
    window.alert("Enjoy that "+ drink.name+"\nThis is drink number: " + this.drinkService.drinkCount);
    
  }

}
