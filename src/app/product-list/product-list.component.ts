import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');

    // Cia galetu buti modalinis langas pasirkinti kaip sharinti: facebook, twitter, email

    // Facebook Sharer URL dokumentacija, kokia turi buti nuoroda:
    // https://developers.facebook.com/docs/sharing/reference/share-dialog/
    let url =
      'https://facebook.com/sharer.php?display=popup&u=' + window.location.href;
    window.open(url, 'sharer');
  }

  shareTwitter() {
    window.alert("TODO: Padaryti twitter sharinima");
  }
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
