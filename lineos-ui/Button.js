// LineOS Simulation: UI Kit: Button
// Dave Caruso <davecode.me>
//
import React from 'react';
import injectSheet from 'react-jss';
import clsx from 'clsx';
import Reset from './Reset';

const styles = {
  root: {
    border: '1px solid black',
    background: 'white',
    color: 'black',
    transition: 'background 200ms',
    alignSelf: 'flex-start',
    '&:focus': {
      outline: 'none',
      background: '#CCC',
    },
    '&:active': {
      background: '#AAA',
      transition: 'none',
    },
    padding: '1px 6px',
    marginRight: 3,
    marginLeft: 3,
    display: 'inline-block',
    fontSize: '13.3333px',
  },
  fullWidth: {
    display: 'block',
    alignSelf: 'stretch',
    width: '100%',
  }
};

function Button({ classes: c, className, component, fullWidth, ...props }) {
  return <Reset
    component={component || 'button'}
    className={clsx(c.root, fullWidth && c.fullWidth, className)}
    {...props}
  />;
}

export default injectSheet(styles)(Button);
