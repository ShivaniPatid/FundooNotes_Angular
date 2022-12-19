import { Component, Input, Output, EventEmitter } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent {

  @Input() NotesList: any;
  @Output() displayToGetAllNoteEvent = new EventEmitter<string>();
  title : any;
  description : any;
  message : any;


  constructor(public dialog: MatDialog) {}

  openDialog(note : any): void {
    const dialogRef = this.dialog.open(UpdateNoteComponent, {
      width: '500px',
      height: 'auto',
      data: note,
    });

    dialogRef.afterClosed().subscribe(response => {
      console.log('The dialog was closed',response);
      
    });
  }

  receivedMessage($event : any){
    this.message = $event;
    console.log(this.message);
    this.displayToGetAllNoteEvent.emit(this.message);
  }

  
}

