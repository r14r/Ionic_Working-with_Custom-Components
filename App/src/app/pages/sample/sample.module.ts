import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { ComponentsModule } from 'src/app/components/components.module';
import { SamplePage } from './sample.page';

const routes: Routes = [{ path: '', component: SamplePage }];

@NgModule({
    declarations: [SamplePage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        ComponentsModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SamplePageModule {
    PREFIX = 'SamplePageModule';

    log(func, line = '') {
        console.log(this.PREFIX + '::' + func + ' ' + line);
    }
    constructor() {
        this.log('constructor');
    }
}
