import { Component, OnInit } from '@angular/core';
import { Label } from "tns-core-modules/ui/label";
import { isAndroid } from "tns-core-modules/platform";

@Component({
  selector: 'ns-absolute',
  templateUrl: './absolute.component.html',
  styleUrls: ['./absolute.component.css'],
  moduleId: module.id
})
export class AbsoluteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public onLabelLoaded = (args: any) => {
    const lbl = args.object as Label;
    if (isAndroid) {
        lbl.android.setGravity(17);
    }
};

}
