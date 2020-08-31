import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { PreloadImageComponent } from './preload-image/preload-image.component';
import { HeaderComponent } from './header/header.component';
import { SampleComponent } from './c-sample/c-sample.component';

@NgModule({
	imports: [CommonModule, IonicModule.forRoot(),],
	declarations: [PreloadImageComponent, HeaderComponent, SampleComponent],
	exports: [PreloadImageComponent, HeaderComponent, SampleComponent],
	entryComponents: [],
})
export class ComponentsModule {
	PREFIX = 'ComponentsModule';

	log(func, line = '') {
		console.log(this.PREFIX + '::' + func + ' ' + line);
	}
	constructor() {
		this.log('constructor');
	}
}
