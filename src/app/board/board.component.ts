import { Component, Input } from '@angular/core';
import { Location } from '../interfaces/location.interface';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {

  public dragEnabled: boolean = false;

  public ieLocation: Location = {
    x: 0,
    y: 0
  }
  
  public eOffset: Location = {
    x: 0,
    y: 0
  }

  public ceLocation: Location = {
    x: 0,
    y: 0
  };

  onDragEnabled(value: boolean): void {
    this.dragEnabled = value;
  }

  onIeLocation(value: Location): void {
    this.ieLocation = value;
  }

  onEOffset(value: Location): void {
    this.eOffset = value;
  }

  onDrag(event: MouseEvent): void {
    if (this.dragEnabled) {
      const deltaX = event.clientX - this.ieLocation.x;
      const deltaY = event.clientY - this.ieLocation.y;
      this.ceLocation.x = this.eOffset.x + deltaX;
      this.ceLocation.y = this.eOffset.y + deltaY;
    }
  }

  endDrag(event: MouseEvent): void {
    this.dragEnabled = false;
  }
}
