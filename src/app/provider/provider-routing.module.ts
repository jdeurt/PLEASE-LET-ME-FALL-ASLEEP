import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProviderComponent } from './provider.component';

export const providerRoutes: Routes = [
  {path: "", component: ProviderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(providerRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
