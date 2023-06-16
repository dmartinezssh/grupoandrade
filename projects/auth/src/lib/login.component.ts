import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'dxn-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    form: FormGroup = new FormGroup({});

    constructor(private builder: FormBuilder) {

    }

    ngOnInit(): void {
        this.form = this.builder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        })
    }


    save() {
        console.log('123');
        if(this.form.valid) {
            console.log('sending....');
        }
    }

}