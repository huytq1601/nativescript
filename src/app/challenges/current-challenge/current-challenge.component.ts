import { Component, Input } from "@angular/core";
import { ItemEventData } from "tns-core-modules/ui/list-view";

@Component({
    selector: "ns-current-challenge",
    templateUrl: "./current-challenge.component.html",
    styleUrls: ["./current-challenge.component.css"],
    moduleId: module.id,
})
export class CurrentChallengeComponent {
    @Input() challenges: string[] = [];

    onItemTap(arg: ItemEventData) {
        const position = arg.index;
        this.challenges[position] = 'tapped';
    }
}
