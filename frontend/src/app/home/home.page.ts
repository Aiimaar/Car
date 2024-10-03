import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  showCars: any = [];

  constructor(private carService: CarService, private router: Router) {}

  ngOnInit() {
    this.getAllCars();
  }

  ionViewWillEnter(){
    this.getAllCars();
  }

  getAllCars() {
    this.carService.getAll().subscribe(data => {
      console.log("Data has arrived");
      console.log(data);
      this.showCars = data;
    });
  }

  goToCarList(){
    this.router.navigateByUrl("/car-list");
  }

  goToCreateCar(){
    this.router.navigateByUrl("/creation-car");
  }

}
