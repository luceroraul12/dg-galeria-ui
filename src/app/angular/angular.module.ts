import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {PlatformModule} from '@angular/cdk/platform'; 
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatListModule} from '@angular/material/list'; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatToolbarModule,
    PlatformModule,
    MatTabsModule,
    MatListModule
  ]
})
export class AngularModule { }
