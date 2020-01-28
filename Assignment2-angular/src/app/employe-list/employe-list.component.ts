import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.css']
})
export class EmployeListComponent {

  @Input() info = [];
  // constructor() { }

  // ngOnInit() {
  // }

}
