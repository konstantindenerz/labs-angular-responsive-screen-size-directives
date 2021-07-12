import {Injectable} from "@angular/core";
import {ReplaySubject} from "rxjs";
import {ScreenSize, ScreenSizes} from "./screen-size";

@Injectable({providedIn: 'root'})
export class ScreenSizeService {
  activeScreen$ = new ReplaySubject<ScreenSize>(1);

  constructor() {
    ScreenSizes.forEach(query => {
      const mediaQueryList = window.matchMedia(query);
      mediaQueryList.addEventListener('change', (event: MediaQueryListEvent) => {
        if (event.matches) {
          this.activeScreen$.next(event.media as ScreenSize);
        }
      });
      if (mediaQueryList.matches) {
        this.activeScreen$.next(mediaQueryList.media  as ScreenSize);
      }
    });
  }
}
