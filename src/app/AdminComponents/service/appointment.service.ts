import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appointment } from 'src/app/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http:HttpClient) { }
 
  userSignup(data:Appointment[]) {    
    return this.http.post("http://localhost:3000/appointmentList",data)
  }
  appointmentList()
  {
    return this.http.get<Appointment[]>("http://localhost:3000/appointmentList")
  }
  deleteAppointment(id:number)
  {
    return this.http.delete(`http://localhost:3000/appointmentList/${id}`)
  }
}
