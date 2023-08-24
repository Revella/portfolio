const calcRem = (size) => `${size / 16}rem`

const colors = {
  pastel: `#FB7D79`,
  or: `#FB9D7E`,
  ye: `#F8CD9E`,
  dark: "#1E1E1E",
  light: `#FEFEFE`
}

const fontSize = {
  small: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(24),
  xxxl: calcRem(36),
  titleSize: calcRem(64),
}

const theme = {
  fontSize,
  colors,
};

export default theme;