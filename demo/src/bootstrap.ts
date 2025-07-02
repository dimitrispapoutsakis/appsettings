import './index.css';
import { AppSettings } from 'appsettings';

const appSettings = new AppSettings({
  uiTheme: 'light',
  locale: 'en-US',
});


console.log(appSettings.get());
/* appSettings.on('change', (newAppSettings) => {
  console.log(newAppSettings);
}); */

const rootEl = document.querySelector('#root');
if (rootEl) {
  rootEl.innerHTML = `
  <div class="content">
    <h1>Vanilla Rsbuild</h1>
    <p>Start building amazing things with Rsbuild.</p>
  </div>
`;
}

