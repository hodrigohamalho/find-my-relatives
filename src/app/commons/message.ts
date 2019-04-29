export enum MessageCategory {
  INFO, WARN, ERROR, FATAL
}

export class Message {
  constructor(
    public messageCategory: MessageCategory,
    public code: string,
    public text: string,
    public detail: string,
    public stackTrace: string
  ) { }
}
