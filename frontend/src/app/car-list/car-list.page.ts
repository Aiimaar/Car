import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.page.html',
  styleUrls: ['./car-list.page.scss'],
})
export class CarListPage implements OnInit {

  showCars: any = [];
  carToEdit: any = null;
  isEditing: boolean = false;

  constructor(private carService: CarService, private route: Router) { }

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

  deleteCar(id: any) {
    this.carService.delete(id).subscribe(response => {
      this.getAllCars();
    });
  }

  startEditCar(car: any) {
    this.carToEdit = { ...car };
    this.isEditing = true;
  }

  cancelEdit() {
    this.isEditing = false;
    this.carToEdit = null;
  }

  updateCar() {
    if (this.carToEdit) {
      this.carService.update(this.carToEdit).subscribe(
        response => {
          console.log('Car updated successfully!');
          this.isEditing = false;
          this.carToEdit = null;
          this.getAllCars();
        },
        error => {
          console.error('Error updating car:', error);
        }
      );
    }
  }

  goHome() {
    this.route.navigateByUrl("/");
  }
}
