import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'cambioLetras',
})

export class CambioLetrasPipe implements PipeTransform {
    transform(value: string) {
        return this.replaceValue(value);
    }

    private replaceValue(word: string) {
        let wordsToReplace: any = { a: '4', e: '3', i: '1', o: '0', u: '9' };
        let result = Array.from(word).map((a: string) =>  
            !!wordsToReplace[a] ? wordsToReplace[a] : a
        ).join("");
        return result;
    }
}