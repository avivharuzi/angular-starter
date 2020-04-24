# Angular Starter - Bootstrap Template

Angular Starter is an Angular template based from @angular/cli template with extra features to start project more faster.

## Angular Version

9.1.1

## Template Features

- Bootstrap 4.4.1
- Angular Bootstrap (ngx-bootstrap)
- Font Awesome 5

## Extra Features

- SCSS Support
- PWA
- Angular Universal (SSR)
- Reactive State (@ngrx/store, @ngrx/store-devtools, @ngrx/effects)
- Bundle Analyzer
- Husky (git hooks)
- Prettier (format code style)
- SEO

## First Steps

1. Replace all **angular-starter** keyword from this project with your new project name, for example: **my-website**
1. Replace **src/favicon.ico** with your website favicon
1. Replace **src/assets/icons** with your website icons
1. Replace **src/assets/images/defaults/default-image** if you want different default image (this is used in **DefaultImageDirective**)
1. Update this **README.md** according to your project changes
1. If you are using monorepo multi-package repository consider to remove husky (git hooks) to prevent conflicts between repos, I recommended to delete **.huskyrc.json** file and run: **npm uninstall husky** and then maybe to add husky in the root of the project

## Rules

1. Always generate files with Angular Schematics (@angular/cli)
1. Application logic like services (which are common in the application scope) must be in **CoreModule**
1. Shared components, directives and pipes must be in **SharedModule**
1. Create feature modules (which will be lazy loaded) with plural name
1. Never use **window** or **document** JavaScript objects directly because in SSR mode it does not exists, but there is a way to handle it
   with **isPlatformBrowser** from **@angular/platform-browser**

### Feature Module Example (heroes)

```text
src
  app
    core
      ...
    heroes
      components
        hero-detail
          hero-detail.component.ts|html|css|spec
        hero-edit
          hero-edit.component.ts|html|css|spec
        hero-list
          hero-list.component.ts|html|css|spec
          hero-item
            hero-item.component.ts|html|css|spec
      shared
        components
          ...
        hero.ts
        hero.service.ts|spec
      store
        hero.actions.ts
        hero.effects.ts
        hero.reducer.ts
        hero.selectors.ts
      heroes.component.ts|html|css|spec
      heroes.module.ts
      heroes-routing.module.ts
    shared
      ...
    store
      ...
```

## Commands

Serve project in development.

```bash
npm start
```

Format project.

```bash
npm run format
```

Format project with watch mode.

```bash
npm run format:watch
```

Lint project.

```bash
npm run lint
```

Test project.

```bash
npm test
```

Test project without watching files.

```bash
npm run test:without-watch
```

E2E project.

```bash
npm run e2e
```

Analyze project.

```bash
npm run analyze
```

Build project for production.

```bash
npm run build:prod
```

Build project for production with Angular Universal (SSR).

```bash
npm run build:ssr
```

Build project for production with Prerender.

```bash
npm run prerender
```
