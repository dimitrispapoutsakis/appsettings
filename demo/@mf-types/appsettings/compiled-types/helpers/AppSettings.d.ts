import { EventEmitter } from "./EventEmitter";
export declare class AppSettings<T extends object> extends EventEmitter<T> {
    private appSettings;
    private _onLoad;
    constructor(appSettings: T);
    onLoad: (onLoad: (appSettings: T) => void) => void;
    private assignSettingsToThis;
    get<K extends keyof T>(key: K): T[K];
    set: (key: string, value: any) => void;
    pick: (key: string) => string | null;
    delete: (key: keyof T) => void;
    private parseAppSettings;
    private stringifyAppSettings;
    private setAppSettings;
    private load;
    update: () => void;
    save: () => void;
    reset: () => void;
}
