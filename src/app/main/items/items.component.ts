import { Component, OnInit } from '@angular/core';
import { PaginationService } from 'src/service/pagination.service';
import { ItemsService } from './service/items.service';
import * as FileSaver from 'file-saver';

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
  items: any[] = [];

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

  exportExcel() {
    if (this.items.length > 0) {
      import("xlsx").then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(this.items);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "ExportExcel");       
      });
    }    
  }
  saveAsExcelFile(buffer: any, fileName: string): void {   
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);    
  } 
  
}

