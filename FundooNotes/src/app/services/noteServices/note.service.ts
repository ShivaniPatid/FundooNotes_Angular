import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token:any;

  constructor(private httpService : HttpService) { 
    this.token = localStorage.getItem('token')
  }

  createNoteService(payload:any){
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.postService("/Note/Add", payload, true, header)
  }

  getAllNoteService(){
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.getService("/Note/AllNotes", true, header)
  }

  updateNoteService(payload:any){
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.putService(`/Note/Update?noteId=${payload.noteId}`, payload, true, header)
  }
}
