import {Component} from '@angular/core';
import {ScreenSizeService} from "./screen-size/screen-size.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'labs-angular-responsive-screen-size-directives';
   activeScreen$: Observable<any>;

  constructor(public screenSizeService: ScreenSizeService) {
    this.activeScreen$ = this.screenSizeService.activeScreen$.asObservable();
  }
}
