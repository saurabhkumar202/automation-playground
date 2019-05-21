import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  pic: string;

  constructor() {
    this.pic = 'assets/business.jpg';
  }

  ngOnInit() {
  }

}
