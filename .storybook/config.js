import { configure } from '@storybook/react';

import "../bootstrap-grid.css";
import "../bootstrap-reboot.min.css";
import "../bootstrap.css";
import "../main.css";

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
