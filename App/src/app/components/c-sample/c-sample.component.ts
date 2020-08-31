import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'c-sample',
	templateUrl: './c-sample.component.html',
	styleUrls: ['./c-sample.component.scss']
})
export class SampleComponent implements OnInit {
	PREFIX = 'SampleComponent';

	log(func, line = '') {
		console.log(this.PREFIX + '::' + func + ' ' + line);
	}
	constructor() {
		this.log('constructor');
	}

	ngOnInit() { }
}
