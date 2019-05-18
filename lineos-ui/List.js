// LineOS Simulation: UI Kit: List
// Dave Caruso <davecode.me>
//
import React from 'react';
import injectSheet from 'react-jss';
import clsx from 'clsx';

const styles = {
  root: {
    flex: 1
  },
  scrollY: { overflowY: 'auto' },
  scrollX: { overflowX: 'auto' },
};

function Template({ classes: c, className, component, scrollY, scrollX, ...props }) {
  const Comp = component || 'div';
  return <Comp className={
    clsx(
      c.root,
      scrollX && c.scrollX,
      scrollY && c.scrollY,
      className,
    )
  } {...props} />;
}

export default injectSheet(styles)(Template);
