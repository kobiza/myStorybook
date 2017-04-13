import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import DivWithText from '../components/DivWithText';
import Button from '../components/Button';
import Welcome from '../components/Welcome';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));

storiesOf('Div with text', module)
  .add('with short text', () => (
    <DivWithText text={'short text'}/>
  ));
