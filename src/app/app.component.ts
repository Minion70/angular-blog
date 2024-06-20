import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HouseComponent } from './house/house.component';
import { houses } from './houses';
import { House } from './house.interface';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, HouseComponent],
  templateUrl: './app.component.html',
  styleUrl: '../../css/custom.css',
})
export class AppComponent {
  houses: House[] = [...houses];
  title = 'blogApp';
  inputValue = 'Angular18';
  receiveClickEvent(value: string) {
    console.log("app is received the home's click event", value);
  }
}
