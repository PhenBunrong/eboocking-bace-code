const prefix = process.env.API_PREFIX

export const privateRuntimeConfig = {
  // axios: { baseURL: apiUrl }, // USE THIS IF STATIC SITE
  axios: {
    baseURL: `${process.env.API_URL}${prefix || '/'}`,
  },
}
