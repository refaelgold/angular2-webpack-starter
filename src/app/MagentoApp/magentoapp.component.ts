import { Component } from '@angular/core';
import {Example} from './services/example';
import {Magento2} from './services/magento2';

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Magento App` component loaded asynchronously');


@Component({
  selector: 'magentoapp',
  providers: [
    Example,
    Magento2
  ],
  styles: [`
  `],
  template: `
    <div>
        <button (click)="getAllM2Products()">Get All Magento Prodcuts</button>
        <p>output:{{getAllM2ProductsData}}</p>
        <h1>test</h1>
        <div class="row">
        <!--<li *ngFor="let menu of data">-->
          <!--hello, {{menu}}-->
        <!--</li>-->
    </div>
    
  `

})
export class MagentoApp {


  getAllM2ProductsData:string;

  constructor(private _HttpService:Magento2 ) {}

  getAllM2Products(){
    this._HttpService.getAllM2Products()
        .subscribe(
            data=>this.getAllM2ProductsData=JSON.stringify(data),
            error=>alert(error),
            ()=>console.log("finished")
        )
  }



  ngOnInit() {
    console.log('hello `magento App` component');
  }


}
