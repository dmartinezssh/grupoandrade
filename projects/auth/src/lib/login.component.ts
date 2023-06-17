import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { AuthService } from "@gpo/core";

@Component({
    selector: 'dxn-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    form: FormGroup = new FormGroup({});
    loading: boolean = false;
    visibility: boolean = false;
    
    constructor(private builder: FormBuilder, 
                private service: AuthService,
                private _snackBar: MatSnackBar,
                private router: Router) { }

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
            this.service.loginMock(this.form.value)
                .subscribe(
                data => {
                    this.loading = false;
                    this.form.enable();
                    if(data.exito) {
                        console.log(data)
                        this.router.navigate(['welcome'])
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