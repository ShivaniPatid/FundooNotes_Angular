import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteServices/note.service';


@Component({
  selector: 'app-trash-note',
  templateUrl: './trash-note.component.html',
  styleUrls: ['./trash-note.component.scss']
})
export class TrashNoteComponent implements OnInit{

  noteArray=[]
  constructor(private note : NoteService) { }

  ngOnInit(): void {
    this.getTrashNote()
  }

  getTrashNote(){
    this.note.getAllNoteService().subscribe((response : any) => {
      console.log(response);
      this.noteArray=response
      console.log(this.noteArray);
      this.noteArray=this.noteArray.filter((result:any)=>{
        return result.isArchive==false;
      })
    })
  }
}
