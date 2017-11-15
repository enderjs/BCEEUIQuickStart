import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatRadioModule,
  MatSelectModule, MatSliderModule, MatSlideToggleModule, MatMenuModule, MatSidenavModule, MatToolbarModule, MatListModule,
  MatGridListModule, MatStepperModule, MatTabsModule, MatExpansionModule, MatButtonToggleModule, MatChipsModule, MatIconModule,
  MatProgressSpinnerModule, MatProgressBarModule, MatDialogModule, MatTooltipModule, MatSnackBarModule, MatTableModule, MatPaginatorModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatRadioModule,
    MatSelectModule, MatSliderModule, MatSlideToggleModule, MatMenuModule, MatSidenavModule, MatToolbarModule, MatListModule,
    MatGridListModule, MatStepperModule, MatTabsModule, MatExpansionModule, MatButtonToggleModule, MatChipsModule, MatIconModule,
    MatProgressSpinnerModule, MatProgressBarModule, MatDialogModule, MatTooltipModule, MatSnackBarModule, MatTableModule, MatPaginatorModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatRadioModule,
    MatSelectModule, MatSliderModule, MatSlideToggleModule, MatMenuModule, MatSidenavModule, MatToolbarModule, MatListModule,
    MatGridListModule, MatStepperModule, MatTabsModule, MatExpansionModule, MatButtonToggleModule, MatChipsModule, MatIconModule,
    MatProgressSpinnerModule, MatProgressBarModule, MatDialogModule, MatTooltipModule, MatSnackBarModule, MatTableModule, MatPaginatorModule
  ],
  declarations: []
})
export class SharedModule { }
