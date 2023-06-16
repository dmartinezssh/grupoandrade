import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AuthService } from "@gpo/core";

@Component({
    selector: 'dxn-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    form: FormGroup = new FormGroup({});
    loading: boolean = false;

    constructor(private builder: FormBuilder, 
                private service: AuthService,
                private _snackBar: MatSnackBar) { }

    ngOnInit(): void {
        this.form = this.builder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        })
    }
    
    get f() { return this.form.controls; }


    save() {
        if(this.form.valid) {
            this.loading = true;
            this.form.disable();
            this.service.login(this.form.value)
                .subscribe(
                data => {
                    this.loading = false;
                    this.form.enable();
                    if(data.exito) {
                        console.log(data);
                    } else {
                        console.error(data.mensaje);
                        this.openMessage(data.mensaje);
                    }
                }, 
                err => {
                    this.loading = false;
                    this.form.enable();
                    this.openMessage(err.error.mensaje);
                });
        }
    }

    openMessage(message: string) {
        this._snackBar.open(message, '', {
            duration: 2000
        });
    }

}