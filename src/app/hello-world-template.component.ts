import { Component } from '@angular/core';

@Component({
  selector: 'hello-world-template',
  template: `
    <h2>Hello World Template</h2>
    <button (click)="onEditClick()">Make text editable!</button>
    <p [contentEditable]="canEdit">
      {{ canEdit ? 'You can edit me!' : 'I am read only!' }}
    </p>
  `
})
export class HelloWorldTemplateComponent {
  canEdit = false;
  onEditClick() {
    this.canEdit = !this.canEdit;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
