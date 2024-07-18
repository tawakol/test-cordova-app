import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonHeader, IonToolbar, IonTitle, IonContent],
  providers: [InAppBrowser]
})
export class HomePage {
  constructor(private inAppBrowser: InAppBrowser) {}

  launchSpareApp() {
    this.inAppBrowser.create('https://spare-parent-rcph76b7h-spare.vercel.app/auth/welcome?vercelToolbarCode=Z3slT8Zrg22Pxle', '_blank');
  }
}
