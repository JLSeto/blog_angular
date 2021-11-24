import { Component, OnInit } from '@angular/core';

import { ChartDataSets, ChartOptions, ChartScales, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
//import * as pluginAnnotations from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit
{
  public lineChartData: ChartDataSets[];
  public chartScales: ChartScales = {type: 'line', xAxes:[{ticks: {autoSkip: true, maxTicksLimit: 2}}]};

  public lineChartLabels: Label[] = new Array(360).fill('');
  public lineChartOptions: (ChartOptions & { annotation?: any }) = 
  {
    responsive: true,
    scales: this.chartScales
  };

  public lineChartColors: Color[] = 
  [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(0,0,0,0)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line' as ChartType;
  public lineChartPlugins = [];
  
  public data: number[] = new Array(720).fill(0);

  constructor()
  {
    for(let i = 0; i < 360; i+=1)
    {
      this.data[i] = 1 * Math.sin(Math.PI * i / 180);
      this.lineChartLabels[i] = String(i);
    }

    this.lineChartData = [ {data: this.data } ];
  }

  ngOnInit(): void
  {
  }

}
