import { Component } from '@angular/core';
import { LoaderService } from './shared/services/loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Architecture';
  
  ngOnInit(): void {
    
  }
}
