// Uncomment this block to use sqlite
module.exports = {
    dialect: "sqlite",
    storage: "./my-db.sqlite",
}

// Uncomment this block to use mysql
/*module.exports = {
    hostname: "",
    username: "",
    password: "",
    database: "",
    port: 3306
}*/

// TODO : adapt this file to load parameters from environment variables (process.env.VARIABLE_NAME)
//
// module.exports = {
//     hostname: process.env.MYSQL_HOST,
//     username: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD,
//     database: process.env.MYSQL_DATABASE,
//     port: process.env.MYSQL_PORT
// }