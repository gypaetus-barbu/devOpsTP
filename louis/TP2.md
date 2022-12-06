# Installer Docker via Docker Desktop

```bash 
brew install docker
```

# Exécuter un serveur web (apache, nginx, ...) dans un container docker

## a. Récupérer l'image sur le docker hub

```bash
docker pull nginx

Using default tag: latest
latest: Pulling from library/nginx
025c56f98b67: Pull complete
ca9c7f45d396: Pull complete
ed6bd111fc08: Pull complete
e25b13a5f70d: Pull complete
9bbabac55ab6: Pull complete
e5c9ba265ded: Pull complete
Digest: sha256:ab589a3c466e347b1c0573be23356676df90cd7ce2dbf6ec332a5f0a8b5e59db
Status: Downloaded newer image for nginx:latest
docker.io/library/nginx:latest
```


## b. Utiliser une commande pour vérifier que vous disposez bien de l'image en local

```bash
docker image ls

REPOSITORY               TAG       IMAGE ID       CREATED       SIZE
nginx                    latest    ac8efec875ce   9 hours ago   142MB
```


## c. Créer un fichier dans votre repo local ./html/index.html qui contient "Hello World"

```bash
mkdir html

echo "Hello World" > ./html/index.html

cat ./html/index.html

Hello World
```


## d. d. Démarrer un nouveau container et servir la page html créée précédemment à l'aide d'une référence absolue

```bash
docker run -d -p 80:80 -v $PWD/html:/usr/share/nginx/html:ro nginx
```
