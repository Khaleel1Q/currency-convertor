import { Component, OnInit } from '@angular/core';
import { ApiService } from '../main/api.service';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-conversion',
  standalone: false,
  templateUrl: './conversion.component.html',
  styleUrl: './conversion.component.scss'
})
export class ConversionComponent implements OnInit{
countries: { CODE: string; DESCRIPTION: any; }[] =[];
targetCountry:string;
// targetCountries: FormControl;
constructor(
  private apiSvc: ApiService,
){}

ngOnInit(): void {
  this.apiSvc.allCountries.subscribe(countries=>{
    this.countries=countries;
  });
}

setTargetCountry(event:{ CODE: string; DESCRIPTION: any; }){
this.targetCountry = event.CODE
}
}
