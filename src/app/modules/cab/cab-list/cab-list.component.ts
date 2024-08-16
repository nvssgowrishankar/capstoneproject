import { Component, OnInit } from '@angular/core';
import { Cab } from '../../../models/cab.model';
import { CabService } from '../../../services/cab.service';


@Component({
  selector: 'app-cab-list',
  templateUrl: './cab-list.component.html',
  styleUrls: ['./cab-list.component.css']
})
export class CabListComponent implements OnInit {
  cabs: Cab[] = [];

  constructor(private cabService: CabService) { }

  ngOnInit() {
    this.loadCabs();
  }

  loadCabs() {
    this.cabService.getCabs().subscribe(
      (data: Cab[]) => {
        this.cabs = data;
      },
      error => {
        console.error('Error fetching cabs', error);
      }
    );
  }
}
