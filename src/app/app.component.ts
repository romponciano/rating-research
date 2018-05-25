import { Component, OnInit } from '@angular/core';
import { JsonService } from '../services/json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [JsonService]
})
export class AppComponent implements OnInit {
  title = 'Vote Filme';
  public userIp: string;

  constructor(private jsonService: JsonService) { }

  ngOnInit() {
    this.jsonService.getIp().subscribe(
      (res: string) => this.userIp = res
    );
  }
}
