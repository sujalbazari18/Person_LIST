import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-person-delete',
  templateUrl: './person-delete.component.html',
  styleUrls: ['./person-delete.component.css']
})
export class PersonDeleteComponent implements OnInit {
  id: string;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  deletePerson() {
    this.personService.delete(this.id).subscribe({
      next: () => this.router.navigate(['/people']),
      error: err => this.error = 'Failed to delete person'
    });
  }

  cancel() {
    this.router.navigate(['/people']);
  }
}
