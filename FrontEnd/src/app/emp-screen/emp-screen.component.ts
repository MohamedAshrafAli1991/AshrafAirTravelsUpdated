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
    const lineElement: any =  document.querySelectorAll('.line-vertical')[0];
    setTimeout(() => {
      const el: any = document.querySelectorAll('#sidebar ul > .active');
      let postion = el[0].offsetTop || 0;
      const offsetHeight = el[0].offsetHeight || 0;
      postion = postion - offsetHeight;

      console.log(postion);
    //   lineElement.setStyle({
    //     top: postion + 'px',
    //  });
      lineElement.style.top = postion + 'px';
    }, 100);

  }

}
