import { Component , OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle,  MatDialogRef } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-dialog-add-player',
  standalone: true,
  imports: [MatDialogContent, MatFormFieldModule, MatDialogActions, MatDialogClose, MatInputModule, FormsModule, MatButtonModule, MatDialogTitle], 
  templateUrl: './dialog-add-player.component.html',
  styleUrl: './dialog-add-player.component.scss'
})
export class DialogAddPlayerComponent  implements OnInit {

  name: string = '';

  constructor(public dialogRef: MatDialogRef<DialogAddPlayerComponent>) { }

  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close();
}

}
