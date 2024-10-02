import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  endPoint: string = "http://localhost:8080/api/cars";

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get(this.endPoint);
  }

  delete(id: any){
    return this.httpClient.delete(`${this.endPoint}/${id}`)
  }

  create(car: any){
    const headers = new HttpHeaders({
      'content-type': "application/x-www-form-urlencoded"
    });

    const body = new URLSearchParams();
    body.append("brand", car.brand);
    body.append("model", car.model);
    body.append("engine", car.engine);

    return this.httpClient.post(this.endPoint, body, { headers });
  }

  getCarById(id: any){
    return this.httpClient.get(`${this.endPoint}/${id}`)
  }

  update(car: any){
    return this.httpClient.put(`${this.endPoint}/${car.id}`, car);
  }

}
