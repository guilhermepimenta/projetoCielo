import { Component, OnInit } from '@angular/core';
import { SumaryService } from './service/sumary.service';
import { Sumary } from 'src/model/sumary'


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

  public constructor(private sumaryService: SumaryService) { 
  }

  columns = ['Quantidade total','Valor total', 'Valor líquido total', 'Valor médio total', 'Data inicial', 'Data final']
    
  ngOnInit(): void {
    this.sumaryService.listarSummary().subscribe((sumary) => {
      this.sumary = sumary;      
    }, 
    (error) => console.log(error)
    )
  }

}
