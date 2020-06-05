import { action } from '@storybook/addon-actions';
import { radios, text } from '@storybook/addon-knobs';
import * as React from 'react';

import { Button } from './Button';

export default {
  title: 'Components/Button',
};

const label = 'Color';
const options = {
  Primary: 'primary',
  Secondary: 'secondary',
};
const defaultValue = 'primary';

export const withButton = () => (
  <Button
    color={radios(label, options, defaultValue) as any}
    onClick={action('FlatButtonClick')}
  >
    {text('Text', 'Click Me')}
  </Button>
);
