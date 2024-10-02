import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-creation-car',
  templateUrl: './creation-car.page.html',
  styleUrls: ['./creation-car.page.scss'],
})
export class CreationCarPage implements OnInit {

  carForm: FormGroup;

  constructor(public formBuilder: FormBuilder,
    private carService: CarService,
    private route: Router) { 
      this.carForm = this.formBuilder.group({
        brand: ['', Validators.compose([Validators.required])],
        model: ['', Validators.compose([Validators.required])],
        engine: ['', Validators.compose([Validators.required])]
      })
    }

  ngOnInit() {
  }

  createCar() {
    if(this.carForm.valid){
      console.log('Valid Form: ', this.carForm.value);
      this.carService.create(this.carForm.value).subscribe(response => {
        this.route.navigateByUrl("/creation-car");
      })
    } else {
      console.log('Invalid Form');
    }
  }

  getFormControl(field: string){
    return this.carForm.get(field);
  }

  goHome(){
    this.route.navigateByUrl("/");
  }
}
