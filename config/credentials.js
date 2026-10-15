module.exports = {
  database: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  },
  payment: {
    apiKey: process.env.PAYMENT_API_KEY
  },
  internalApi: {
    token: process.env.INTERNAL_API_TOKEN
  }
};