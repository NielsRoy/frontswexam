import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Property, PropertyType } from '../interfaces/property.interface';
import { Location } from '../interfaces/location.interface';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrl: './entity.component.css'
})
export class EntityComponent {
  public name: string = 'Student';
  public properties: Property[] = [
    {
      name: 'id',
      type: PropertyType.integer
    },
    {
      name: 'name',
      type: PropertyType.string
    },
    {
      name: 'birthday',
      type: PropertyType.date
    },
    {
      name: 'age',
      type: PropertyType.integer
    },
  ]

  @Input()
  public location: Location = {
    x: 20,
    y: 50
  }

  @Output()
  public dragEnabled = new EventEmitter<boolean>();

  @Output()
  public ieLocation = new EventEmitter<Location>();

  @Output()
  public eOffset = new EventEmitter<Location>();


  enableDrag(event: MouseEvent): void {
    this.dragEnabled.emit(true);
    this.ieLocation.emit({
      x: event.clientX,
      y: event.clientY
    });
    this.ieLocation.emit({
      x: this.location.x,
      y: this.location.y
    });
  } 
}
