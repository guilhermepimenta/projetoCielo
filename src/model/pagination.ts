export class Pagination  { 
    pageNumber: number;
    pageSize: number;
    totalElements: number;
    numPages: number;
    lastPage: boolean;
    firstPage: boolean;

    public constructor (pageNumber: number, pageSize:number, totalElements:number, numPages:number, lastPage:boolean, firstPage:boolean) 
        {   this.pageNumber = pageNumber;
            this.pageSize = pageSize;
            this.totalElements = totalElements;
            this.numPages = numPages;
            this.lastPage = lastPage;
            this.firstPage = firstPage;
        }
}