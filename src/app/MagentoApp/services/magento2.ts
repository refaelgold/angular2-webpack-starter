/**
 * Created by Nir Goldman on 12/06/2016.
 */
import {Injectable} from 'angular2/core';
import {Http,Headers} from 'angular2/http';

@Injectable()
export class Magento2 {
    constructor(private _http: Http) {

    }

    getAllM2Products(){
        var headers=new Headers();
        headers.append('Content-Type','application/x-www-form-urlencoded');
        return this._http.get('http://www.mageplayground.tk/rest/V1/categories',{
            headers:headers
        }).map(res=>res.json())
    }
}