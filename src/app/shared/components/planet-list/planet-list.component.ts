import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss']
})
export class PlanetListComponent implements OnInit {
  @Input() planets: any;
  @Input() vehicles: any;
  @Input() selectedvehicles: any;
  @Output() messageEvent = new EventEmitter<string>();
  planetList: FormGroup;
  vehiclesList: any;
  trialList: FormGroup;
  // selectedFirstPlanet = new FormControl('', Validators.required);
  // selectedSecondPlanet: string;

  constructor(private formBuilder: FormBuilder) {
    this.planetList = this.formBuilder.group({
      selectedFirstPlanet: [''],
      selectedFirstVehicle: [''],
    });


  }

  ngOnInit() {
  }

  updateList(event) {
    var planetKeys = Object.values(this.planetList.value);

    if (planetKeys.length >= 2) {
      this.planets = this.planets.filter((el) => !planetKeys.includes(el));
    }
    this.updateVehicleList(event.value);
  }

  getNewVehicleValue(list, selections) {
    list.forEach(element => {
      if (selections.includes(element)) {
        element.total_no--;
      }
    });
    list = list.filter((el) => el.total_no > 0);
    return list;

  }

  updateVehicleList(planet) {
    var selections = Object.values(this.planetList.value);
    this.vehicles = this.vehicles.filter((el) => el.max_distance >= planet.distance);
    if(this.selectedvehicles){
      this.vehicles = this.getNewVehicleValue(this.vehicles, this.selectedvehicles);
    }
    

    this.sendMessage(selections);
  }


  sendMessage(selections) {
    if(!selections.includes('')){
      this.messageEvent.emit(selections)
      this.planetList.get('selectedFirstPlanet').disable();
      this.planetList.get('selectedFirstVehicle').disable();
    }

    
  }


}
