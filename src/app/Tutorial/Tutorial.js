"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var title_1 = require('./services/title');
var x_large_1 = require('./directives/x-large');
var Tutorial = (function () {
    // TypeScript public modifiers
    function Tutorial() {
        this.name = null;
        // Set our default values
        this.data = { value: '' };
        // angular js official tuts
        this.yourName = '';
        this.name = "";
    }
    Tutorial.prototype.changeName = function (newName) {
        this.name = newName;
    };
    Tutorial.prototype.ngOnInit = function () {
        console.log('hello `Tutorial` component');
        // this.title.getData().subscribe(data => this.data = data);
    };
    Tutorial = __decorate([
        core_1.Component({
            // The selector is what angular internally uses
            // for `document.querySelectorAll(selector)` in our index.html
            // where, in this case, selector is the string 'app'
            selector: 'Tutorial',
            // We need to tell Angular's Dependency Injection which providers are in our app.
            providers: [
                title_1.Title
            ],
            // We need to tell Angular's compiler which directives are in our template.
            // Doing so will allow Angular to attach our behavior to an element
            directives: common_1.FORM_DIRECTIVES.concat([
                x_large_1.XLarge
            ]),
            // We need to tell Angular's compiler which custom pipes are in our template.
            pipes: [],
            // Our list of styles in our component. We may add more to compose many styles together
            styles: [require('./tutorial.css')],
            // Every Angular template is first compiled by the browser before Angular runs it's compiler
            template: require('./tutorial.html')
        }), 
        __metadata('design:paramtypes', [])
    ], Tutorial);
    return Tutorial;
}());
exports.Tutorial = Tutorial;
//# sourceMappingURL=Tutorial.js.map