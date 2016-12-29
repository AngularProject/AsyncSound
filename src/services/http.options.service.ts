import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class HttpOptionsService {
    public getRequestOptions(): RequestOptions {
        let headerFields = {};
        headerFields['Content-Type'] = 'application/json';
        
        let headers: Headers = new Headers(headerFields);
        let options: RequestOptions = new RequestOptions({ headers: headers });
        
        return options;
    }
}
