/**
 * Created by refaelgold on 11/02/2016.
 */
import {Component, Directive, Input, QueryList,
    ViewContainerRef, ContentChildren} from 'angular2/core';

@Directive({
    selector: '[ui-pane]'
})
export class UiPane {
    @Input() title: string;
    private _active:boolean = false;

    constructor(public viewContainer: ViewContainerRef) { }

    @Input() set active(active: boolean) {
        if (active == this._active) return;
        this._active = active;
        if (active) {
            this.viewContainer.remove(0);
        } else {
            this.viewContainer.remove(0);
        }
    }

    get active(): boolean {
        return this._active;
    }
}