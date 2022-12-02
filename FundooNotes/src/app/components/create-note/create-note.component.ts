import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteServices/note.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent {
  showTitle=false;
  title : any;
  description : any;

  constructor(private note : NoteService) { }


  show(){
    this.showTitle=true;
  }
  
  close()
  {
    this.showTitle=false;
    if((this.title != null && this.title != "") || (this.description != null && this.description != "")){
      console.log(this.title, this.description)
      let payload = {
        "title": this.title,
        "note": this.description
      }
      this.note.createNoteService(payload).subscribe((response:any) => {
        console.log(response);
      })
    }
  }
}
