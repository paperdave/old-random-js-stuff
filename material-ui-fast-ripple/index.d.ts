/** Options for patch() */
interface Options {
  DURATION: number;
  DELAY_RIPPLE: number;
}

/** Patches @material-ui/core/ButtonBase's ripple animation to be faster. */
export function patch(options: Options): undefined;
