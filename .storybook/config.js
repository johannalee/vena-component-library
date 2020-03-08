import { configure, addDecorator, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';

import { withA11y } from '@storybook/addon-a11y';

// automatically import all files ending in *.stories.js
const req = require.context("../src", true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// Theme
const theme = create({
  base: "light",
  brandTitle: "Kardia by Vena",
  brandImage: "/kardia-banner.png" 
});

// Parameters
addParameters({
  options: {
    theme
  }
})

// Decorators
addDecorator(withA11y);

configure(loadStories, module);
