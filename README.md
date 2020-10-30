
# Projet Domotique

### Ajout du back-End FireBase
## 1- Allez à FireBase : https://firebase.google.com/ 
## 2- Se authentifier avec un compte Google ou Créer un nouveau.
## 3- Allez à la console : https://console.firebase.google.com/
## 4- Ajouter un nouveau projet
## 5- Preciser le nom et le pays du projet
## 6- Cliquer sur le menu Database
## 7- Puis sur le lien le RealTime Database
## 8- puis sur l'onglet Regles et rendre l'accessibilité public en mettant true dans le read et le write(le problème est que tout le monde peut ecrire et lire la base de données )

### Requete du fetch 
```javascript
this.httpClient.get<any[]>('https://domotique-74669.firebaseio.com/appareils.json')
    .subscribe(
      (response) => {
        this.appareils = response;
        this.emitAppareilSubject();
      },
      (error) => {
        console.log('Error de chargement');
        
      }
    )
```

Importer dans appModule le module HttpClientModule puis l'ajouter dans les imports

Si la ligne est dubliquer il faut donc utiliser this.httpClient.put au lieu de this.httpClient.post 


# install angular CLI
# ensemble de commandes permettant de creer des elements de l'application angular

Run `sudo npm install -g @angular/cli`

# Creation du projet `PremierPojet`
Run `ng new premier-projet`
Run `cd premier-projet/`

# installer le bootstrap
Run `npm install bootstrap --save`
# installer le rxjs
Run `npm install rxjs-compat --save`

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
### ##############################
###  Git
### ##############################

## 1- Creation du repo domotique sur GitHub.com
## 2- Add .gitignore file to project
## 3- git init
## 4- git add .
## 5- git commit -m "init repo"
## 6-git remote add origin https://github.com/seammour/domotique.git
## 7- git push -u origin master

### ##############################
###  Git - Creation Tag
### ##############################
## git tag -a v1.0.0 -m "Reactive Formulaire"
## git tag
## git push origin v1.0.0



