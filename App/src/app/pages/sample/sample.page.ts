import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sample',
    templateUrl: './sample.page.html',
    styleUrls: [ './sample.page.scss' ]
})
export class SamplePage implements OnInit {
    PREFIX = 'SamplePage';

    log(func, line = '') {
        console.log(this.PREFIX + '::' + func + ' ' + line);
    }
    constructor() {
        this.log('constructor');
    }

    ngOnInit() {}
}
