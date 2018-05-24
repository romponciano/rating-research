import { Component, OnInit } from '@angular/core';
import { JsonService, JsonIp } from '../services/json.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [JsonService]
})
export class AppComponent implements OnInit {
  title = 'Rating Research';
  public userIp: string;

  constructor(private jsonService: JsonService) {
  }

  ngOnInit() {
    this.jsonService.getIp().subscribe(
      (res: string) => this.userIp = res
    );
  }
}
