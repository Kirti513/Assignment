import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent {

  enterId = '';
  enterName = '';
  enterSalary = '';
  enterDepartment = '';

  @Output() data = new EventEmitter();

  onAddSubmit() {
    const d = {
      id : this.enterId,
      name : this.enterName,
      salary : this.enterSalary,
      department : this.enterDepartment
    };
    this.data.emit(d);
  }
  // constructor() { }

  // ngOnInit() {
  // }

}
