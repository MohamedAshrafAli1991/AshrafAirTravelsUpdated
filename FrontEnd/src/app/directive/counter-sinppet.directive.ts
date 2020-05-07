import { Directive, AfterViewInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCounterSinppet]'
})
export class CounterSinppetDirective implements AfterViewInit {

  constructor(private elem: ElementRef) { }

  ngAfterViewInit() {
    const defaultValue = this.elem.nativeElement.textContent;
    let value = defaultValue || 0;
    //value = value.replace(/[^0-9]+/g, '');
    value = value || 0;
    value = Number(value);
    let increment = 0;
    let range = value;
    if (range === 0) {
      range = 1;
    }
    const timer = Math.abs(Math.floor(3000 / range));
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
