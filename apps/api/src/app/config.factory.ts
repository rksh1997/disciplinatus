export const configFactory = () => ({
  port: parseInt(process.env.PORT, 10) || 7000,
  database: {
    url: process.env.DATABASE_URL || 'mongodb://localhost:27017/disciplinatus',
    name: process.env.DATABASE_NAME || 'disciplinatus',
  },
});
