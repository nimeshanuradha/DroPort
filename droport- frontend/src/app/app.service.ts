import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Request } from "@angular/http";
import { HttpHeaders, } from "@angular/common/http";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";



@Injectable()
export class APIservice{

    constructor(private http: Http){}

    get_own_data(): Observable<Response>{

        let requestOptions = new RequestOptions({headers: null, withCredentials: true})

        return this.http.get("http://localhost:3000/req/asd",requestOptions)

    }   

}