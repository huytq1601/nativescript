import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'ns-challenge-edit',
    templateUrl: './challenge-edit.component.html',
    styleUrls: ['./challenge-edit.component.css'],
    moduleId: module.id,
})
export class ChallengeEditComponent implements OnInit {
    @Output() input = new EventEmitter<string>();
    challengeDescription = "";

    constructor() { }

    ngOnInit(): void {
    }

    onSetChallenge() {
        this.input.emit(this.challengeDescription);
        // this.challengeDescription = '';
    }

}
