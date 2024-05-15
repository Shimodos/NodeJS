export class HttpError extends Error {
  status: number;
  context?: string;
  constructor(status: number, message: string, context?: string) {
    super(message);
    this.status = status;
    this.context = context;
    this.context = context;
  }
}
