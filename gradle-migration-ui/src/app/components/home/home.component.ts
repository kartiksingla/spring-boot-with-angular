import { Component, OnInit } from '@angular/core';
import { MigrationService } from '../../services/migration.service';
import { Greet } from '../../model/greet';
import { Observable } from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  greetingMessage : Greet = {} as Greet;//= new Greet('abx');
  constructor(public migrationService : MigrationService) {
   //this.greetingMessage = new Greet('abx');
  }

  ngOnInit(): void {
    this.migrationService.getGreetingMessage().subscribe((data : Greet) => {
      console.log(data);
      this.greetingMessage = data;
    })
  }

}
