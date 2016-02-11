import {Component, Directive, Input, QueryList,
    ViewContainerRef, TemplateRef, ContentChildren} from 'angular2/core';

import {UiPane} from './ui_pane';

@Component({
    selector: 'ui-tabs',
    template: `
    <ul class="nav nav-tabs">
      <li *ngFor="var pane of panes"
          (click)="select(pane)"
          role="presentation" [class.active]="pane.active">
        <a>{{pane.title}}</a>
      </li>
    </ul>
    <ng-content></ng-content>
    `,
    styles:['a { cursor: pointer; cursor: hand; }']
})
export class UiTabs {
    @ContentChildren(UiPane) panes: QueryList<UiPane>;

    select(pane: UiPane) {
        this.panes.toArray().forEach((p: UiPane) => p.active = p == pane);
    }
}
