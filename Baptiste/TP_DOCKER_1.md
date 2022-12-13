# 3. Exécutez un serveur web (apache, nginx) ans un container docker
## a. sudo docker pull nginx
## b. sudo docker image ls
## c. Dossier et fichier OK.
## d. sudo docker run -d -p 80:80 -v$PWD/html:/usr/share/nginx/html:ro nginx
## e. sudo docker ps
###   sudo docker container stop 30a8e69e947e
###   sudo docker container rm 30a8e69e947e
## f. sudo docker run -d -p 80:80 nginx
###   sudo docker container ls 
###   sudo docker cp $PWD/html/index.html cb3e578e3f1e:/usr/share/nginx/html/index.html
# 4. Builder une image
## a. sudo docker build -t my-nginx .
## b. FROM nginx:latest

###   COPY $PWD/html/index.html /usr/share/nginx/html/index.html

###   EXPOSE 80
## c. A la création de l'image avec un dockerfile on a un controle précis sur l'image qui va etre créer.

# 5. Utiliser une base de donnée dans un container docker
## a. Récupérer les images mysql (ou mariadb) et phpmyadmin/phpymyadmin depuis le Docker Hub
### sudo docker pull mysql
## b. Executer 2 containers à partir des images Lancer le phpmyadmin (conteneurisé et publié sur un port) et ajoutez une table via l'interface
### container:
### sudo docker run --name mysql_server -e MYSQL_ROOT_PASSWORD=123456 -d mysql
### sudo docker run --name phpmyadmin -d --link mysql_server:db -p 8080:80 phpmyadmin/phpmyadmin

# 6. Utilisation de docker-compose.yml
## a. Allez lire la documentation de docker-compose et essayer de décrire à quoi sert cette commande VS la commande docker run
### docker-compose permet de lancer des application docker contenant plusieurs container

## b. Quelle commande permet de lancer tous les containers du fichier yaml ? Quelle commande permet de les stopper ?
### sudo docker-compose up -d
### sudo docker-compose down

## c. Ecrivez un fichier docker-compose.yml pour servir votre base de données (mysql,mariadb,etc.) ET phpmyadmin
```yml
version: '3.8'

services:
  image: mysql
  container_name: mysql_server
  environement:
    MYSQL_ROOT_PASSWORD: 123456
  ports:
    - 3306:3306
  volumes:
    - $$PWD/data:/var/lib/mysql
  restart: always

phpmyadmin:
  image: phpmyadmin/phpmyadmin
  container_name: phpmyadmin
  ports:
    - 8080:80
  links:
    - mysql_server:db
  restart: always
  ```