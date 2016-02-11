/**
 * Created by refaelgold on 11/02/2016.
 */
import {Component, Directive, Input, QueryList,
    ViewContainerRef, TemplateRef, ContentChildren} from 'angular2/core';

@Directive({
    selector: '[ui-pane]'
})
export class UiPane {
    @Input() title: string;
    private _active:boolean = false;

    constructor(public viewContainer: ViewContainerRef,
                public templateRef: TemplateRef) { }

    @Input() set active(active: boolean) {
        if (active == this._active) return;
        this._active = active;
        if (active) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainer.remove(0);
        }
    }

    get active(): boolean {
        return this._active;
    }
}