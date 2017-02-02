import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  yturl = 'appily works!';
  private urlSubmitted = false;

  onSubmit(): boolean {
    this.urlSubmitted = true;
    return false;
  }
}
