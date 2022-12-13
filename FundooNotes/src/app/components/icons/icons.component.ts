import { Component, Input } from '@angular/core';
import { NoteService } from 'src/app/services/noteServices/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent {

  @Input() noteCard : any;

  constructor(private note : NoteService) { }

  trashNote() {
    let payload = {
      noteID : [this.noteCard.noteID],
      isTrash : true,
    }
    console.log(payload);
    this.note.trashNoteService(payload).subscribe((response : any) => {
      console.log(response);
    })
  }

  archiveNote() {
    let payload = {
      noteID : [this.noteCard.noteID],
      isArchive : true,
    }
    console.log(payload);
    this.note.archiveNoteService(payload).subscribe((response : any) => {
      console.log(response);
    })
  }
}
