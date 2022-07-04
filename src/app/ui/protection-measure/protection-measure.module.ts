import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StartRequestComponent} from './start-request/start-request.component';
import {ProtectionMeasureRoutingModule} from "./protection-measure-routing.module";

@NgModule({
  declarations: [
    StartRequestComponent
  ],
  imports: [
    CommonModule,
    ProtectionMeasureRoutingModule
  ]
})
export class ProtectionMeasureModule { }
