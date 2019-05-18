import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import SvgIcon from '@material-ui/core/SvgIcon';
import withStyles from '@material-ui/core/styles/withStyles';

// This component has a lot of workarounds, since css clip-path is not supported on
// all browsers.

export const styles = theme => ({
  root: {
    position: 'relative',
    width: '24px',
    height: '24px',
  },
  check: {
    fill: theme.palette.background.default,
  },
  checkClip: {
    transition: [
      theme.transitions.create('width', {
        duration: 0,
        delay: 50,
      }),
      theme.transitions.create('opacity', {
        easing: 'linear',
        duration: 50,
      }),
    ],
    opacity: 0,
  },
  checkClipChecked: {
    transition: theme.transitions.create('width', {
      delay: 50,
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.shortest,
    }),
  },
  rectClip: {
    willChange: 'x,y,width,height',
    transition: ['x', 'y', 'width', 'height'].map(prop => {
      return theme.transitions.create(prop, {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.shortest,
      });
    }),
  },
  rectClipChecked: {
    willChange: 'x,y,width,height',
    transition: ['x', 'y', 'width', 'height'].map(prop => {
      return theme.transitions.create(prop, {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shortest,
      });
    }),
  },
});

const generateID = () => `id${Math.random()}${Math.random()}`;

/**
 * @ignore - internal component.
 */
function CheckboxButtonIcon(props) {
  const { checked, classes, className, ...other } = props;

  // Workaround: Generating unique ids, since if they are reused it will cause problems
  const idCheckClip = React.useMemo(generateID, []);
  const idBoxClip = React.useMemo(generateID, []);

  // Workaround: Using a inlined SVG icon here, just makes it easier to deal with
  return (
    <SvgIcon viewBox="0 0 24 24" width="24px" {...other}>
      <clipPath id={idBoxClip}>
        <rect
          className={clsx(classes.rectClip, checked && classes.rectClipChecked)}
          width={checked ? '12' : '5'}
          height="24"
        />
        <rect
          className={clsx(classes.rectClip, checked && classes.rectClipChecked)}
          width="24"
          height={checked ? '12' : '5'}
        />
        <rect
          className={clsx(classes.rectClip, checked && classes.rectClipChecked)}
          x={checked ? '12' : '19'}
          width={checked ? '12' : '5'}
          height="24"
        />
        <rect
          className={clsx(classes.rectClip, checked && classes.rectClipChecked)}
          y={checked ? '12' : '19'}
          width="24"
          height={checked ? '12' : '5'}
        />
      </clipPath>
      <clipPath id={idCheckClip}>
        <rect
          className={clsx(classes.checkClip, checked && classes.checkClipChecked)}
          x="5"
          height="24"
          width={checked ? '14' : '0'}
        />
      </clipPath>
      <path
        d="M5 3H19C20.11 3 21 3.9 21 5V19C21 20.1 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.9 3.89 3 5 3Z"
        clipPath={`url(#${idBoxClip})`}
      />
      <path
        className={classes.check}
        d="M5 12L10 17L19 8L17.59 6.58L10 14.17L6.41 10.59L5 12Z"
        clipPath={`url(#${idCheckClip})`}
      />
      ,
    </SvgIcon>
  );
}

CheckboxButtonIcon.propTypes = {
  /**
   * If `true`, the component is checked.
   */
  checked: PropTypes.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
};

export default withStyles(styles, { name: 'UnstableCheckboxIcon' })(CheckboxButtonIcon);
