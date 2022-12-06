import { Component, Input } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent {

  @Input() NotesList: any;
  title : any;
  description : any;


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
}

