import { TextFieldModule } from '@angular/cdk/text-field';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  // default module class that you need to inherit in components attached
  imports: [
    // CommonModule
  ],
  exports: [
    MatInputModule,
    MatTabsModule,
    MatButtonModule,
    MatFormFieldModule,
    TextFieldModule
  ]
})
export class AngularMaterialModule { }
