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


## d. Démarrer un nouveau container et servir la page html créée précédemment à l'aide d'une référence absolue

```bash
docker run -d -p 80:80 -v $PWD/html:/usr/share/nginx/html:ro nginx
```

## e. Supprimer le container

```bash
docker container ls

CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS         PORTS                NAMES
c48e5c17bed4   nginx     "/docker-entrypoint.…"   8 minutes ago   Up 8 minutes   0.0.0.0:80->80/tcp   vigilant_lumiere

docker container stop c48e5c17bed4

c48e5c17bed4

docker container rm c48e5c17bed4

c48e5c17bed4
```

## f. Relancez le même container sans l'option -v puis utilisez la commande cp pour servir votre fichier

```bash
docker run -d -p 80:80 nginx

docker container ls

CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS         PORTS                NAMES
c48e5c17bed4   nginx     "/docker-entrypoint.…"   8 minutes ago   Up 8 minutes   0.0.0.0:80->80/tcp   zen_pike

docker cp $PWD/html/index.html c48e5c17bed4:/usr/share/nginx/html/index.html
```

# Builder une image

## a. A l'aide d'un Dockerfile, créer une image qui permet d'exécuter un serveur web (apache, nginx)

```Dockefile

FROM nginx:latest

EXPOSE 80

```

pour build l'image on utilise la commande suivante

```bash
docker build -t my-nginx .

[+] Building 0.2s (5/5) FINISHED
 => [internal] load build definition from Dockerfile                                                                0.0s
 => => transferring dockerfile: 71B                                                                                 0.0s
 => [internal] load .dockerignore                                                                                   0.0s
 => => transferring context: 2B                                                                                     0.0s
 => [internal] load metadata for docker.io/library/nginx:latest                                                     0.0s
 => CACHED [1/1] FROM docker.io/library/nginx:latest                                                                0.0s
 => exporting to image                                                                                              0.0s
 => => exporting layers                                                                                             0.0s
 => => writing image sha256:9d30e28a261fff3216442e204c7b1ad91595881a8880fafdd5fce1b5cf94bc7a                        0.0s
 => => naming to docker.io/library/my-nginx                                                                         0.0s

Use 'docker scan' to run Snyk tests against images to find vulnerabilities and learn how to fix them
```

## b. Exécuter cette nouvelle image de manière à servir./html/index.html

```Dockefile
FROM nginx:latest

COPY $PWD/html/index.html /usr/share/nginx/html/index.html

EXPOSE 80
```

pour build l'image on utilise la commande suivante

```bash
docker build -t my-nginx .

 => [internal] load build definition from Dockerfile                                                                0.1s
 => => transferring dockerfile: 128B                                                                                0.0s
 => [internal] load .dockerignore                                                                                   0.1s
 => => transferring context: 2B                                                                                     0.0s
 => [internal] load metadata for docker.io/library/nginx:latest                                                     0.0s
 => [internal] load build context                                                                                   0.1s
 => => transferring context: 82B                                                                                    0.0s
 => [1/2] FROM docker.io/library/nginx:latest                                                                       0.1s
 => [2/2] COPY ./html/index.html /usr/share/nginx/html/index.html                                                   0.1s
 => exporting to image                                                                                              0.1s
 => => exporting layers                                                                                             0.0s
 => => writing image sha256:fd1c772dde6912737a5b9592d394a723f938a82c0caf6fd14c52b599d62790a7                        0.0s
 => => naming to docker.io/library/my-nginx                                                                         0.0s

Use 'docker scan' to run Snyk tests against images to find vulnerabilities and learn how to fix them
```

pour run notre image on utilise la commande suivante

```bash
docker run -d -p 80:80 my-nginx

docker ps
CONTAINER ID   IMAGE      COMMAND                  CREATED         STATUS         PORTS                NAMES
c2783c25eee7   my-nginx   "/docker-entrypoint.…"   4 seconds ago   Up 3 seconds   0.0.0.0:80->80/tcp   xenodochial_greider
```

## C. Quelles différences observez-vous entre les questions 3. et 4., trouvez les vantages & inconvénients de chaque procédure

en creant une image avec un dockerfile on peut avoir un controle plus fin sur l'image que l'on va creer, on peut par exemple ajouter des variables d'environnement, des commandes, des fichiers de configuration, etc.
