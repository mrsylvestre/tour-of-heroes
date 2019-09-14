import { TextFieldModule } from '@angular/cdk/text-field';
import { NgModule } from '@angular/core';
import {
  MatBadgeModule,
  MatButtonModule,
  MatChipsModule,
  MatInputModule,
  MatSnackBarModule,
  MatTableModule,
} from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  // default module class that you need to inherit in components attached
  imports: [
    // CommonModule
  ],
  exports: [
    MatTabsModule,
    MatChipsModule,
    MatBadgeModule,
    MatTableModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSnackBarModule,
    TextFieldModule
  ]
})
export class AngularMaterialModule { }
