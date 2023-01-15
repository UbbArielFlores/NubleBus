import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerRecorridosPageRoutingModule } from './ver-recorridos-routing.module';

import { VerRecorridosPage } from './ver-recorridos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerRecorridosPageRoutingModule
  ],
  declarations: [VerRecorridosPage]
})
export class VerRecorridosPageModule {}
