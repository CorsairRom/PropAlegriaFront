import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ArriendoService } from '../../arriendo.service';
import {map, switchMap} from 'rxjs'

import { DetalleArriendoComponent } from '../../components/detalle-arriendo/detalle-arriendo.component';
import { Arriendo } from '../../arriendo.model';

@Component({
  selector: 'app-detalle-arriendo-page',
  standalone: true,
  imports: [CommonModule, DetalleArriendoComponent],
  templateUrl: './detalle-arriendo-page.component.html',
  styleUrls: ['./detalle-arriendo-page.component.scss']
})
export class DetalleArriendoPageComponent {

  route = inject(ActivatedRoute)
  router = inject(Router)

  arriendoService = inject(ArriendoService)

  arriendo$ = this.route.paramMap.pipe(
    map(params => Number(params.get('id'))),
    switchMap(id => this.arriendoService.getArriendo(id))
  )


  handleEliminarEvent(arriendo: Arriendo) {}


  handleActualizarEvent(arriendo: Arriendo) {
    this.router.navigate(['arriendos', arriendo.id, 'actualizar'])
  }

}