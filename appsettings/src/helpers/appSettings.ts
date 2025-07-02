import { TAppSettings } from "@typings";

export class AppSettings {
  private appSettings: TAppSettings;
  
  constructor(appSettings: TAppSettings) {
    this.appSettings = appSettings;
    // this.load();
  }

  public get = () => this.appSettings;

  public set = (key: string, value: any) => localStorage.setItem(key, value);
  
  public getSingle = (key: string) => localStorage.getItem(key);

  public delete = (key: string) => localStorage.removeItem(key);

  private parseAppSettings = ( appSettingsString: string ) => JSON.parse( appSettingsString );

  private stringifyAppSettings = () => JSON.stringify( this.appSettings );

  // public load = () => this.loadAppSettings();

/*   public reload = ( newAppSettings: TAppSettings ) => {
    const { setAppSettings } = appSettingsStore();
    this.appSettings = newAppSettings;
    setAppSettings( this.appSettings );
  } */

 /*  private setAppSettings = () => {
    const state = appSettingsStore.getState();
    this.appSettings = getAppSettingsSel(state);
  } */

/*   private loadAppSettings = () => {
    let appSettings = localStorage.getItem( 'appSettings' ) as string | null | TAppSettings;
    const { setAppSettings } = appSettingsStore.getState();

    if ( appSettings ) {
      appSettings = this.parseAppSettings( appSettings as string );
      this.appSettings = appSettings;
      setAppSettings( this.appSettings );
    } else {
      this.setAppSettings();
    }

    this.save();
  }; */

  public update = () => {
    // this.setAppSettings();
    this.save();
  }

  /* @ts-ignore */
  public save = () => localStorage.setItem( 'appSettings', this.stringifyAppSettings() );

  public reset = () => {
    this.save();
  };
}
