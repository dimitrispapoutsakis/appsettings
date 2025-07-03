import './index.css';
import { AppSettings } from 'appsettings';

interface IAppSettings {
  uiTheme: string;
  locale: string;
}

const appSettings = new AppSettings({
  uiTheme: 'light',
  locale: 'en-US',
});

appSettings.on('change', (newAppSettings: IAppSettings) => {
  console.warn('on change', newAppSettings);
});

appSettings.locale.on('change', (newLocale: IAppSettings) => {
  console.warn('on change', newLocale);
});

console.log(appSettings.uiTheme);

const rootEl = document.querySelector('#root');
if (rootEl) {
  rootEl.innerHTML = `
  <div class="content">
    <h1>Vanilla Rsbuild</h1>
    <p>Start building amazing things with Rsbuild.</p>
    <button id="darkBtn">Switch To Dark Theme ( AppSettings.on )</button>
    <button id="lightBtn">Switch To Light Theme ( AppSettings.on )</button>
    <button id="localeBtn">Switch To Greek Locale ( appSettings.locale.on )</button>
  </div>
`;

  document.getElementById('darkBtn')?.addEventListener('click', () => {
    appSettings.set('uiTheme', 'dark');
  });

  document.getElementById('lightBtn')?.addEventListener('click', () => {
    appSettings.set('uiTheme', 'light');
  });

  document.getElementById('localeBtn')?.addEventListener('click', () => {
    appSettings.locale.set('gr-EL');
  });
}

