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
        <!--<h1>MagentoApp</h1>-->
        <!--<button (click)="onTestGet()">test GET request</button>-->
        <!--<p>output:{{getData}}</p>-->
        <!--<button (click)="onTestPost()">test POST request</button>-->
        <!--<p>output:{{postData}}</p>-->

        <button (click)="getAllM2Products()">Get All Magento Prodcuts</button>
        <p>output:{{getAllM2ProductsData}}</p>

    </div>
  `
})
export class MagentoApp {

  // getData:string;
  // postData:string;
  getAllM2ProductsData:string;


  constructor(private _HttpService:Magento2 ) {}



  // onTestGet(){
  //   this._HttpService.getCurrentTime()
  //       .subscribe(
  //           data=>this.getData=JSON.stringify(data),
  //           error=>alert(error),
  //           ()=>console.log("finished")
  //       )
  // }
  //
  // onTestPost(){
  //   this._HttpService.postJson()
  //       .subscribe(
  //           data=>this.postData=JSON.stringify(data),
  //           error=>alert(error),
  //           ()=>console.log("finished")
  //       )
  // }


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
