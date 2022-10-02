import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProtectionMeasureService} from "../../../core/services/api/protection-measure/protection-measure.service";
import {ProtectionMeasurePayload} from "../../../core/model/interface/protection-measure.interface";
import {finalize} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './start-request.component.html',
  styleUrls: ['./start-request.component.css']
})
export class StartRequestComponent implements OnInit {

  startRequestForm: FormGroup;
  loadingFlag = false;

  constructor(
    private fb: FormBuilder,
    private proMeasureService: ProtectionMeasureService
  ) {
    this.startRequestForm = new FormGroup({});
  }

  ngOnInit(): void {
    this.buildStartRequestForm();
  }

  continue() {
    this.loadingFlag = true;
    const payload = this.buildProMeasurePayload();
    this.proMeasureService.startRequest(payload)
      .pipe(finalize(() => this.loadingFlag = false))
      .subscribe(console.log);
  }

  private buildProMeasurePayload(): ProtectionMeasurePayload {
    return {
      data: {
        type: this.startRequestForm.get('type')?.value,
        contactInfo: this.startRequestForm.get('contactInfo')?.value
      }
    }
  }

  private buildStartRequestForm() {
    this.startRequestForm = this.fb.group({
      type: ['', [Validators.required]],
      contactInfo: ['', [
        Validators.required,
        Validators.email
      ]]
    });
  }

}
