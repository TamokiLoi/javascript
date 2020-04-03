import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-custom-lib',
  template: `
    <p>
      ui-custom-lib works!
    </p>
  `,
  styles: []
})
export class UiCustomLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
