import { Component, EventEmitter, Input, Output } from "@angular/core"
import { IonicModule } from "@ionic/angular"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import type { PetService } from "../organisms/pet-service-card/pet-service-card.component"

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class BusquedaComponent {
  @Input() petServices: PetService[] = []
  @Output() filteredServicesChange = new EventEmitter<PetService[]>()

  searchTerm = ""

  
  filterServices() {
    if (!this.searchTerm.trim()) {
      
      this.filteredServicesChange.emit([...this.petServices])
      return
    }

    const searchTermLower = this.searchTerm.toLowerCase().trim()

    const filtered = this.petServices.filter(
      (service) =>
        service.name.toLowerCase().includes(searchTermLower) ||
        service.serviceType.toLowerCase().includes(searchTermLower) ||
        service.schedule.toLowerCase().includes(searchTermLower) ||
        service.price.toString().includes(searchTermLower),
    )

    this.filteredServicesChange.emit(filtered)
  }
}
