import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-supper-admin-reg',
  templateUrl: './supper-admin-reg.component.html',
  styleUrls: ['./supper-admin-reg.component.scss']
})
export class SupperAdminRegComponent implements OnInit {

  constructor() { }
  @ViewChild('scroll', {static: true}) cardElement: ElementRef ;
  ngOnInit() {
  }
  scrollLeft(value) {
    const el: HTMLElement = this.cardElement.nativeElement as HTMLElement;
    el.scrollLeft += value;
  }
}
