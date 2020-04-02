import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_spiritedaway from '@amcharts/amcharts4/themes/spiritedaway';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { Router } from '@angular/router';


@Component({
  selector: 'app-supper-admin-dashboard',
  templateUrl: './supper-admin-dashboard.component.html',
  styleUrls: ['./supper-admin-dashboard.component.scss']
})
export class SupperAdminDashboardComponent implements OnInit {

  constructor(private router: Router) {
    am4core.useTheme(am4themes_spiritedaway);
    am4core.useTheme(am4themes_animated);
  }

  ngOnInit() {
    this.test();
  }
  test() {
    const chart = am4core.create('chartdiv', am4charts.XYChart);
    // Add data
    chart.data = [{
      year: '2003',
      ticket: 2,
      visa: 1,
      user: 60,
      // "lamerica": 1.2,
      // "meast": 0.2,
      // "africa": 0.1
    }, {
      year: '2004',
      ticket: 3,
      visa: 2,
      user: 50,
      // "lamerica": 1.3,
      // "meast": 0.3,
      // "africa": 0.1
    }, {
      year: '2005',
      ticket: 4,
      visa: 1,
      user: 60,
      // "lamerica": 1.4,
      // "meast": 0.3,
      // "africa": 0.1
    }];
    // Create axes
    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'year';
    // categoryAxis.title.text = "Local country offices";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.cellStartLocation = 0.1;
    categoryAxis.renderer.cellEndLocation = 0.9;
    categoryAxis.renderer.grid.template.disabled = true;
    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    // valueAxis.title.text = "Expenditure (M)";
    // Create series
    function createSeries(field, name, stacked) {
      const series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = field;
      series.dataFields.categoryX = 'year';
      series.name = name;
      series.columns.template.tooltipText = '{name}: [bold]{valueY}[/]';
      series.stacked = stacked;
      series.columns.template.width = am4core.percent(95);
    }
    createSeries('ticket', 'Ticket', false);
    createSeries('visa', 'Visa', false);
    createSeries('user', 'User', false);
    // createSeries("lamerica", "Latin America", true);
    // createSeries("meast", "Middle East", true);
    // createSeries("africa", "Africa", true);
    // Add legend
    chart.legend = new am4charts.Legend();
  }
}
