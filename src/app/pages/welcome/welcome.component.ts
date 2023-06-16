import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { TuNombreModal } from "./tuNombre.modal";
import { filter } from "rxjs";

@Component({
    selector: 'dxn-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent {
    yourName: string = '';
    constructor(public dialog: MatDialog) {}


    open(): void {
        const dialogRef = this.dialog.open(TuNombreModal, {
            data: this.yourName
        });
    
        dialogRef.afterClosed()
            .pipe(filter(yn => !!yn))
            .subscribe(yourName => {
                this.yourName = yourName;
            });
    }

}
