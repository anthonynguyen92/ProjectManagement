export class LiteEvent<T> {
    private handlers: { (data?: T): void }[] = [];
    on(handler: (data?: T) => void) {
      this.handlers.push(handler);
    }
    off(handler: (data?: T) => void) {
      this.handlers = this.handlers.filter(x => x !== handler);
    }
    trigger(data?: T) {
      this.handlers.slice().forEach(x => x(data));
    }
  
    expose(): LiteEvent<T> {
      return this;
    }
  }
  