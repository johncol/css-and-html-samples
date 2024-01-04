export const BREAKPOINTS = {
  mobile: 600,
  tablet: 1000,
  desktop: 1400,
  large: 1800,
};

export const QUERIES = {
  mobile: `@media (max-width: ${BREAKPOINTS.mobile}px)`,
  tablet: `@media (min-width: ${BREAKPOINTS.mobile + 1}px) and (max-width: ${BREAKPOINTS.tablet}px)`,
  desktop: `@media (min-width: ${BREAKPOINTS.tablet + 1}px) and (max-width: ${BREAKPOINTS.desktop}px)`,
  large: `@media (min-width: ${BREAKPOINTS.desktop + 1}px) and (max-width: ${BREAKPOINTS.large}px)`,
  xlarge: `@media (min-width: ${BREAKPOINTS.large + 1}px)`,

  tabletAndBelow: `@media (max-width: ${BREAKPOINTS.tablet}px)`,
  desktopAndBelow: `@media (max-width: ${BREAKPOINTS.desktop}px)`,
  largeAndBelow: `@media (max-width: ${BREAKPOINTS.large}px)`,

  mobileAndAbove: `@media (min-width: ${BREAKPOINTS.mobile}px)`,
  tabletAndAbove: `@media (min-width: ${BREAKPOINTS.tablet}px)`,
  desktopAndAbove: `@media (min-width: ${BREAKPOINTS.desktop}px)`,
  largeAndAbove: `@media (min-width: ${BREAKPOINTS.large}px)`,
};

export const Article = styled.article`
  display: flex;
  flex-direction: column;

  ${QUERIES.mobileAndAbove} {
    flex-direction: row;
  }
;`
