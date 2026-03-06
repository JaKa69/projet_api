Pour lancer l'application:
prérequis:
- Docker Desktop

lancer la commande dans '/projet_api/': docker compose up --build

attendre que les containers soit démarré

aller sur 127.0.0.1:4200

se connecter avec soit 
- utilisateur admin (accès au front et à tout les endpoints): admin@test.com mdp: admin 
- utilisateur user (pas accès au front): guest@test.com mdp: guest

Le front n'est pas très beau et possède quelques bugs par manque de temps et par choix de se focaliser sur l'API. Si certaines fonctionnalités cassent, n'hésitez pas à tester avec postman.