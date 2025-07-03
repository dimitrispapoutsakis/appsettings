import { TEvent } from "@typings";

export class EventEmitter<T extends object> {
  private events: Record<string, Function[]> = {};

  public on(event: TEvent, callback: (appSettings: T) => void): void {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  public off(event: TEvent, callback: Function): void {
    if (!this.events[event]) return;
    
    const index = this.events[event].indexOf(callback);
    if (index > -1) {
      this.events[event].splice(index, 1);
    }
  }

  protected emit(event: TEvent, ...args: any[]): void {
    // Simple stack trace detection
    const stack = new Error().stack || '';
    const callerLine = stack.split('\n')[2] || '';
    
    // Check if called from outside our class hierarchy
    const isExternalCall = !callerLine.includes('EventEmitter') && 
                          !callerLine.includes('AppSettings') && 
                          !callerLine.includes('PropertyEventEmitter');
    
    if (isExternalCall) {
      throw new Error('emit is protected to prevent unintetional usage.');
    }
    
    if (!this.events[event]) return;
    
    this.events[event].forEach(callback => {
      callback(...args);
    });
  }
}
