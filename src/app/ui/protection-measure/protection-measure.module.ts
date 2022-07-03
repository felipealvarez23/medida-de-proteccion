import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartRequestComponent } from './start-request/start-request.component';
import {ProtectionMeasureRoutingModule} from "./protection-measure-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    StartRequestComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProtectionMeasureRoutingModule
  ]
})
export class ProtectionMeasureModule { }
