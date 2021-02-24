module.exports = {
   "type": process.env.DB_DIALECT,
   "host": process.env.DB_HOST,
   "username": process.env.DB_USERNAME,
   "password": process.env.DB_PASSWORD,
   "database": process.env.DB_DATABASE,
   "synchronize": true,
   "logging": false,
   "entities": [
      process.env.APP_MODE === 'dev' ? "build/src/models/**/*.js" : "src/models/**/*.ts"
   ],
   "migrations": [
      process.env.APP_MODE === 'dev' ? "build/src/database/migration/**/*.js" : "src/database/migration/**/*.ts"
   ],
   "subscribers": [
      process.env.APP_MODE === 'dev' ? "build/src/subscriber/**/*.js" : "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/models",
      "migrationsDir": "src/database/migration",
      "subscribersDir": "src/subscriber"
   }
}
