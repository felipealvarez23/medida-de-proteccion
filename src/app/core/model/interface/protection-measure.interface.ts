export interface ProtectionMeasurePayload {
  data: ProtectionMeasureData;
}

export interface ProtectionMeasureData {
  type: string;
  documentType: string;
  documentNumber: string;
}
