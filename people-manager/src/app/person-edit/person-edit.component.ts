import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../services/person.service';
import { Person } from '../models/person.models';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {
  person: Person = { name: '', age: null, gender: '', mobile: '' };
  id: string;
  isNew = false;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.isNew = this.id === 'new';
    if (!this.isNew) {
      this.personService.get(this.id).subscribe({
        next: data => this.person = data,
        error: err => this.error = 'Person not found'
      });
    }
  }

  savePerson() {
    if (this.isNew) {
      this.personService.create(this.person).subscribe({
        next: () => this.router.navigate(['/people']),
        error: err => this.error = 'Failed to create person'
      });
    } else {
      this.personService.update(this.id, this.person).subscribe({
        next: () => this.router.navigate(['/people']),
        error: err => this.error = 'Failed to update person'
      });
    }
  }

  cancel() {
    this.router.navigate(['/people']);
  }
}
