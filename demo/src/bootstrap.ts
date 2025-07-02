import './index.css';
import { squared } from 'appsettings';

console.log(squared(2))

const rootEl = document.querySelector('#root');
if (rootEl) {
  rootEl.innerHTML = `
  <div class="content">
    <h1>Vanilla Rsbuild</h1>
    <p>Start building amazing things with Rsbuild.</p>
  </div>
`;
}

