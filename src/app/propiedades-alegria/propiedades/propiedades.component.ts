import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    standalone: true,
    imports: [RouterOutlet],
    template: ` 
    <h4>Propiedades</h4>
    <router-outlet></router-outlet>
`
})
export class PropiedadComponent {}