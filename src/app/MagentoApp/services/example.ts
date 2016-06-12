/**
 * Created by refaelgold on 12/06/2016.
 */
import {Injectable} from 'angular2/core';
import {Http,Headers} from 'angular2/http';

@Injectable()
export class Example {
    constructor(private _http: Http) {

    }


    getCurrentTime(){
        return this._http.get('https://api.github.com/users/hadley/orgs')
                   .map(res=>res.json())
    }


    postJson(){
        var json=JSON.stringify({var1:'test',var2:3});
        var params='json='+json;
        var headers=new Headers();
        headers.append('Content-Type','application/x-www-form-urlencoded');

        return this._http.post('http://validate.jsontest.com',params,{
            headers:headers
        })
            .map(res=>res.json);
    }
}