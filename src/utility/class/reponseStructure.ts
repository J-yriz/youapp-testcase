export class ResponseStructure {
  statusCode: number;
  message: string;
  data: unknown;
  error: string | null;

  constructor({
    statusCode,
    message,
    data,
    error,
  }: {
    statusCode: number;
    message: string;
    data: unknown;
    error: string | null;
  }) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.error = error;
  }
}
