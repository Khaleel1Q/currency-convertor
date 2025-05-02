import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
constructor(private apiService:ApiService){}
countries:any;
data:any;
  ngOnInit(): void {
    this.apiService.getAllCountries().subscribe((data)=>{
      this.data=data;
      
      const tempCountries = Object.entries(this.data.currencies).map(([CODE, DESCRIPTION]) => ({
        CODE,
        DESCRIPTION
      }));
      this.apiService.allCountries.next(tempCountries)
    });

    this.apiService.allCountries.subscribe(allCountries=>{
      this.countries=allCountries;
    })
  }
}
