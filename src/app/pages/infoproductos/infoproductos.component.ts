import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-infoproductos',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './infoproductos.component.html',
  styleUrl: './infoproductos.component.css'
})
export class InfoproductosComponent {
  service = inject(ProductosService)

  servicios = inject(ProductosService)
  ruta = inject(ActivatedRoute)

  id: any;
  producto: any

  ngOnInit(): void {
    this.ruta.params.subscribe(p => {
      this.id = p['idProducto'],
        console.log(p['idProducto']);

      this.servicios.getPersonalUnico(this.id).subscribe(producto => {
        this.producto = producto
      });
    })
  }}
