import { addParameters, configure, addDecorator } from '@storybook/react';
import { withInfo } from  '@storybook/addon-info';
import crfTheme from './crfTheme';

import "../bootstrap-grid.css";
import "../bootstrap-reboot.min.css";
import "../bootstrap.css";
import "../main.css";

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addParameters({
  options: {
    theme: crfTheme
  }
});

addDecorator(withInfo({
  inline: true
}));

configure(loadStories, module);
