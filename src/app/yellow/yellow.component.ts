import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yellow',
  templateUrl: './yellow.component.html',
  styleUrls: ['./yellow.component.css']
})
export class YellowComponent {

  private params: any;

  agInit(params: any): void {
      this.params = params;
  }

}