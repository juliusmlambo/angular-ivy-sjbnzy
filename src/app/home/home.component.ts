import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Person } from '../person';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  people: Person[];
  person = new Person();
  constructor(private apiService: ApiService) {}

  refreshPeople() {
    this.apiService.getPeople().subscribe((data) => {
      console.log(data);
      this.people = data;
    });
  }

  addPerson() {
    this.apiService.addPerson(this.person).subscribe((data) => {
      console.log(data);
      this.refreshPeople();
    });
  }

  ngOnInit() {}
}
