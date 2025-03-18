import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
// import Swal from 'sweetalert2'; 

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};
const httpOptionsJson = {
  headers: new HttpHeaders({ 'Content-Type': "application/json;charset=utf-8" })
};
const httpOptionsFiles = {
  headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' })
};

@Injectable({ providedIn: 'root' })
export class CommonService {
  PublicURL: string;
  APIUrl: string;
  id:string;
  public alerts: Array<IAlert> = [];
  public darkAlerts: Array<IAlert> = [];
  title = '';
  message = '';
  type = 'success';
  tapToDismiss = true;
  closeButton = false;
  progressBar = false;
  preventDuplicates = false;
  newestOnTop = false;
  progressAnimation = 'decreasing';
  positionClass = 'toast-top-right';
  curMsgIndex = -1;
  token: string;
  auth_token: any;
  constructor(private http: HttpClient, private titleService: Title, private router: Router) {
    this.APIUrl = environment.API;
    this.PublicURL = environment.PublicURL;
  }

  getMainURL()
  {
    return environment.MainURL;
  }

  
  setAuthToken(token) {
    this.auth_token = token;
  }

  getData(model, url, mode) {
    let auth_token;
    if (mode == "POST") {
      let body = this.serializeObj(model);
      return this.http.post(this.APIUrl + url, body, httpOptions);
    }
    else if (mode == "JSON") {
        return this.http.post(this.APIUrl + url, JSON.stringify(model), httpOptionsJson);      
    }
    else if (mode == "PUT") {
      return this.http.put(this.APIUrl + url, JSON.stringify(model), { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': auth_token }) });
    }
    else if (mode == "DELETE") {
      const httpOptionsNew = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: JSON.stringify(model) };
      return this.http.delete(this.APIUrl + url, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': auth_token }) });
    }
    else if (mode == "GET") {
      return this.http.get(this.APIUrl + url, httpOptions )
    }    
    else if (mode == "FILE") {
      return this.http.post(this.APIUrl + url, model);
    }
    else if (mode == "GETPublic") {
      console.log(this.PublicURL);
      return this.http.get(this.PublicURL + url, {
        headers: new HttpHeaders({
          "Accept": "application/json", 
          "api-token": "ApLnB4Bchndkd84mhW2DVGZ5HMRKNdgzsv4cKzmBaJ5P2KK8Qz_MEDNjHCFkDH8YG-g",
          "user-email": "menkalaiinfotech@gmail.com"
        })
      })
    }
    else if (mode == "GETPublicWToken") {
      console.log(this.PublicURL);
      return this.http.get(this.PublicURL + url, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + this.auth_token }) })
    }
  }

  private serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
    return result.join("&");
  }

}

export interface IAlert {
  id: number;
  type: string;
  message: string;
}
