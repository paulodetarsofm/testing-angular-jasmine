import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'testing-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(
    private router: Router,
  ) { }

  go(): void {
    this.router.navigate(['users', 1]);
  }
}
