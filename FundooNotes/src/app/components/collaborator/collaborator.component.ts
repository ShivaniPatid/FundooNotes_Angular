import { Component,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { NoteService } from 'src/app/services/noteServices/note.service';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent {

  id : any;

  constructor( private note : NoteService,
    public dialogRef: MatDialogRef<CollaboratorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  closeDialog(){
    
    this.dialogRef.close();
  }
}
