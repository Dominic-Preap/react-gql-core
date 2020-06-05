import { withA11y } from '@storybook/addon-a11y';
import { addDecorator, addParameters } from '@storybook/react';

addDecorator(withA11y);
addParameters({
  docs: {
    inlineStories: false
  }
});
