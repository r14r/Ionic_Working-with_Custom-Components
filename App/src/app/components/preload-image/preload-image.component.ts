import { Component, Input, ElementRef, Renderer2, ViewEncapsulation, OnChanges } from '@angular/core';

@Component({
	selector: 'c-preload-image',
	templateUrl: './preload-image.component.html',
	styleUrls: ['./preload-image.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class PreloadImageComponent implements OnChanges {
	_src = '';
	_ratio: { w: number, h: number };

	constructor(
		private _elementRef: ElementRef,
		private _renderer: Renderer2
	) {
		console.log('PreloadImageComponent::constructor | ');
	}

	@Input() set src(val: string) {
		console.log('PreloadImageComponent::src | set ');
		this._src = (val !== undefined && val !== null) ? val : '';
	}

	@Input() set ratio(ratio: { w: number, h: number }) {
		console.log('PreloadImageComponent::src | ratio ');
		this._ratio = ratio || { w: 1, h: 1 };
	}

	ngOnChanges() {
		console.log('PreloadImageComponent::ngOnChanges | ');

		const ratio_height = (this._ratio.h / this._ratio.w * 100) + '%';

		this._renderer.setStyle(this._elementRef.nativeElement, 'padding', '0px 0px ' + ratio_height + ' 0px');
		this._update();
	}

	_update() {
		console.log('PreloadImageComponent::_update | ');

		this._loaded(false);
	}

	_loaded(isLoaded: boolean) {
		console.log('PreloadImageComponent::_loaded | isLoaded=', isLoaded);

		if (isLoaded) {
			setTimeout(() => {
				console.log('PreloadImageComponent::_loaded | addClass img-loaded');

				this._renderer.addClass(this._elementRef.nativeElement, 'img-loaded');
			}, 500);
		} else {
			console.log('PreloadImageComponent::_loaded | removeClass img-loaded');

			this._renderer.removeClass(this._elementRef.nativeElement, 'img-loaded');
		}
	}
}