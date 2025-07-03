import { TEvent } from "@typings";
export declare class EventEmitter {
    private events;
    on(event: TEvent, callback: Function): void;
    off(event: TEvent, callback: Function): void;
    protected emit(event: TEvent, ...args: any[]): void;
}
