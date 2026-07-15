import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../directives/highlight';

@NgModule({
  imports: [CommonModule, FormsModule, HighlightDirective],
  exports: [CommonModule, FormsModule, HighlightDirective]
})
export class SharedModule {}