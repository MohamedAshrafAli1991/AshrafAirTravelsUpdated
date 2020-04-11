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
    let timer = 60;
    if (value > 200) {
      timer = 0;
    } else if (value > 100) {
      timer = 5;
    } else if (value > 50) {
      timer = 10;
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
