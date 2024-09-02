import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionOrdersComponent } from './sections/section-orders/section-orders.component';
import { SectionSalesComponent } from './sections/section-sales/section-sales.component';

const routes: Routes = [
  { path: 'sales', component: SectionSalesComponent },
  { path: 'orders', component: SectionOrdersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
