import { useLayoutEffect, useState } from 'react';
import jss from 'jss'

let cache = [];

export default function useStyles(styles, { name = 'Component', ...options }) {
  const sheet = useState(() => {
    const find = cache.find(item => item[0] === styles);
    if(find) return find[1];

    const sheet = jss.createStyleSheet(styles(), { classNamePrefix: name + '-', ...options})
    cache.push([styles, sheet]);
    return sheet;
  })[0];
  useLayoutEffect(() => {
    // Mount
    sheet.attach();
    
    return () => {
      // Un-mount
      sheet.detach();
    };
  });
  return sheet.classes;
}
