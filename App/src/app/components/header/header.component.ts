import {
	Component,
	Input,
	ElementRef,
	Renderer2,
	ViewEncapsulation,
	OnChanges,
	OnInit
} from '@angular/core';

@Component({
	selector: 'c-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
	_name = '';

	constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
		console.log('HeaderComponent::constructor | ');
	}

	@Input() set name(val: string) {
		console.log('PreloadImageComponent::set name | val=', val);
		this._name = val !== undefined && val !== null ? val : '';
	}

	ngOnInit() { }

	ngOnChanges() { }
}
