import { TEvent } from "@typings";
export declare class EventEmitter<T extends object> {
    private events;
    on(event: TEvent, callback: (appSettings: T) => void): void;
    off(event: TEvent, callback: Function): void;
    protected emit(event: TEvent, ...args: any[]): void;
}
