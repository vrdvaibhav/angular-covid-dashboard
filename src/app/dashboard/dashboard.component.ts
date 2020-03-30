import { Component, OnInit } from "@angular/core";

import { GridOptions } from "ag-grid";
import { RedComponent } from "../red/red.component";
import { YellowComponent } from "../yellow/yellow.component";
import { GreenComponent } from "../green/green.component";
import { DateComponent } from "../date/date.component";
import { DashboardService } from "./dashboard.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  private gridOptions: GridOptions;

  constructor(private cases: DashboardService) {}

  ngOnInit() {
    this.gridOptions = <GridOptions>{
      floatingFilter: true,
      defaultColDef: {
        sortable: true,
        flex: 1
      },
      onGridReady: function(params) {
        params.api.sizeColumnsToFit();
      }
    };

    this.gridOptions.columnDefs = [
      { headerName: "Country", field: "country", filter: true, suppressSizeToFit:true },
      { headerName: "Cases", field: "cases" },
      { headerName: "Todays Cases", field: "todayCases",cellRendererFramework: YellowComponent },
      { headerName: "Deaths", field: "deaths" },
      { headerName: "Todays Deaths", field: "todayDeaths", cellRendererFramework: RedComponent },
      { headerName: "Recovered", field: "recovered", cellRendererFramework: GreenComponent },
      { headerName: "Active", field: "active" },
      { headerName: "Critical", field: "critical" },
      { headerName: "Last Updated", field: "updated", cellRendererFramework: DateComponent, suppressSizeToFit:true }
    ];

    // this.gridOptions.rowData = [];
    this.getRawData();
  }

  getRawData() {
    this.cases.getCases().subscribe(
      data => {
        this.gridOptions.api.setRowData(data);
      },
      error => {}
    );
  }
}
