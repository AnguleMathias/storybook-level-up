import { addParameters, configure } from '@storybook/react';
import crfTheme from './crfTheme';

import "../bootstrap-grid.css";
import "../bootstrap-reboot.min.css";
import "../bootstrap.css";
import "../main.css";

addParameters({
  options: {
    theme: crfTheme
  }
});
// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
