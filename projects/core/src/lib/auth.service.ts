import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from '@environments/environment';
import { Observable } from "rxjs";
import { Login } from "./models/login";
import { ResponseLogin } from "./models/responseLogin";

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    private api: string = environment.apiGpoLogin;

    credentialsOk = { username: 'carlos.oviedo', password: '$oyAdmin666' }

    constructor(private http: HttpClient) {}

    login(login: Login): Observable<any> {
        return this.http.post<any>(this.api, login);
    }

    loginMock(login: Login): Observable<any> {
        let obj = new Observable((subscriber) => {
            setTimeout(() => {
                let exito: boolean = false;
                let mensaje: string = '';
                let token: string = '';
                
                if(login.username === 'carlos.oviedo') {
                    if(login.password === '$oyAdmin666') {
                        exito = true;
                        mensaje = 'Login Exitoso';
                        token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
                    } else {
                        exito = false;
                        mensaje = 'Username / Password Incorrecto'
                    }
                } else
                if(login.username === 'daniel.martinez') {
                    exito = false;
                    mensaje = 'Usuario esta bloqueado'
                } else {
                    exito = false;
                    mensaje = 'El usuario no existe'
                }

                subscriber.next({
                    exito,
                    mensaje,
                    token
                });
                subscriber.complete();
            }, 2000);
        });
        return obj;
    }
}