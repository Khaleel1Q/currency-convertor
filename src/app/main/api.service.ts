import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  allCountries = new BehaviorSubject<{CODE:string,DESCRIPTION: any}[]>([]);
  getAllCountries(){
    return this.http.get(`https://api.currencylayer.com/list?access_key=3931175354f205a8dacee2d94782068a`)
  }

  fetchConversionRate(src?:string, target?:{CODE:string,DESCRIPTION:string}[]){
    let params =`access_key=3931175354f205a8dacee2d94782068a`
    !!src?params+`&src=${src}`:params
    if(target){
      params+`&currencies=`
      target.forEach((country,index)=>{
        index===0?params+`${country.CODE}`:params+`,${country.CODE}`
      })
    }
    return this.http.get(`https://api.currencylayer.com/live?${params}`)
  }
}
