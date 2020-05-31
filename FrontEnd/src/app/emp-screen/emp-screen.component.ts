import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-screen',
  templateUrl: './emp-screen.component.html',
  styleUrls: ['./emp-screen.component.scss']
})
export class EmpScreenComponent implements OnInit {


  ngOnInit() {
  }

  selectedElement() {
    const navbar: any = document.querySelectorAll('#sidebar')[0];
    const navbarOffset = navbar.offsetTop || 0;
    const lineElement: any =  document.querySelectorAll('.line-vertical')[0];
    setTimeout(() => {
      const el: any = document.querySelectorAll('#sidebar ul > .active');
      let postion = el[0].offsetTop || 0;
      postion = postion  - navbarOffset + 5;
      console.log(postion);
      lineElement.style.top =   postion + 'px';
    }, 100);
  }

}
