import { css } from "styled-components";

const size = {
  mobile: "428",
  tablet: "1024",
  laptop: "1440",
  desktop: "1920",
};

export default Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
  @media screen and (max-width: ${size[label]}px) {
    ${css(...args)};
  }
  `;
  return acc;
}, {});