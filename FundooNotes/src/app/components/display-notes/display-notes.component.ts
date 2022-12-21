import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DataService } from 'src/app/services/DataServices/data.service';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {

  @Input() NotesList: any;
  @Output() displayToGetAllNoteEvent = new EventEmitter<string>();
  title : any;
  description : any;
  search = '';
  message : any;
  subscription : any;
  searchWord : any;

  constructor(public dialog: MatDialog, private dataService : DataService) {}

  ngOnInit(): void {
    
    this.subscription = this.dataService.searchNote.subscribe(messages => {
      this.message = messages;
      console.log("display card search data======", messages.data[0]);
      this.searchWord=messages.data[0]
      
    })
  }

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

