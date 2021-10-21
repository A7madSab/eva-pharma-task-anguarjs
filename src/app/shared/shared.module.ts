import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../layouts/header/header.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [LoadingSpinnerComponent],
  imports: [CommonModule],
  exports: [LoadingSpinnerComponent, CommonModule],
})
export class SharedModule {}
