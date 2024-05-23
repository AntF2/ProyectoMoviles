import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  servicio = inject(ProductosService);
  personas: any;
  marcas: string[] = [];
  marcaSeleccionada: string = "";
  precioMin: number = 0;
  precioMax: number = 0;

  constructor() {}

  ngOnInit(){
    this.servicio.getNosotros().subscribe(p => {
      this.personas = p;
      this.marcas = Array.from(new Set(this.personas.map((item: any) => item.marca)));
      this.filtrarProductos(); // Aplicar filtro una vez que los datos se hayan cargado
    });
  }

  filtrarProductos() {
    if (!this.personas) return; // Verificar si personas está definido
    let filteredPersonas = [...this.personas]; // Copiar el arreglo original para mantenerlo intacto
    if (this.marcaSeleccionada) {
      filteredPersonas = filteredPersonas.filter((item: any) => item.marca === this.marcaSeleccionada);
    }
    if (this.precioMin && this.precioMax) {
      filteredPersonas = filteredPersonas.filter((item: any) => item.precio >= this.precioMin && item.precio <= this.precioMax);
    }
    this.personas = filteredPersonas; // Asignar los resultados filtrados
  }
}
