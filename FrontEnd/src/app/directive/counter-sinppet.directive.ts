import { Directive, AfterViewInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCounterSinppet]'
})
export class CounterSinppetDirective implements AfterViewInit {

  constructor(private elem: ElementRef) { }

  ngAfterViewInit() {
    const defaultValue = this.elem.nativeElement.textContent;
    let value = defaultValue || 0;
    value = Number(value);
    let increment = 0;
    let timer = 100;
    if (value > 200) {
      timer = 1;
    } else if (value > 100) {
      timer = 20;
    }
    setInterval(() => {
      if (value === increment) {
        clearInterval();
        this.elem.nativeElement.textContent = defaultValue;
      } else {
        increment++;
        this.elem.nativeElement.textContent = increment;
      }
    }, timer);

  }
}
