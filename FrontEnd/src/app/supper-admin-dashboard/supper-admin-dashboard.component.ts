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
      year: 'Jan',
      ticket: 5,
      visa: 1,
      passport: 50,
      // "lamerica": 1.2,
      // "meast": 0.2,
      // "africa": 0.1
    }, {
      year: 'Jeb',
      ticket: 6,
      visa: 2,
      passport: 100,
      // "lamerica": 1.3,
      // "meast": 0.3,
      // "africa": 0.1
    }, {
      year: 'Mar',
      ticket: 4,
      visa: 1,
      passport: 60,
      // "lamerica": 1.4,
      // "meast": 0.3,
      // "africa": 0.1
    },{
      year: 'Apr',
      ticket: 7,
      visa: 1,
      passport: 80,
      // "lamerica": 1.4,
      // "meast": 0.3,
      // "africa": 0.1
    },{
      year: 'May',
      ticket: 8,
      visa: 1,
      passport: 150,
      // "lamerica": 1.4,
      // "meast": 0.3,
      // "africa": 0.1
    },{
      year: 'Jun',
      ticket: 8,
      visa: 1,
      passport: 150,
      // "lamerica": 1.4,
      // "meast": 0.3,
      // "africa": 0.1
    },{
      year: 'Jul',
      ticket: 8,
      visa: 1,
      passport: 150,
      // "lamerica": 1.4,
      // "meast": 0.3,
      // "africa": 0.1
    },{
      year: 'Aug',
      ticket: 8,
      visa: 1,
      passport: 150,
      // "lamerica": 1.4,
      // "meast": 0.3,
      // "africa": 0.1
    },{
      year: 'Sep',
      ticket: 8,
      visa: 1,
      passport: 650,
      // "lamerica": 1.4,
      // "meast": 0.3,
      // "africa": 0.1
    },{
      year: 'Oct',
      ticket: 8,
      visa: 1,
      passport: 150,
      // "lamerica": 1.4,
      // "meast": 0.3,
      // "africa": 0.1
    },{
      year: 'Nov',
      ticket: 8,
      visa: 1,
      passport: 150,
      // "lamerica": 1.4,
      // "meast": 0.3,
      // "africa": 0.1
    },{
      year: 'Dec',
      ticket: 12,
      visa: 6,
      passport: 240,
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
    valueAxis.title.text = "DASHBOARD (2020)";
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
    createSeries('ticket', 'Ticket', true);
    createSeries('visa', 'Visa', true);
    createSeries('passport', 'Passport', true);
    // createSeries("lamerica", "Latin America", true);
    // createSeries("meast", "Middle East", true);
    // createSeries("africa", "Africa", true);
    // Add legend
    chart.legend = new am4charts.Legend();
  }
}
