import { HttpClient } from '@angular/common/http';
import { Component, inject, signal, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Master } from '../../service/master';

@Component({
  selector: 'app-register',
  imports: [FormsModule,],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  isLogin = signal<boolean>(false);

  http = inject(HttpClient);

  router = inject(Router)

  masterService = inject(Master)

  

  registerObj: any = {
    "fullName": "",
    "email": "",
    "password": "",
    "collegeName": "",
    "role": ""
  }

  loginObj: any ={
    "email":"",
    "password":""
  }

  toggleForm() {
    this.isLogin.set(!this.isLogin())
  }
  onRegister() {
    this.http.post("https://api.freeprojectapi.com/api/ProjectCompetition/register", this.registerObj)
      .subscribe({
        next: (result: any) => {
          console.log(result);
          alert("✅ Registration successful!");
        },
        error: (error) => {
          console.error(error);
          alert("❌ Registration failed: " + error.error);
        }
      });
  }
  onLogin(){
    this.http.post("https://api.freeprojectapi.com/api/ProjectCompetition/login", this.loginObj)
      .subscribe({
        next: (result: any) => {
          localStorage.setItem('UserDetail', JSON.stringify(result));
          this.router.navigateByUrl('/home')
          this.masterService.$loginDone.next();
          console.log(result);
          alert("✅ Login successful!");
        },
        error: (error) => {
          console.error(error);
          alert("❌ Login failed: " + error.error);
        }
      });
  }
}