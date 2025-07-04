import { EventEmitter } from "./EventEmitter";
export declare class PropertyEventEmitter<T extends object> extends EventEmitter<T> {
    private parent;
    private key;
    value: any;
    constructor(parent: any, key: string, value: any);
    set: (value: any) => void;
    get: () => any;
}
