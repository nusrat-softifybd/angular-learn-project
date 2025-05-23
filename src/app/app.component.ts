import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from './components/shared/topbar/topbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopbarComponent, TopbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-learn-app';
}
