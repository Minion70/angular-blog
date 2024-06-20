import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  @Input({ required: true }) title = '';

  @Output('handleClick')
  handleClickDemo = new EventEmitter<string>();

  onHandleClick() {
    console.log('home button is clicked');
    this.handleClickDemo.emit(this.title);
  }
}
