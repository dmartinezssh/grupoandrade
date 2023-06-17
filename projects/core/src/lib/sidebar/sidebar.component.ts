import { Component } from "@angular/core";

@Component({
    selector: 'dxn-sidebar',
    template: `
        <div class="sidebar">
            <a href="#" routerLink="/welcome" routerLinkActive="active">Welcome</a>
            <a href="#" routerLink="/conversiones" routerLinkActive="active">Conversiones</a>
            <a href="#" routerLink="/calcula-fecha" routerLinkActive="active">Calcula Fecha</a>
            <a href="#" routerLink="/formulario" routerLinkActive="active">Formulario</a>
            <a href="#" routerLink="/" class="close-session">Cerrar sesión</a>
        </div>    
    `,
    styles: [`
        .sidebar {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 64px;
            z-index: 99;
            display: flex;
            align-items: center;
            gap: 1rem;
            justify-content: center;
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        }

        .sidebar a {
            color: #bcbcbc;
            font-weight: 500;
            text-decoration: none;
        }

        .sidebar .active {
            color: #000;
            font-weight: 500;
        }

        a.close-session {
            color: #3f51b5 !important;
        }
    `]
})

export class SidebarComponent {

}