import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class Utils {
    constructor(){}
    public setHeaders(header: HttpHeaders){
        header.append('Content-Type', 'application/json');
        header.append('Accept', 'application/json');
    }
}
