export default () => ({
  environment: process.env.NODE_ENV || `development`,
  redis: {
    url: process.env.REDIS_URL,
  },
});
