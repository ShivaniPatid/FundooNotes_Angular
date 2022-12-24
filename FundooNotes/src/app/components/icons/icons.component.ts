import { Component, Input, Output, EventEmitter,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from 'src/app/services/noteServices/note.service';
import { ArchiveNoteComponent } from '../archive-note/archive-note.component';
import { CollaboratorComponent } from '../collaborator/collaborator.component';
import { TrashNoteComponent } from '../trash-note/trash-note.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  @Input() noteCard : any;
  @Output() iconEvent = new EventEmitter<string>();
  
  isDeleteCom: boolean = false;
  isArchiveCom: boolean = false;

  constructor(private note : NoteService, private route:ActivatedRoute, public dialog:MatDialog) { }

  ngOnInit(): void {
    let comp = this.route.snapshot.component;
    if(comp == TrashNoteComponent){
      this.isDeleteCom = true;
    }  

    if(comp == ArchiveNoteComponent){
      this.isArchiveCom = true;
    }
  }

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

  restoreNote(){
    let payload = {
      noteID : [this.noteCard.noteID],
      isTrash : false,
    }
    console.log(payload);
    this.note.trashNoteService(payload).subscribe((response : any) => {
      console.log(response);
      this.iconEvent.emit(response);
    })
  }

  deleteNote(){
    let payload = {
      noteID : [this.noteCard.noteID],
    }
    console.log(payload);
    this.note.deleteForeverService(payload).subscribe((response : any) => {
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

  unarchiveNote(){
    let payload = {
      noteID : [this.noteCard.noteID],
      isArchive : false,
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


  openDialog(data : any): void {
    const dialogRef = this.dialog.open(CollaboratorComponent, {
      width: '500px',
      height: 'auto',
      data: this.noteCard,
    });

    dialogRef.afterClosed().subscribe(response => {
      console.log('The dialog was closed',response);
      
    });
  }
  
  
}
