import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-info-list',
  templateUrl: './user-info-list.component.html',
  styleUrls: ['./user-info-list.component.scss']
})
export class UserInfoListComponent implements OnInit {

  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      console.log(data.id);
    });
  }

}
