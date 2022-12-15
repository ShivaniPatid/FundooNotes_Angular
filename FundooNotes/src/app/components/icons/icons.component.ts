import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NoteService } from 'src/app/services/noteServices/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent {

  @Input() noteCard : any;
  @Output() iconEvent = new EventEmitter<string>();

  constructor(private note : NoteService) { }

  colors: Array<any> = [
    { code: '#fff', name: 'white' },
    { code: '#f28b82', name: 'red' },
    { code: '#fbbc04', name: 'orange' },
    { code: '#FFFF00', name: 'yellow' },
    { code: '#ccff90', name: 'green' },
    { code: '#a7ffeb', name: 'teal' },
    { code: '#cbf0f8', name: 'Blue' },
    { code: '#aecbfa', name: 'darkblue' },
    { code: '#d7aefb', name: 'purple' },
    { code: '#fdcfe8', name: 'pink' },
    { code: '#e6c9a8', name: 'brown' },
    { code: '#e8eaed', name: 'grey' },
  ];

  trashNote() {
    let payload = {
      noteID : [this.noteCard.noteID],
      isTrash : true,
    }
    console.log(payload);
    this.note.trashNoteService(payload).subscribe((response : any) => {
      console.log(response);
      this.iconEvent.emit(response);
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
      this.iconEvent.emit(response);
    })
  }

  setColor(color:any){
    this.noteCard.color=color
    let payload={
      color:color,
      noteID : [this.noteCard.noteID],
    }
    console.log(payload);
    this.note.colorService(payload).subscribe((response : any) => {
      console.log(response);
      this.iconEvent.emit(response);
    })
  }
}
