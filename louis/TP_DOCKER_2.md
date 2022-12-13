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

# 3. Utilisez docker pour lancer une image de base de données (mariadb)

```bash
docker run -d --name mariadb -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=tp_docker -e MYSQL_USER=tp_docker -e MYSQL_PASSWORD=tp_docker -p 3306:3306 mariadb:latest
```

# 4. Adapter le fichiers models/index.js et le db.config. js pour utiliser une base mysql plutôt que sqlite3 Rebuildez votre image docker et relancez un container, vérifiez que vous arrivez à utiliser l'app
