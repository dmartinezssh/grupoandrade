import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'cambioLetras',
})

export class CambioLetrasPipe implements PipeTransform {
    transform(value: string) {
        return this.parseTo(value);
    }

    private parseTo(val: string) {
        //TODO: hacer funcion recursiva
        return val.toUpperCase()
    }
}