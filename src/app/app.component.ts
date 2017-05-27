import { Component, OnInit } from '@angular/core';
import { DataServiceService } from "./data-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = [];

  constructor(private _dataservice : DataServiceService){}

  ngOnInit(){
    this._dataservice.getData()
    .subscribe(res => this.data = res);
  }
}
