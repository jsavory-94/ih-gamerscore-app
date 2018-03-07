import { Component, OnInit, Input } from '@angular/core';
import { UserScoreService } from '../../services/user-scores.service';
import { AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  user: any;
  scores: any;

  constructor(
    private userScoreService: UserScoreService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    this.scores = this.user.scores;
    console.log(this.scores);
    //this.userScoreService.getScore(this.user._id)
      // .then(scores => {
      //   this.scores = scores;
      //   console.log(this.scores);
    // });
  }
}
