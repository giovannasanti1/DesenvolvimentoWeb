import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = 'admin';
  password: string = '123';
  errorMessage: string = '';

  constructor(private router: Router) { }

  onSubmit(): void {
    if (this.username === 'admin' && this.password === '123') 
    {
      this.router.navigateByUrl('/home');
    } 
    else {
      this.errorMessage = 'Usuário ou senha inválido';
    }
  }

  ngOnInit(): void {
  }

}

  
