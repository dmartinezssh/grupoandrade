import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { EstadoCivil } from "./models/estadoCivil";

@Injectable({
    providedIn: 'root'
})

export class CatalogsService {
    private estadoCivil: EstadoCivil[] = [
        { "id": 121, "label": "Soltero" },
        { "id": 131, "label": "Casado" },
        { "id": 141, "label": "Unión Libre" },
    ]

    obtenerCatalogos(): Observable<any> {
        let obj = new Observable((subscriber) => {
            setTimeout(() => {
                subscriber.next(this.estadoCivil);
                subscriber.complete();
            }, 600);
        });
        return obj;
    }
}