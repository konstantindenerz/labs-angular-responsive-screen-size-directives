import {Directive, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from "@angular/core";
import {ScreenSize} from "./screen-size";
import {ScreenSizeService} from "./screen-size.service";
import {distinctUntilChanged, map, takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

@Directive()
export class AbstractScreenSizeDirective implements OnInit, OnDestroy {
  #destroy$$ = new Subject<void>();
  create?: boolean;

  constructor(private sizes: ScreenSize[],
              private screenSizeService: ScreenSizeService,
              private viewContainerRef: ViewContainerRef,
              private templateRef: TemplateRef<any>) {
  }

  ngOnInit(): void {
    this.screenSizeService.activeScreen$.pipe(
      takeUntil(this.#destroy$$),
      map(size => this.create === false && this.sizes.indexOf(size) === -1 ||
        this.create !== false && this.sizes.indexOf(size) !== -1),
      distinctUntilChanged(),
    ).subscribe(create => {
      this.updateView(create);
    })
  }

  ngOnDestroy(): void {
    this.#destroy$$.next();
  }

  private updateView(create: boolean) {
    if (create) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
}

@Directive({
  selector: '[labsScreenSmall]',
  inputs: ['create: labsScreenSmall']
})
export class SmallScreenSizeDirective extends AbstractScreenSizeDirective {
  constructor(screenSizeService: ScreenSizeService, viewContainerRef: ViewContainerRef, templateRef: TemplateRef<any>) {
    super([ScreenSize.Small], screenSizeService, viewContainerRef, templateRef);
  }
}

@Directive({
  selector: '[labsScreenXSmallAndSmall]',
  inputs: ['create: labsScreenXSmallAndSmall']
})
export class XSmallAndSmallScreenSizeDirective extends AbstractScreenSizeDirective {
  constructor(screenSizeService: ScreenSizeService, viewContainerRef: ViewContainerRef, templateRef: TemplateRef<any>) {
    super([ScreenSize.XSmall, ScreenSize.Small], screenSizeService, viewContainerRef, templateRef);
  }
}
