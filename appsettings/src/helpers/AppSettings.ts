import { TAppSettings, TEvent } from "@typings";
import { EventEmitter } from "./EventEmitter";
import { PropertyEventEmitter } from "./PropertyEventEmitter";

export class AppSettings<T extends object> extends EventEmitter<T> {
  constructor(private appSettings: T) {
    super();
    this.appSettings = appSettings;
    this.assignSettingsToThis(appSettings);
    this.load();
  }

  private assignSettingsToThis = (appSettings: T) => {
    for (const key in appSettings) {
      (this as any)[key] = new PropertyEventEmitter(this, key, appSettings[key]);
    }
  }

  public get<K extends keyof T>(key: K): T[K] {
    return this.appSettings[key];
  }

  public set = (key: string, value: any) => {
    localStorage.setItem(key, value);
    this.appSettings[key as keyof T] = value;
    
    // Update the property event emitter's internal value without calling its set method
    if ((this as any)[key] && (this as any)[key] instanceof PropertyEventEmitter) {
      (this as any)[key].value = value;
    }
    
    this.emit('change', this.appSettings);
  }

  public pick = (key: string) => localStorage.getItem(key);

  public delete = (key: keyof T) => {
    localStorage.removeItem(key as string);
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

  private setAppSettings = (appSettings: T | string | null) => this.appSettings = appSettings as T;

  private loadAppSettings = () => {
    let appSettings = localStorage.getItem('appSettings') as string | null | TAppSettings;

    if (appSettings) {
      const parsedSettings = this.parseAppSettings(appSettings as string);
      this.setAppSettings(parsedSettings);
      // Reassign property event emitters with loaded values
      this.assignSettingsToThis(parsedSettings);
    } else {
      this.setAppSettings(this.appSettings);
    }

    this.save();
  };

  public update = () => {
    // this.setAppSettings();
    this.save();
    this.emit('change', this.appSettings);
  }

  public save = () => {
    localStorage.setItem('appSettings', this.stringifyAppSettings());
    this.emit('change', this.appSettings);
  }

  public reset = () => {
    this.save();
    this.emit('change', this.appSettings);
  };

 /*  public override emit = (event: TEvent, ...args: any[]): void => {
    throw new Error('emit is protected to prevent unintetional usage.');
  } */
}
