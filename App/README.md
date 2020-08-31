# Working with Components

## Create component

```bash
$ ionic generate component components/Sample
> ng generate component components/Sample
CREATE src/app/components/sample/sample.component.scss (0 bytes)
CREATE src/app/components/sample/sample.component.html (25 bytes)
CREATE src/app/components/sample/sample.component.spec.ts (628 bytes)
CREATE src/app/components/sample/sample.component.ts (270 bytes)
UPDATE src/app/components/components.module.ts (621 bytes)
[OK] Generated component!
```

```bash
$ ionic generate module components/Components --flat
> ng generate module components/Components --flat
CREATE src/app/components/components.module.ts (194 bytes)
[OK] Generated module!
```

## Modify selector for component in `app/components/sample/sample.component.ts`

```javascript
@Component({
    selector: 'c-sample',
    templateUrl: './c-sample.component.html',
    styleUrls: [ './c-sample.component.scss' ]
})
```

## Rename files for component

```bash
cd src/app/components/sample
mv sample.component.html c-sample.component.scss
mv sample.component.html c-sample.component.html
mv sample.component.html c-sample.component.spec.ts
mv sample.component.html c-sample.component.ts
```

## Export created component

Modify `app/components/components.module.ts`

```bash
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { SampleComponent } from './sample/sample.component';

@NgModule({
    imports: [ CommonModule, IonicModule.forRoot(), ],
    declarations: [ SampleComponent ],
    exports: [ SampleComponent ],
    entryComponents: [],
})
export class ComponentsModule { }
```

## Add page to display the component

```bash
$ ionic generate page pages/Sample
> ng generate page pages/Sample
CREATE src/app/pages/sample/sample.module.ts (543 bytes)
CREATE src/app/pages/sample/sample.page.scss (0 bytes)
CREATE src/app/pages/sample/sample.page.html (133 bytes)
CREATE src/app/pages/sample/sample.page.spec.ts (691 bytes)
CREATE src/app/pages/sample/sample.page.ts (256 bytes)
UPDATE src/app/app-routing.module.ts (539 bytes)
[OK] Generated page!
```

## Add custom component to new page `sample.page.html`

```html
<ion-content class="ion-padding">
	<c-sample></c-sample>
</ion-content>
```

## Register components module in sample.module.ts

```javascript
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";

import { ComponentsModule } from "src/app/components/components.module";
import { SamplePage } from "./sample.page";

const routes: Routes = [{ path: "", component: SamplePage }];

@NgModule({
	declarations: [SamplePage],
	imports: [
		CommonModule,
		IonicModule,
		RouterModule.forChild(routes),
		ComponentsModule
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SamplePageModule {}
```

## Check Routing in `app-routig.odules.ts`

```javascript
const routes: Routes = [
	{ path: "", redirectTo: "home", pathMatch: "full" },
	{ path: "home", loadChildren: "./pages/home/home.module#HomePageModule" },
	{ path: "list", loadChildren: "./pages/list/list.module#ListPageModule" },
	{
		path: "sample",
		loadChildren: "./pages/sample/sample.module#SamplePageModule"
	}
];
```

## Add new page to sidemenu in `app.components.ts`

```javascript
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'List', url: '/list', icon: 'list' },
    { title: 'Sample Component', url: '/sample', icon: 'list' }
  ];
```
