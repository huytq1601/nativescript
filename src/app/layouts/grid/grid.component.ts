import { Component, OnInit } from '@angular/core';
import { Label } from "tns-core-modules/ui/label";
import { isAndroid } from "tns-core-modules/platform";

@Component({
	selector: 'ns-grid',
	templateUrl: './grid.component.html',
	styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

	public onLabelLoaded = (args: any) => {
		const lbl = args.object as Label;
		if (isAndroid) {
			lbl.android.setGravity(17);
		}
	};
	constructor() { }

	ngOnInit(): void {
	}

}
