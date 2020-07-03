import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent {

  private params: any;

  agInit(params: any): void {
    // .toISOString().slice(0,10)
      this.params = new Date(params.value).toLocaleString();
  }

}