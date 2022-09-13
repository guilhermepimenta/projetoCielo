import { Component, OnInit } from '@angular/core';
import { SumaryService } from './service/sumary.service';
import { Sumary } from 'src/model/sumary';
import Chart from 'chart.js/auto';



/**
 * 
 * Componente que apresenta a tabela total de recebimentos,
 * retornando os dados da API.
 * <app-sumary></app-sumary>
 * 
 * 
 */
@Component({
  selector: 'app-sumary',
  templateUrl: './sumary.component.html',
  styleUrls: ['./sumary.component.css']
})
export class SumaryComponent implements OnInit {

  sumary!: Sumary; 
  public chart: any;

  public constructor(private sumaryService: SumaryService) { }

  columns = ['Quantidade total','Valor total', 'Valor líquido total', 'Valor médio total', 'Data inicial', 'Data final']
    
  ngOnInit(): void {
    this.sumaryService.listarSummary().subscribe((sumary) => {
      this.sumary = sumary;      
    }, 
    (error) => console.log(error)
    )
    this.createChart();
  }

  public createChart(): void {

    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Valor médio total','Valor líquido total','Valor total'], 
         datasets: [
          {
            label: "Valores Recebidos",
            data: ['202.71','301847.02','313388.00'],
            backgroundColor: '#ff6384'
          },
          {
            label: "Quantidade Total",
            data: ['1546'],
            backgroundColor: '#badce3'
          }  
        ]
      },
      options: {
        aspectRatio:4.5
      }
      
    });

  }

}
