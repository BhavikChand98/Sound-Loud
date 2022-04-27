Model Generates:
---------------
npx sequelize model:generate --name Song --attributes userId:integer,url:string,title:string
npx sequelize model:generate --name Comment --attributes userId:integer,songId:integer,body:string

npx dotenv sequelize db:migrate
npx dotenv sequelize db:migrate:undo
---------------


Example:
ctrl + f ===> npx sequelize seed:generate --name demo-user
MANUALLY Create the seed data

Seed Generates:
--------------
npx sequelize seed:generate --name song
npx sequelize seed:generate --name comment

npx dotenv sequelize db:seed:all
npx dotenv sequelize db:seed:undo
npx dotenv sequelize db:seed:undo:all
--------------
