// LineOS Simulation: UI Kit: Button
// Dave Caruso <davecode.me>
//
import React from 'react';
import injectSheet from 'react-jss';
import clsx from 'clsx';

const styles = {
  root: {
    margin: 0,
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  },
  paragraph: {
    marginBottom: 16,
  },
  noWrap: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  vbody: {
    fontSize: '16px',
    fontWeight: 'normal',
  },
  vh1: {
    fontSize: '32px',
    fontWeight: 'bold',
  },
  vh2: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  vh3: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  vbold: {
    fontWeight: 'bold',
  },
};

const defaultComp = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  body: 'p',
  bold: 'p',
}

function Text({ classes: c, className, variant="body", component, paragraph, noWrap, ...props }) {
  const Comp = component || defaultComp[variant] || 'div';

  return <Comp
    className={
      clsx(
        c.root,
        paragraph && c.paragraph,
        c['v' + variant],
        noWrap && c.noWrap,
        className,
      )
    }
    {...props}
  />;
}

export default injectSheet(styles)(Text);
