import { Component, OnChanges, OnInit } from '@angular/core';
import { SearchDataService } from 'src/app/core/services/search-data.service';

@Component({
  selector: 'app-finding-page',
  templateUrl: './finding-page.component.html',
  styleUrls: ['./finding-page.component.scss']
})
export class FindingPageComponent implements OnInit {
  planetList: any = [];
  vehicleList: any = [];
  message: any;
  totalSpeed = 0;
  totalDistance = 0;
  totalTime = 0;
  selectedList: any = [];
  allVehicles: any = [];
  allPlanets: any = [];
  selectedvehicles: any;
  token: any;
  result: any;


  constructor(private searchDataService: SearchDataService) { }

  ngOnInit() {
    this.getPlanetNames();
    this.getVehicleDetails();
  }


  getVehicleDetails() {
    this.searchDataService.getGameDetails('vehicles')
      .then((data: any) => {
        this.vehicleList = data;
      });

  }

  getPlanetNames() {
    this.searchDataService.getGameDetails('planets')
      .then((data: any) => {
        this.planetList = data;
      });
  }

  receiveMessage($event) {
    this.message = $event
    this.message.forEach(el => {
      this.selectedList.push(el);
    });
    this.selectedvehicles = this.selectedList;
    this.planetList = this.planetList.filter((el) => !this.selectedList.includes(el));
    // this.totalSpeed = 0;
    // this.totalDistance = 0;
    // this.message.forEach(el => {
    //   if (el.hasOwnProperty('total_no')) {
    //     this.totalSpeed = this.totalSpeed + el.speed
    //   }
    //   if (el.hasOwnProperty('distance')) { 
    //     this.totalDistance = this.totalDistance + el.distance
    //   }
    // })

  }

  getGameToken() {
    this.searchDataService.getGameToken('token')
      .then((data: any) => {
        this.token = data;
        sessionStorage.setItem('token', this.token.token)
      });

  }

  sendList() {
    this.selectedList.forEach(element => {
      if (element.hasOwnProperty('total_no')) {
        this.allVehicles.push(element.name)
      }
      if (element.hasOwnProperty('distance')) {
        this.allPlanets.push(element.name)
      }
    });
    var token = sessionStorage.getItem('token')
    console.log('tokee ',token)

    var request = {
      token: token,
      planet_names:this.allPlanets,
      vehicle_names:this.allVehicles
    }
    console.log(request)
    this.searchDataService.getResult('find',request)
    .then((data: any) => {
      if(data.status=="success"){
        this.result = "Winner!"
      } else {
        this.result = "Lost! :("
      }
      
    });
  }



  checkResult() {
    this.getGameToken();
    this.sendList();    
  }




}
