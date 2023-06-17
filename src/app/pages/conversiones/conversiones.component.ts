import { Component } from "@angular/core";

@Component({
    selector: 'dxn-conversiones',
    template: `
        <dxn-sidebar></dxn-sidebar>
        <div class="conversiones"><span>ConversionesComponent</span></div>
    `,
    styles: [`
        .conversiones {
            font-size: 32px;
            font-weight: 500;
            position: absolute;
            top: 50%;
            right: 50%;
            transform: translate(50%, -50%);
        }
    `]
})

export class ConversionesComponent {

}