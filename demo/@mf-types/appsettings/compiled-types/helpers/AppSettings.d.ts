import { TAppSettings } from "@typings";
import { EventEmitter } from "./EventEmitter";
export declare class AppSettings extends EventEmitter {
    private appSettings;
    constructor(appSettings: TAppSettings);
    private assignSettingsToThis;
    get: () => TAppSettings;
    set: (key: string, value: any) => void;
    pick: (key: string) => string | null;
    delete: (key: string) => void;
    private parseAppSettings;
    private stringifyAppSettings;
    load: () => void;
    private setAppSettings;
    private loadAppSettings;
    update: () => void;
    save: () => void;
    reset: () => void;
}
