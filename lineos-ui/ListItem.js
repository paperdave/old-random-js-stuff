// LineOS Simulation: UI Kit: List Item Component
// Dave Caruso <davecode.me>
//
import React from 'react';
import injectSheet from 'react-jss';
import clsx from 'clsx';
import Reset from './Reset';

const styles = {
  root: {
    height: '25px',
    lineHeight: '25px',
    textIndent: '10px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  button: {
    '&:hover': {
      background: 'rgba(0,0,0,0.1)',
    },
    '&:active': {
      background: 'rgba(0,0,0,0.2)',
    },
  },
  selected: {
    background: 'rgba(0,0,0,0.1)',
  }
};

function ListItem({ classes: c, className, component, button, selected, ...props }) {
  return <Reset
    component={component || 'div'}
    className={
      clsx(
        c.root,
        button && c.button,
        selected && c.selected,
        className
      )
    }
    {...props}
  />;
}

export default injectSheet(styles)(ListItem);
