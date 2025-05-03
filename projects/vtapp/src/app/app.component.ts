import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HomeComponent],
  templateUrl: './app.component.html',
  //template: `<h1>Hello World! From Inline Template</h1>
  //<p>This is paragraph</p>`,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'VTApp';
}
