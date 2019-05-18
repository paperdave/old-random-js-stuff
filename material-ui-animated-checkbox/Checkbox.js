import React from 'react';
import MUICheckbox from '@material-ui/core/Checkbox';
import CheckboxIcon from './CheckboxIcon';

const icon = <CheckboxIcon />;
const checkedIcon = <CheckboxIcon checked />;

function Checkbox(props) {
  return <MUICheckbox icon={icon} checkedIcon={checkedIcon} {...props} />
}

export default Checkbox;
