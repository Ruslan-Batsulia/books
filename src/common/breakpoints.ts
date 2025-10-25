export const breakpoints = {
  mobile: 375,
  tablet: 768,
  desktop: 1440,
};

export const media = {
  onlyMobile: `(max-width: ${breakpoints.tablet - 0.1}px)`,
  onlyTablet: `(min-width: ${breakpoints.tablet}px) and (max-width: ${breakpoints.desktop - 0.1}px)`,
  desktop: `(min-width: ${breakpoints.desktop}px)`,
};
