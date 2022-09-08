import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { SumaryComponent } from './sumary/sumary.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "sumary", component: SumaryComponent },
  { path: "items", component: ItemsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
