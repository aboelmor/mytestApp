import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Title of app succesfully defined!';


data = [
  { path: 'home', text: 'Home' },
  { path: 'about', text: 'About' },
];
}
