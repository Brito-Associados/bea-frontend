import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Brito & Associados';
  constructor(
    private matIconRegistry: MatIconRegistry,
    private donSanitizer: DomSanitizer) {
    var path = (name:string) => `../assets/${name}.svg`;
    this.matIconRegistry.addSvgIcon('instagran', this.donSanitizer.bypassSecurityTrustResourceUrl(path('instagran')));
    this.matIconRegistry.addSvgIcon('linkedin', this.donSanitizer.bypassSecurityTrustResourceUrl((path('linkedin'))));

  }
}
