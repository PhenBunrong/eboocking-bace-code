const pathRewrite = process.env.API_PREFIX as string


console.warn(pathRewrite)

export const proxy = {
  [pathRewrite]: {
    target: process.env.API_URL,
    pathRewrite: {
      [`^${pathRewrite}`]: pathRewrite, // '' for static site
    },
    ws: true,
  },
}
