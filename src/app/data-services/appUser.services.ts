import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AppUserService {
    
    baseUrl:string =  'http://localhost:8888';

    constructor(private httpClient: HttpClient) {}

    getAppUserObjList() {
        return this.httpClient.get( this.baseUrl + '/users' , {
            responseType: 'json',
            headers: {'Access-Control-Allow-Origin': '*'}
        });/*
        .subscribe(
            (res) => {
                console.log(res);
            }
        );*/
    }

}