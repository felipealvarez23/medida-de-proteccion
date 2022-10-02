import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProtectionMeasurePayload} from "../../../model/interface/protection-measure.interface";

@Injectable({
  providedIn: 'root'
})
export class ProtectionMeasureService {

  url = "http://localhost:8080/medida-de-proteccion/api/v1/";

  constructor(private httpClient: HttpClient) { }

  startRequest(payload: ProtectionMeasurePayload): Observable<any>{
    return this.httpClient.post(this.url + 'start-request', payload);
  }

}
