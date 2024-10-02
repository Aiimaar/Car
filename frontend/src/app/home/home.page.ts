import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cars: Array<any> = [
    {
      brand: "C/ Luján Pérez",
      model: "922928627",
      engine: "XX"
    },{
      brand: "C/ Luján Pérez",
      model: "922928627",
      engine: "XX"
    },{
      brand: "C/ Luján Pérez",
      model: "922928627",
      engine: "XX"
    }
  ]

  constructor(private router: Router) {}

  goToCarList(){
    this.router.navigateByUrl("/car-list");
  }

  goToCreateCar(){
    this.router.navigateByUrl("/creation-car");
  }

}
