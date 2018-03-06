import { Component, OnInit } from '@angular/core';
import { UserScoreService } from '../../services/user-scores.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'


@Component({
  selector: 'input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
  providers: [UserScoreService]
})
export class InputFormComponent implements OnInit {
  scores: any = {};
  feedbackEnabled = false;
  error = null;
  processing = false;
  
  constructor(public userScore: UserScoreService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.userScore.score(this.scores)  
      .then((result) => {
        this.router.navigate(['user-info/user-stats'])})
      .catch((err) => {
        this.error = err.error.error; // :-)
        this.processing = false;
        this.feedbackEnabled = false;
      });

    }
  }
}