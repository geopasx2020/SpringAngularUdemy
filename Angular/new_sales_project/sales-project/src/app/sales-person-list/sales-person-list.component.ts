import { Component, OnInit } from '@angular/core';
import {SalesPerson} from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {
  title="Our Super Team"
  //create an array of objects
  salesPersonList: SalesPerson[]=[
    new SalesPerson('George','Karamousalidis','geokara@in.gr',50000),
    new SalesPerson('Anna','Papadopoulou','annapap@in.gr',40000),
    new SalesPerson('Nikolas','Karamousalidis','nikkara@in.gr',90000),
    new SalesPerson('George','Karamousalidis','geokarajnr@in.gr',60000)

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
