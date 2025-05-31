import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';
import { Person } from '../models/person.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PersonListComponent implements OnInit {
  persons: Person[] = [];
  loading = false;
  error = '';

  constructor(private personService: PersonService, private router: Router) {}

  ngOnInit() {
    this.getPersons();
  }

  getPersons() {
    this.loading = true;
    this.personService.getAll().subscribe({
      next: data => {
        this.persons = data;
        this.loading = false;
      },
      error: err => {
        this.error = 'Failed to load people';
        this.loading = false;
      }
    });
  }

  addPerson() {
    this.router.navigate(['/edit', 'new']);
  }

  editPerson(id: string) {
    this.router.navigate(['/edit', id]);
  }

  deletePerson(id: string) {
    this.router.navigate(['/delete', id]);
  }
}
