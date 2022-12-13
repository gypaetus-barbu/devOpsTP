3. Executer un serveur web :

a. Recupere l'image sur le docker hub :
sudo docker pull nginx


![img.png](assets/img.png)

b. Utiliser une commande pour verifier que vous disposez bien de l'image en local :
sudo docker images ls


![img_1.png](assets/img_1.png)

c. Creer un ficher dans votre repos local contenant "hello world" : 


![img_2.png](assets/img_2.png)


![img_3.png](assets/img_3.png)

d. Demarrer un nouveau container et servir la page html :


![img_5.png](assets/img_5.png)

e. Supprimer le container : 


![img_6.png](assets/img_6.png)

f. Relancer le meme container sans l'option -v puis utiliser la commande cp pour servir votre fichier :


![img_7.png](assets/img_7.png)


![img_8.png](assets/img_8.png)


![img_9.png](assets/img_9.png)


![img_10.png](assets/img_10.png)


4. Build une image :

a. A l'aide d'un dockerfile, creer une image qui permet d'executer un serveur web :


![img_11.png](assets/img_11.png)


![img_12.png](assets/img_12.png)


![img_13.png](assets/img_13.png)


![img_14.png](assets/img_14.png)


b. Executer cette nouvelle image de maniere a servir ./html/index.html :


![img_15.png](assets/img_15.png)



c. Quelles différences observez--vous entre les questions 3. et 4.., trouvez les avantages & inconvenients de chque procédure


En creant une image avec un dockerfile on peut avoir un controle plus fin sur l'image que l'on va creer, on peut par exemple ajouter des variables d'environnement, des commandes, des fichiers de configuration, etc.


5. Utiliser une base de données dans un container docker :


a. Recuperer les images mysql(ou mariadb) et phpmyadmin/phpymyadmin depuis le Docker Hub :


![img_16.png](assets/img_16.png)


![img_17.png](assets/img_17.png)

b. Executer 2 containers à partirdes images, ajouter une table et quelques lignes dans votre base via phpmyadmin :


![img_18.png](assets/img_18.png)


![img_19.png](assets/img_19.png)


![img_20.png](assets/img_20.png)


6. Utilisation de docker-compose.yml :


a. Aller lire la documentation de docker-compose et essayer de décrire à quoi sert cette commande VS la commande docker run :


Docker-compose est un outil qui permet de definir et de lancer des applications docker composees de plusieurs containers


b. Quelle commande permet de lancer tous les containers du fichier yaml ? Quelle commande permet de les stopper ?


La commande pour lancer : docker-compose up -d


La commande pour stopper : docker-compose down


c. Ecrivez un fichier docker-compose.yml pour servir votre base de données (mysql, mariadb et etc) et phpmyadmin :


![img_21.png](assets/img_21.png)


dans cette exemple on a 2 containers, le premier est un container mysql et le second est un container phpmyadmin

on peut retouver l'ensenble des configuration dans la commande docker run dans le fichier docker-compose.yml

pour acceder a phpmyadmin on utilise l'url http://localhost:8080