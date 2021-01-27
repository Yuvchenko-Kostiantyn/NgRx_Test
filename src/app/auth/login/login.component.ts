import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IUserData } from 'src/app/shared/models/user-data';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup
  private users: IUserData[];

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService, 
    private router: Router) { }

  ngOnInit(): void {
    this.authService.getUsers().subscribe(res => {
      console.log(res)
      this.users
    });
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    })
  }

  onSubmit(){
    this.authService.logUserIn(this.loginForm.value);
    this.router.navigate(['dashboard']);
  }

}
