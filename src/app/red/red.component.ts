import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.css']
})
export class RedComponent {

  public params: any;

  agInit(params: any): void {
      this.params = params;
  }

}