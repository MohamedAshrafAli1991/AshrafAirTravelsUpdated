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
  percentage: number;
  dailyPercentage: number;
  weeklyPercentage: number;
  yearlyPercentage: number;
  constructor(private router: Router) {
    am4core.useTheme(am4themes_spiritedaway);
    am4core.useTheme(am4themes_animated);
  }

  ngOnInit() {
    this.percentage = 10;
    this.dailyPercentage = 60;
    this.weeklyPercentage = 75;
    this.yearlyPercentage = 50;
    this.test();
    //this.testTwo();
  }
  test() {
    const chart = am4core.create('chartdiv', am4charts.XYChart);
    // Add data
    chart.data = [{
      year: 'Jan',
      ticket: 1,
      visa: 1,
      passport: 3,
      lamerica: 2,
      // "meast": 0.2,
      // "africa": 0.1
    }, {
      year: 'Jeb',
      ticket: 20,
      visa: 1,
      passport: 100,
      lamerica: 3,
      // "meast": 0.3,
      // "africa": 0.1
    }, {
      year: 'Mar',
      ticket: 34,
      visa: 1,
      passport: 60,
      lamerica: 4,
      // "meast": 0.3,
      // "africa": 0.1
    },{
      year: 'Apr',
      ticket: 47,
      visa: 9,
      passport: 80,
      lamerica: 5,
      // "meast": 0.3,
      // "africa": 0.1
    },{
      year: 'May',
      ticket: 18,
      visa: 1,
      passport: 150,
      lamerica: 4,
      // "meast": 0.3,
      // "africa": 0.1
    },{
      year: 'Jun',
      ticket: 68,
      visa: 6,
      passport: 150,
      lamerica: 6,
      // "meast": 0.3,
      // "africa": 0.1
    },{
      year: 'Jul',
      ticket: 28,
      visa: 1,
      passport: 150,
      lamerica: 4,
      // "meast": 0.3,
      // "africa": 0.1
    },{
      year: 'Aug',
      ticket: 98,
      visa: 4,
      passport: 150,
      lamerica: 5,
      // "meast": 0.3,
      // "africa": 0.1
    },{
      year: 'Sep',
      ticket: 78,
      visa: 1,
      passport: 250,
      lamerica: 3,
      // "meast": 0.3,
      // "africa": 0.1
    },{
      year: 'Oct',
      ticket: 98,
      visa: 4,
      passport: 90,
      lamerica: 9,
      // "meast": 0.3,
      // "africa": 0.1
    },{
      year: 'Nov',
      ticket: 82,
      visa: 3,
      passport: 89,
      lamerica: 1,
      // "meast": 0.3,
      // "africa": 0.1
    },{
      year: 'Dec',
      ticket: 62,
      visa: 6,
      passport: 140,
      lamerica: 4,
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
    valueAxis.title.text = "DASHBOARD (2019)";
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
    createSeries('passport', 'Passport', false);
    createSeries("lamerica", "Latin America", false);
    // createSeries("meast", "Middle East", true);
    // createSeries("africa", "Africa", true);
    // Add legend
    chart.legend = new am4charts.Legend();
  }

  testTwo() {
    let chart = am4core.create("chartdivTwo", am4charts.XYChart);

  // Add data
  chart.data = [{
    "date": new Date(2018, 3, 1),
    "value": 10
  },{
    "date": new Date(2018, 3, 2),
    "value": 20
  },{
    "date": new Date(2018, 3, 3),
    "value": 20
  },{
    "date": new Date(2018, 3, 4),
    "value": 20
  },{
    "date": new Date(2018, 3, 5),
    "value": 20
  },{
    "date": new Date(2018, 3, 6),
    "value": 20
  },{
    "date": new Date(2018, 3, 20),
    "value": 90
  },{
    "date": new Date(2018, 3, 20),
    "value": 90
  }, {
    "date": new Date(2018, 3, 21),
    "value": 102
  }, {
    "date": new Date(2018, 3, 22),
    "value": 65
  }, {
    "date": new Date(2018, 3, 23),
    "value": 62
  },{
    "date": new Date(2018, 3, 24),
    "value": 55
  },{
    "date": new Date(2018, 3, 25),
    "value": 81
  },{
    "date": new Date(2018, 3, 26),
    "value": 8
  },{
    "date": new Date(2018, 3, 27),
    "value": 48
  },{
    "date": new Date(2018, 3, 28),
    "value": 40
  },{
    "date": new Date(2018, 3, 29),
    "value": 81
  },{
    "date": new Date(2018, 3, 30),
    "value": 30
  }];

  // Create axes
  let dateAxis = chart.xAxes.push(new am4charts.DateAxis());

  // Create value axis
  let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

  // Create series
  let lineSeries = chart.series.push(new am4charts.LineSeries());
  lineSeries.dataFields.valueY = "value";
  lineSeries.dataFields.dateX = "date";
  lineSeries.name = "Sales";
  lineSeries.strokeWidth = 0.5;

  // Add simple bullet
  let bullet = lineSeries.bullets.push(new am4charts.Bullet());
  let image = bullet.createChild(am4core.Image);
  image.href = "https://www.amcharts.com/lib/images/weather/animated/day.svg";
  image.width = 30;
  image.height = 30;
  image.horizontalCenter = "middle";
  image.verticalCenter = "middle";
  }

}
