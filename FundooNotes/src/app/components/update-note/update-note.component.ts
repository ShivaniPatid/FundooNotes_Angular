import { Component, Inject , Output, EventEmitter } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { NoteService } from 'src/app/services/noteServices/note.service';
@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent {
  title : any;
  description : any;
  id : any;
  @Output() updateEvent = new EventEmitter<string>();
  constructor( private note : NoteService,
    public dialogRef: MatDialogRef<UpdateNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.title = data.title;
    this.description = data.note;
    this.id = data.noteID;
  }

 
  onNoClick(): void {
    this.dialogRef.close();
  }

  closeDialog(){
    let data = {
      title : this.title,
      note : this.description,
      noteId : this.id
    }
    console.log(data);
      this.note.updateNoteService(data).subscribe((response : any) => {
        
        console.log("update response",response);
        this.updateEvent.emit(response);
      })
      
      this.dialogRef.close();
  }

  receiveMessage($event:any){
    this.closeDialog()
  }
  
}
