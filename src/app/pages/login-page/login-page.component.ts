import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [AuthService]
})

export class LoginPageComponent implements OnInit {

  user: any = {};
  feedbackEnabled = false;
  error = null;
  processing = false;
  
  constructor(public auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.auth.login(this.user)  
      .then((result) => {
        this.router.navigate(['/home'])})
      .catch((err) => {
        this.error = err.error.error; // :-)
        this.processing = false;
        this.feedbackEnabled = false;
      });

    }
  }
}
