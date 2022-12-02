import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteServices/note.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit{

  noteArray=[]
  constructor(private note : NoteService) { }

  ngOnInit(): void {
    this.getAllNote()
  }

  getAllNote(){
    this.note.getAllNoteService().subscribe((response : any) => {
      console.log(response);
      this.noteArray=response
      console.log(this.noteArray);
    })
  }
}
