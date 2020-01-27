import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab2',
  templateUrl: './lab2.component.html',
  styleUrls: ['./lab2.component.css']
})
export class Lab2Component implements OnInit {

  people: object;
  constructor() { }

  ngOnInit() {
    this.people = [
      { Id: 1001, name: 'Rahul', salary: 9000, department: 'Java' },
      { Id: 1002, name: 'Vikash', salary: 11000, department: 'Oraaps'},
      { Id: 1003, name: 'Uma', salary: 12000, department: 'Java' },
      { Id: 1004, name: 'Sachin', salary: 11500, department: 'Oraaps'},
      { Id: 1005, name: 'Amol', salary: 7000, department: '.Net' },
      { Id: 1006, name: 'Vishal', salary: 17000, department: 'BI' },
      { Id: 1007, name: 'Rajita', salary: 21000, department: 'BI'},
      { Id: 1008, name: 'Neelima', salary: 81000, department: 'Testing'},
      { Id: 1009, name: 'Daya', salary: 10000, department: 'Testing' },
    ];
  }

}
