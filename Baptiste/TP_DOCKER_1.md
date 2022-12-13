# 3. Exécutez un serveur web (apache, nginx) ans un container docker
## a. sudo docker pull nginx
## b. sudo docker image ls
## c. Dossier et fichier OK.
## d. sudo docker run -d -p 80:80 -v$PWD/html:/usr/share/nginx/html:ro nginx
## e. sudo docker ps
##    sudo docker container stop 30a8e69e947e
##    sudo docker container rm 30a8e69e947e
## f. sudo docker run -d -p 80:80 nginx
##    sudo docker container ls 
##    sudo docker cp $PWD/html/index.html cb3e578e3f1e:/usr/share/nginx/html/index.html
## 4. Builder une image
## a. sudo docker build -t my-nginx .
## b. FROM nginx:latest

##    COPY $PWD/html/index.html /usr/share/nginx/html/index.html

##    EXPOSE 80