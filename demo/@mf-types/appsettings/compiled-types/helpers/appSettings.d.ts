import { TAppSettings } from "@typings";
export declare class AppSettings {
    private appSettings;
    constructor(appSettings: TAppSettings);
    get: () => TAppSettings;
    set: (key: string, value: any) => void;
    getSingle: (key: string) => string | null;
    delete: (key: string) => void;
    on: (event: string, callback: (newAppSettings: TAppSettings) => void) => void;
    private parseAppSettings;
    private stringifyAppSettings;
    update: () => void;
    save: () => void;
    reset: () => void;
}
