import './index.css';
import { AppSettings } from 'appsettings';

const appSettings = new AppSettings({
  hasAppSettingsLoaded: false,
  user: {
    id: 1,
    name: 'John Doe',
  },
  hashcode: '1234567890',
  uiTheme: 'light',
  locale: 'en-US',
});

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

