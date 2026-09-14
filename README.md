# GameOn

Mobile-first community sports MVP built with Angular and Ionic. Players can discover local football and basketball teams, create matches, challenge rivals, inspect venues, and build reputation.

The Turkey-first v0.2 prototype also includes personal trainer discovery, gym and district filtering, verified coach profiles, time-slot selection, booking checkout, and a safe simulated payment confirmation flow. It does not collect real card data.

## Run locally

```bash
npm install
npm start
```

Open `http://localhost:4200`.

## Production build

```bash
npm run build
```

The static application is written to `dist/gameon/browser`.

## Mobile packaging

Capacitor dependencies are included. To add native projects later:

```bash
npx cap init GameOn com.gameon.app --web-dir dist/gameon/browser
npx cap add ios
npx cap add android
```

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.1.8.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
