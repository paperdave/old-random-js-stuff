// LineOS Simulation: UI Kit: Divider
// Dave Caruso <davecode.me>
//
import React from 'react';
import injectSheet from 'react-jss';
import clsx from 'clsx';

const styles = {
  root: {
    background: 'black',
    flex: '0 0 1px',
  },
};

function Divider({ classes: c, className, component, ...props }) {
  const Comp = component || 'div';
  return <Comp className={clsx(c.root, className)} {...props} />;
}

export default injectSheet(styles)(Divider);
