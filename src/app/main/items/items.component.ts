import { Component, OnInit } from '@angular/core';
import { PaginationService } from 'src/service/pagination.service';
import { ItemsService } from './service/items.service';

/**
 * usage
 * Componente que apresenta a tabela diarias de recebimentos,
 * retornando os dados da API.
 * <app-items></app-items>
 * 
 * 
 */
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit { 

  isValid = true;
  isDone = true;
  pagination: any; 

  constructor(private itemsService: ItemsService,
            private paginationService: PaginationService) { }  

  columns = [          
    'Pagamento',
    'CNPJ',
    'Data',
    'Tipo de Pagamento',
    'Bandeira do Cartão',  
    'Taxa',    
    'Canal de Venda Realizada',
    'Valor Líquido',    
    'Status'];
    
  index = [      
    'paymentNode',
    'cnpjRoot',
    'date',
    'paymentType',
    'cardBrand',     
    'administrationFee',    
    'channel',
    'netAmount',      
    'status'
  ];

  items: any;

  public ngOnInit(): void {
    this.itemsService.listarItems().subscribe((items) => {
      this.items = items;      
    }, 
    (error) => console.log(error)
    )

    this.paginationService.listarPagination().subscribe((pagination) => {
      this.pagination = pagination;         
    }, 
    (error) => console.log(error)
    )

  }

  public firstPage(): void{
    this.isValid = false;
    this.isDone = false;     
  }

  public lastPage(){
    this.isValid = true;
    this.isDone = true;   
  }
  
}

