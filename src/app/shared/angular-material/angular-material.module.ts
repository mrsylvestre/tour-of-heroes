import { TextFieldModule } from '@angular/cdk/text-field';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatInputModule, MatSnackBarModule, MatTableModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  // default module class that you need to inherit in components attached
  imports: [
    // CommonModule
  ],
  exports: [
    MatTabsModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSnackBarModule,
    TextFieldModule
  ]
})
export class AngularMaterialModule { }
