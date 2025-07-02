import { TAppSettings } from "@typings";
import { EventEmitter } from "./EventEmitter";

export class AppSettings extends EventEmitter {
  private appSettings: TAppSettings;

  constructor(appSettings: TAppSettings) {
    super();
    this.appSettings = appSettings;
    this.load();
  }

  public get = () => this.appSettings;

  public set = (key: string, value: any) => {
    localStorage.setItem(key, value);
    this.appSettings[key] = value;
    this.emit('change', this.appSettings);
  }

  public getSingle = (key: string) => localStorage.getItem(key);

  public delete = (key: string) => {
    localStorage.removeItem(key);
    delete this.appSettings[key];
    this.emit('change', this.appSettings);
  }

  private parseAppSettings = (appSettingsString: string) => JSON.parse(appSettingsString);

  private stringifyAppSettings = () => JSON.stringify(this.appSettings);

  public load = () => this.loadAppSettings();

  /*   public reload = ( newAppSettings: TAppSettings ) => {
      const { setAppSettings } = appSettingsStore();
      this.appSettings = newAppSettings;
      setAppSettings( this.appSettings );
    } */

  private setAppSettings = (appSettings: TAppSettings | string | null) => this.appSettings = appSettings as TAppSettings;

  private loadAppSettings = () => {
    let appSettings = localStorage.getItem('appSettings') as string | null | TAppSettings;

    if (appSettings) {
      appSettings = this.parseAppSettings(appSettings as string);
      this.setAppSettings(appSettings);
    } else {
      this.setAppSettings(appSettings);
    }

    this.save();
  };

  public update = () => {
    // this.setAppSettings();
    this.save();
    this.emit('change', this.appSettings);
  }

  /* @ts-ignore */
  public save = () => {
    localStorage.setItem('appSettings', this.stringifyAppSettings());
    this.emit('change', this.appSettings);
  }

  public reset = () => {
    this.save();
    this.emit('change', this.appSettings);
  };
}
