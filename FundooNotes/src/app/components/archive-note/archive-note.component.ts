import { Component, OnInit  } from '@angular/core';
import { NoteService } from 'src/app/services/noteServices/note.service';

@Component({
  selector: 'app-archive-note',
  templateUrl: './archive-note.component.html',
  styleUrls: ['./archive-note.component.scss']
})
export class ArchiveNoteComponent implements OnInit{

  noteArray=[]
  constructor(private note : NoteService) { }

  ngOnInit(): void {
    this.getArchiveNote()
  }

  getArchiveNote(){
    this.note.getAllNoteService().subscribe((response : any) => {
      console.log(response);
      this.noteArray=response
      console.log(this.noteArray);
      this.noteArray=this.noteArray.filter((result:any)=>{
        return result.isArchive==true;
      })
    })
  }
}
