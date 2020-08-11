import { Component } from "@angular/core";
import * as application from 'tns-core-modules/application';
import * as utils from 'tns-core-modules/utils/utils';

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent {
    activeChallenges: string[] = [];

    getStatusBarHeight() {
        let result = 0;
        if (application.android) {
            const resourceId = (application.android.foregroundActivity || application.android.startActivity).getResources().getIdentifier('status_bar_height', 'dimen', 'android');
            if (resourceId) {
                result = (application.android.foregroundActivity || application.android.startActivity).getResources().getDimensionPixelSize(resourceId);

                result = utils.layout.toDeviceIndependentPixels(result);
            }
        }
        return result;
    }

    onChallengeInput(challengeDescription: string) {
        this.activeChallenges.push(challengeDescription);
    }
}
