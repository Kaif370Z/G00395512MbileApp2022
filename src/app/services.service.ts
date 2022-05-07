import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';//importing the HTTP client for use
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RiderService {

  constructor(private http:HttpClient) { }

  GetRiderData():Observable<any>
  {
   return this.http.get('http://api.sportradar.us/motogp/trial/v2/en/competitors/sr:competitor:49401/profile.json?api_key=pdhaxy75shnybw62rcb2pcwa');//link to the JSON data
  }
}
