import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-green',
  templateUrl: './green.component.html',
  styleUrls: ['./green.component.css']
})
export class GreenComponent {

  public params: any;

  agInit(params: any): void {
      this.params = params;
  }

}