import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-star-library',
  template: `
    <h1>Star Library</h1>
    <p>star-library works!</p>
    <p>Another command to see updated library</p>
    <p>Third time updated library and build only</p>
  `,
  styles: [
  ]
})
export class StarLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
