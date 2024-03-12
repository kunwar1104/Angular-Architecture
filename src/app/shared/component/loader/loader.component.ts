import { Component } from '@angular/core';
import { LoaderService } from '../../services/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  loading$ = this.loadingService.loading$;

  constructor(
    private loadingService: LoaderService,
    
  ) { }
}
