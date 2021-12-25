export default () => ({
  environment: process.env.NODE_ENV === 'development',
  database: {
    host: process.env.NODE_HOST,
    port: parseInt(process.env.NODE_PORT, 10) || 5432,
  },
});
