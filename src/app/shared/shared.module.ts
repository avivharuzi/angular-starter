import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DefaultImageDirective } from './directives/default-image.directive';

@NgModule({
  declarations: [DefaultImageDirective],
  imports: [CommonModule],
  exports: [CommonModule, DefaultImageDirective],
})
export class SharedModule {}
