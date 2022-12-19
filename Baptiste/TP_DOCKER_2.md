# 1. Récupérez le code source du TP sur moodle et mettez me dans le dossiser précédemment crée

# 2. Créer un Dockerfile qui permet de lancer une application NodeJS (v18-alpine) Cette application utilise le port 3000

# 3. Utilisez docker pour lancer une image de base de données (mariadb)

### sudo docker run -d --name mariadb -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=tp_docker -e MYSQL_USER=tp_docker -e MYSQL_PASSWORD=tp_docker -p 3306:3306 mariadb:latest 

# 4. Adapter le fichier models/index.js et le db.config pour utiliser une base mysql plutôt que sqlite. Rebuildez votre image docker et relancez un container, vérifiez que vous arrivez à utiliser l'app.

# 5. Créer un docker-compose.yml pour avoir 2 services (node et db) node doit se baser sur le build (votre Dockerfile) db doit se baser sur une image mariadb


# 6. Fraire les adaptations nécessaires au docker-compose pour que votre base de données conteneurisée

# 7. Utilisez des variables d'environnements dans votre docker-compose ET adaptez l'application (db.config.js) pour utiliser ces variables

# 8. Faîtes en sorte d'isoler vos 2 services docker-compose sur le même network.
## a. Votre application node est la seule qui doit publier son port 3000.
## b. Votre application db, doit exposer le port 3306 mais ne pas le publier

# Q1: Que se passe t'il si un de mes ports publies est déjà utilisé ?

### Le conteneur sera crée mais ne tournera pas à cause du conflit

# Q2: Quelle option de la commande npm install permet de n'installer que les dépendances de prodction

### sudo npm install --production

# Q2bis: pourquoi faire cela ?

### Pour réduire le fichier et éviter la présence de dépendances à supprimer avant l'export en prod

# Q3: Comment peut-on analyser la sécurité d'une application comme celle-ci (dépendances & image docker)

### sudo docker scan