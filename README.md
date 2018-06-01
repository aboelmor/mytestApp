# Angular 6

## Creating new application
Create new application using angular cli tool **ng**

```sh
ng new app
cd app
```

## Run the local server
```sh
ng serve
```

## Using the cli to create components/module/directive etc ...

```sh
ng generate component <component_name> # or using the shortcut
ng g c <component_name>

ng generate directive <directive_name> # or using the shortcut
ng g d <directive_name>

ng generate module <module_name> # or using the shortcut
ng g m <module_name>
```

## Adding the router
first we need to install the angular router module

```sh
npm install @angular/router --save
```

Import the router module and define the routes

```ts

import { Route } from '@angular/router';
//import the components used

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**', // handle not found component
    component: NotFoundComponent
  }
]

//add a file approuting.module.ts
//import the needed imports while writing down the below code
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})

export class AppRoutingModule{}
```

//in app.module.ts
> **Note:** Don't forget to put the components inside the **declaration** //in our case notfoundcomponent only
//Add in imports: AppRoutingModule 

in app.component.html add:
<app-header></app-header>

    <div class="feature">hello feature</div>

    <div class="body">
      <router-outlet></router-outlet>
    </div>

    <app-footer></app-footer>

#### Define the menu links
You should use the **routerLink**, **routerLinkActive** and **routerLinkActiveOptions** attribute to define the menu items

```html
<a routerLinkActive="active" routerLink="/" [routerLinkActiveOptions]="{exact: true}">Home</a>

<a routerLinkActive="active"
  routerLink="/about">About</a>

<a routerLinkActive="active"
  routerLink="/contact">Contact</a>
```

#### Add the RouterOutlet placeholder

In the app component you should add the **router-outlet** component

```html
.... header
<router-outlet></router-outlet>
.... footer
```


### View Encapsulation
There are three types of view encapsulation:
 - None (don't isolate bl mara 😏)
 - Emulated (isolate the inner styles using angular attributes)
 - Native (isolate the inner styles using shadow dom native technique)

