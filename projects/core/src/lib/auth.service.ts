import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from '@environments/environment';
import { Observable } from "rxjs";
import { Login } from "./models/login";

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    private api: string = environment.apiGpoLogin;

    constructor(private http: HttpClient) {}

    login(login: Login): Observable<any> {
        return this.http.post<any>(this.api, login);
    }
}