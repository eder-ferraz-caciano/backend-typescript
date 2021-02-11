module.exports = {
   "type": process.env.DB_DIALECT,
   "host": process.env.DB_HOST,
   "username": process.env.DB_USERNAME,
   "password": process.env.DB_PASSWORD,
   "database": process.env.DB_DATABASE,
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/models/**/*.ts"
   ],
   "migrations": [
      "src/database/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/models",
      "migrationsDir": "src/database/migration",
      "subscribersDir": "src/subscriber"
   }
}
