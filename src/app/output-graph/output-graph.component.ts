import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Highcharts from 'highcharts';

declare var require: any;
const Boost = require('highcharts/modules/boost');
const noData = require('highcharts/modules/no-data-to-display');
const More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'app-output-graph',
  templateUrl: './output-graph.component.html',
  styleUrls: ['./output-graph.component.css']
})

export class OutputGraphComponent implements OnInit {

  public options: any = {
    chart: {
      type: 'scatter',
      height: 700
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: true
        },
        pointStart: 2020
      },
      line: {
        // shared options for all line series
      },
      scatter: {
        lineWidth: 2
      }
    },
    title: {
      // text: 'Sample Scatter Plot'
      text: 'Income Scatter Plot'
    },
    credits: {
      enabled: false
    },
    tooltip: {
      formatter() {
        /*return 'x: ' + Highcharts.dateFormat('%e %b %y %H:%M:%S', this.x) +
        'y: ' + this.y.toFixed(2);*/
        return 'x: ' + Highcharts.dateFormat('%e %b %y %H:%M:%S', this.x) +
        'y: ' + this.y.toFixed(10);
      }
    },
    xAxis: {
      type: 'datetime',
      labels: {
        formatter() {
          // return Highcharts.dateFormat('%e %b %y', this.value);
          return Highcharts.dateFormat('%Y', this.value);
        }
      }
    },
    series: [
      {
        name: 'Point-1',
        turboThreshold: 500000,
        // data: [[new Date('2018-01-25 18:38:31').getTime(), 2]]
        data: [
          [new Date('2019-07-21 00:00:01').getTime(), 500],
          [new Date('2029-07-21 00:00:01').getTime(), 1000],
          [new Date('2039-07-21 00:00:01').getTime(), 2000],
          [new Date('2049-07-21 00:00:01').getTime(), 4000],
          [new Date('2059-07-21 00:00:01').getTime(), 7000],
          [new Date('2069-07-21 00:00:01').getTime(), 10000]
        ]
      }
      /*},
      {
        name: 'Point-2',
        turboThreshold: 500000,
        // data: [[new Date('2018-01-25 18:38:31').getTime(), 2]]
        data: [[new Date('2029-07-21 00:00:01').getTime(), 1000000]]
      },
      {
        name: 'Point-3',
        turboThreshold: 500000,
        // data: [[new Date('2018-01-25 18:38:31').getTime(), 2]]
        data: [[new Date('2039-07-21 00:00:01').getTime(), 2000000]]
      },
      {
        name: 'Point-4',
        turboThreshold: 500000,
        // data: [[new Date('2018-01-25 18:38:31').getTime(), 2]]
        data: [[new Date('2049-07-21 00:00:01').getTime(), 4000000]]
      },
      {
        name: 'Point-5',
        turboThreshold: 500000,
        // data: [[new Date('2018-01-25 18:38:31').getTime(), 2]]
        data: [[new Date('2059-07-21 00:00:01').getTime(), 7000000]]
      },
      {
        name: 'Point-6',
        turboThreshold: 500000,
        // data: [[new Date('2018-02-05 18:38:31').getTime(), 7]]
        data: [[new Date('2069-07-21 00:00:01').getTime(), 10000000]]
      }*/
    ]
  };
  constructor(public http: HttpClient) { }

  ngOnInit() {
    Highcharts.chart('container', this.options);
    /*
    // Set 10 seconds interval to update data again and again
    const source = interval(10000);

    // Sample API
    const apiLink = 'https://api.myjson.com/bins/13lnf4';

    this.subscription = source.subscribe(val => this.getApiResponse(apiLink).then(
      data => {
        const updated_normal_data = [];
        const updated_abnormal_data = [];
        data.forEach(row => {
          const temp_row = [
            new Date(row.timestamp).getTime(),
            row.value
          ];
          row.Normal === 1 ? updated_normal_data.push(temp_row) : updated_abnormal_data.push(temp_row);
        });
        this.options.series[0]['data'] = updated_normal_data;
        this.options.series[1]['data'] = updated_abnormal_data;
        Highcharts.chart('container', this.options);
      },
      error => {
        console.log('Something went wrong.');
      })
    );
    */
  }

  /*getApiResponse(url) {
    return this.http.get(url, {})
      .toPromise().then(res => {
        return res;
      });
  }*/

}
