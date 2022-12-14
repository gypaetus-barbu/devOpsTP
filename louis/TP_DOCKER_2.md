# 1. Récupérer le code source du TP sur moodle et mettez le dans le dossier précédemment crée

# 2. Créer un Dockerfile qui permet de lancer une application NodeJS (v18-alpine)

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
```

puis lancer la commande `docker build -t tp-docker-2 .` pour construire l'image.

# 3. Utilisez docker pour lancer une image de base de données (mariadb)

```bash
docker run -d --name mariadb -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=tp_docker -e MYSQL_USER=tp_docker -e MYSQL_PASSWORD=tp_docker -p 3306:3306 mariadb:latest
```

# 4. Adapter le fichiers models/index.js et le db.config. js pour utiliser une base mysql plutôt que sqlite3 Rebuildez votre image docker et relancez un container, vérifiez que vous arrivez à utiliser l'app

pour cela j'ajoute et je commante les lignes suivantes dans le fichier `models/index.js`:

```js
// Uncomment this block to use sqlite
// module.exports = {
//     dialect: "sqlite",
//     storage: "./my-db.sqlite",
// }

module.exports = {
    hostname: process.env.MYSQL_HOST,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT
}
```

ensuite je modifie les parametres de connexion dans le fichier `models/index.js`:


```js
// Uncomment this block to use Sqlite, don't forget to adapt db.config.js
// const instance = new Sequelize({
//     dialect: dbConfig.dialect,
//     storage: dbConfig.storage
// });

// Uncomment this block to use Mysql, don't forget to adapt db.config.js
const instance = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
        host: dbConfig.hostname,
        port: dbConfig.port,
        dialect: "mysql"
});
```

et enfin pour rebuild l'image docker je lance la commande `docker build -t tp-docker-2 .`

# 5. Créer un docker-compose.yml pour avoir 2 services (node et db) node doit se baser sur le build (votre Dockerfile) db doit se baser sur une image mariadb

pour cela je crée le fichier `docker-compose.yml`:

```yml
version: "3.8"

services:
  db:
    image: mariadb:10.5
    container_name: db
    restart: always
    env_file:
      - .env
  api:
    ## build: ./app
    build: ./app
    container_name: api
    restart: always
    ports:
      - "3000:3000"
    env_file:
      - .env
```
la section `env_file` permet de charger les variables d'environnement depuis un fichier `.env` qui contient les informations de connexion à la base de données:

```bash
MYSQL_ROOT_PASSWORD=123456
MYSQL_DATABASE=best_api
MYSQL_USER=best_api
MYSQL_PASSWORD=123456
MYSQL_ROOT_HOST=%
MYSQL_PORT=3306
MYSQL_HOST=db
```

# 6. Faire les adaptations nécessaires au docker-compose pour que votre app puisse utiliser votre base de données conteneurisée

```yml
version: "3.8"

services:
  db:
    image: mariadb:10.5
    container_name: db
    restart: always
    env_file:
      - .env
  api:
    ## build: ./app
    build: ./app
    container_name: api
    restart: always
    ports:
      - "3000:3000"
    env_file:
      - .env
    links:
      - db
    depends_on:
      - db
```

je fait un liens entre les deux services avec la ligne `links` et je precise que le service `api` depend du service `db` avec la ligne `depends_on` de se fait le service `db` sera lancé avant le service `api`


# Questions:
## Q1: que se passe t'il si un de mes ports publiés est déjà utilisé?

sur docker si un port est deja utilisé le service ne sera pas lancé et un message d'erreur sera affiché

```bash
d77e0e53d5f0df4cc6738256d87b0fef06db668f562bd4297769bffe8fb59ad5
docker: Error response from daemon: driver failed programming external connectivity on endpoint adoring_goldberg (e79490adf94bba4c03ca6fb8fcf385d6359543be7b9d2be92358e801641e903d): Bind for 0.0.0.0:80 failed: port is already allocated
```

## Q2: quelle option de la commande npm install permet de n'installer que les dépendances de production

pour n'installer que les dépendances de production il faut utiliser l'option `--production` de la commande `npm install`:

```bash
npm install --production
```

## Q2bis : pourquoi faire cela ?

pour ne pas installer les dépendances de développement qui ne sont pas nécessaire pour lancer l'application

## Q3: Comment peut-on analyser la sécurité d'une application comme celle-ci (dépendances & image docker)

on peut utiliser la commade `docker scan` pour scanner l'image docker et vérifier les vulnérabilités:

