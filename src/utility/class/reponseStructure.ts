export class ResponseStructure {
  statusCode: number;
  message: string;
  data: any;
  error: any;

  constructor({ statusCode, message, data, error }: { statusCode: number; message: string; data: any; error: string | null }) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.error = error;
  }
}
