import { Component, OnInit, Input } from '@angular/core';
import { UserScoreService } from '../../services/user-scores.service';
import { AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  users: any;
  scores: any;

  constructor(
    private userScoreService: UserScoreService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.userScoreService.getAllUsers()
      .then(users => {
        this.users = users;
        console.log(this.users);
      });
  }
}
