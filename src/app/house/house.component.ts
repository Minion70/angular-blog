import { Component, Input } from '@angular/core';
import { houses } from '../houses';
import { House } from '../house.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-house',
  standalone: true,
  imports: [NgClass],
  templateUrl: './house.component.html',
  styleUrl: './house.component.css',
})
export class HouseComponent {
  @Input() house: House = houses[2];
  @Input() houseIndex = 0;
  @Input() first = true;
  handleApply() {
    alert('This house is sold.');
  }
  isImageVisible() {
    return this.house && this.house.photo;
  }
  houseClasses() {
    if (this.house.id % 2) return 'odd';
    else return 'even';
  }
}
