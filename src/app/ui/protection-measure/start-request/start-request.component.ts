import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './start-request.component.html',
  styleUrls: ['./start-request.component.css']
})
export class StartRequestComponent implements OnInit {

  startRequestForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.startRequestForm = this.fb.group({
      type: ['', [Validators.required]],
      documentNumber: [ '', [
        Validators.required,
        Validators.pattern('[0-9]+'),
        Validators.minLength(4),
        Validators.maxLength(20)
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]]
    });
  }

  ngOnInit(): void {}

}
