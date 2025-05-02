import { Component, OnInit } from '@angular/core';
import { ApiService } from '../main/api.service';
import { FormGroup,FormBuilder, FormControl } from '@angular/forms';
@Component({
  selector: 'app-conversion',
  standalone: false,
  templateUrl: './conversion.component.html',
  styleUrl: './conversion.component.scss'
})
export class ConversionComponent implements OnInit{
countries: { CODE: string; DESCRIPTION: any; }[] =[];
sourceCountry:FormControl;
targetCountries: FormControl;
constructor(
  private apiSvc: ApiService,
  private fb:FormBuilder
){}

ngOnInit(): void {
  this.apiSvc.allCountries.subscribe(countries=>{
    this.countries=countries;
  });

  this.sourceCountry.setValue('INR')
  console.log(this.sourceCountry)


}

}
