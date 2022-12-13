3. executer un serveur web :

a. recupere l'image sur le docker hub :
sudo docker pull nginx
![img.png](img.png)

b. utiliser une commande pour verifier que vous disposez bien de l'image en local :
sudo docker images ls
![img_1.png](img_1.png)

c. creer un ficher dans votre repos local contenant "hello world" :
![img_2.png](img_2.png)
![img_3.png](img_3.png)

d. demarrer un nouveau container et servir la page html :
![img_5.png](img_5.png)

e. supprimer le container :
![img_6.png](img_6.png)

f. relancer le meme container sans l'option -v puis utiliser la commande cp pour servir votre fichier :
![img_7.png](img_7.png)
![img_8.png](img_8.png)
![img_9.png](img_9.png)
![img_10.png](img_10.png)

4. build une image :

a. a l'aide d'un dockerfile, creer une image qui permet d'executer un serveur web
![img_11.png](img_11.png)
![img_12.png](img_12.png)
![img_13.png](img_13.png)
![img_14.png](img_14.png)

b. executer cette nouvelle image de maniere a servir ./html/index.html
![img_15.png](img_15.png)

c. quelles différences observez--vous entre les questions 3. et 4.., trouvez les avantages & inconvenients de chque procédure