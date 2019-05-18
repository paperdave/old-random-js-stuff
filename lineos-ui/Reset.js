// LineOS Simulation: UI Kit: Template Component
// Dave Caruso <davecode.me>
//
import React from 'react';
import injectSheet from 'react-jss';
import clsx from 'clsx';

const styles = {
  root: {
    color: 'inherit',
    textDecoration: 'inherit',
    display: 'block',
    cursor: 'default'
  },
};

function Reset({ classes: c, className, component, ...props }) {
  const Comp = component || 'div';
  return <Comp className={clsx(c.root, className)} {...props} />;
}

export default injectSheet(styles)(Reset);
