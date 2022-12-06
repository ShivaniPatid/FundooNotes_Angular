import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = 'https://localhost:44336/api';
  constructor(private httpClient : HttpClient) { }

  postService(url: string, reqdata: any, token: boolean = false, httpOptions: any = {} ){
    return this.httpClient.post(this.baseUrl+url,reqdata,token && httpOptions)
  }
  getService(url: string, token: boolean = false, httpOptions: any = {} ){
    return this.httpClient.get(this.baseUrl+url,token && httpOptions)
  }
  putService(url: string, reqdata: any, token: boolean = false, httpOptions: any = {} ){
    return this.httpClient.put(this.baseUrl+url,reqdata,token && httpOptions)

  }
  deleteService(){

  }
  patchService(){

  }
}
