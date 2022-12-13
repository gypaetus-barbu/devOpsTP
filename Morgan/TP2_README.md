3. executer un serveur web :

a. recupere l'image sur le docker hub :
sudo docker pull nginx


![img.png](assets/img.png)

b. utiliser une commande pour verifier que vous disposez bien de l'image en local :
sudo docker images ls


![img_1.png](assets/img_1.png)

c. creer un ficher dans votre repos local contenant "hello world" : 


![img_2.png](assets/img_2.png)


![img_3.png](assets/img_3.png)

d. demarrer un nouveau container et servir la page html :


![img_5.png](assets/img_5.png)

e. supprimer le container : 


![img_6.png](assets/img_6.png)

f. relancer le meme container sans l'option -v puis utiliser la commande cp pour servir votre fichier :


![img_7.png](assets/img_7.png)


![img_8.png](assets/img_8.png)


![img_9.png](assets/img_9.png)


![img_10.png](assets/img_10.png)


4. build une image :

a. a l'aide d'un dockerfile, creer une image qui permet d'executer un serveur web :


![img_11.png](assets/img_11.png)


![img_12.png](assets/img_12.png)


![img_13.png](assets/img_13.png)


![img_14.png](assets/img_14.png)


b. executer cette nouvelle image de maniere a servir ./html/index.html :


![img_15.png](assets/img_15.png)



c. quelles différences observez--vous entre les questions 3. et 4.., trouvez les avantages & inconvenients de chque procédure


En creant une image avec un dockerfile on peut avoir un controle plus fin sur l'image que l'on va creer, on peut par exemple ajouter des variables d'environnement, des commandes, des fichiers de configuration, etc.