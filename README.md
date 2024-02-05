## pre-requeriments

node 20.9.0
npm install -g npm@8.0.0

## clone this project

run `git clone https://github.com/cleumirsouza/angular17-boilerplate.git`

## Entry in project directory

run `cd angular17-boilerplate`

# boilerplate-App

Run `npm i` to instal dependecies.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Project structure

```
/src
|-- /app
| |
| |-- /constants # Foder to keep services to call APIs, file system and others;
| |
| |-- /core # Foder to keep services to call APIs, file system and others;
| |
| |-- /enums # Foder to keep services to call APIs, file system and others;
| |
| |-- /interfaces # Folder to keep services to call APIs, file system and others;
| |
| |-- /pages # Each page will be load just one time when called.
| | |-- /home
| | |-- /login
| |
| |-- /services # Foder to keep services to call APIs, file system and others;
| | |-- /core.service.ts
| |
| |-- /shared #Components, directives, Translate and pipes are shared with modules
| | |-- /components
| | |-- /directives
| | |-- /i18n
| | |-- /pipes
| |
| |-- /assets #Contém arquivos estáticos como imagens e estilos globais.
| | |-- /images
| | |-- /styles
| |
| |-- /environments #Configurações específicas para ambientes de desenvolvimento e produção.
| | |-- environment.prod.ts
| | |-- environment.ts
| |
| |-- app.config.ts
| |-- app.routes.ts
| |-- app.config.server.ts
| |-- app.component.ts
| |-- app.component.html
| |-- app.component.scss
| |
|-- package.json
|-- ... setup files`
```
