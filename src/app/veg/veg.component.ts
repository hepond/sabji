import { Component, OnInit } from '@angular/core';
import { DATA } from '../mock-veg';
import { Veg } from '../veg';
@Component({
  selector: 'app-veg',
  templateUrl: './veg.component.html',
  styleUrls: ['./veg.component.css']
})
export class VegComponent implements OnInit {
  vegs=DATA;
  selectedVeg?: Veg;
  onSelect(veg: Veg): void {
    this.selectedVeg = veg;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
