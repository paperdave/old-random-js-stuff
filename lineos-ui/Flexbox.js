// LineOS Simulation: UI Kit: Template Component
// Dave Caruso <davecode.me>
//
import React from 'react';
import injectSheet from 'react-jss';
import clsx from 'clsx';

const styles = {
  root: {
    display: 'flex',
  },
  padding: {
    padding: 10,
  },
  vertical: {
    flexDirection: 'column',
  },
  reverseVertical: {
    flexDirection: 'column-reverse',
  },
  reverse: {
    flexDirection: 'row-reverse',
  },
  grow: {
    flexGrow: '1',
  },
  shrink: {
    flexShrink: '1',
  },
  scrollY: {
    overflowY: 'auto',
  },
  scrollX: {
    overflowX: 'auto',
  },
  align_start: { justifyContent: 'flex-start' },
  align_center: { justifyContent: 'center' },
  align_end: { justifyContent: 'flex-end' },
  'align_space-around': { justifyContent: 'space-around' },
  'align_space-between': { justifyContent: 'space-between' },
  'align_space-evenly': { justifyContent: 'space-evenly' },
  height100: {
    height: '100%',
  }
};

const alignMap = {
  left: 'start',
  top: 'start',
  bottom: 'end',
  right: 'end',
  middle: 'center',
};
const reverseAlignMap = {
  start: 'end',
  center: 'center',
  end: 'start',
};

function Flexbox({
  classes: c,
  className,
  component,
  style,

  padding,
  vertical,
  align,
  reverse,
  paragraph,
  grow,
  shrink,
  size,
  height100,
  scrollY,
  scrollX,

  ...props
}) {
  const Comp = component || 'div';

  const realAlign = reverse
    ? (reverseAlignMap[alignMap[align]] || align)
    : (alignMap[align] || align);

  return <Comp
    className={
      clsx(
        c.root,
        vertical && !reverse && c.vertical,
        !vertical && reverse && c.reverse,
        vertical && reverse && c.reverseVertical,
        padding && c.padding,
        scrollX && c.scrollX,
        scrollY && c.scrollY,
        grow && c.grow,
        shrink && c.shrink,
        height100 && c.height100,
        align && c['align_' + realAlign],
        className,
      )
    }
    style={{ ...style, flexBasis: size }}
    {...props}
  />;
}

export default injectSheet(styles)(Flexbox);
