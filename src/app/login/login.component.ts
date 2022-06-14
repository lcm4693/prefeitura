import { Router } from '@angular/router';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  entrada: string = '';
  senha: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logar(){
    this.router.navigate(['/consulta'])
  }
}
