import { EventEmitter } from "./EventEmitter";
export declare class PropertyEventEmitter extends EventEmitter {
    private parent;
    private key;
    value: any;
    constructor(parent: any, key: string, value: any);
    set: (value: any) => void;
    get: () => any;
}
