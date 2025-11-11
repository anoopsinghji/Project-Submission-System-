import { Component, inject, OnInit } from '@angular/core';
import { CompetationModel } from '../../models/competation';
import { FormsModule } from '@angular/forms';
import { Master } from '../../service/master';
import { DatePipe, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-events',
  imports: [FormsModule, NgClass, DatePipe,RouterLink],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events implements OnInit {
  comptationObj: CompetationModel = new CompetationModel()

  masterService = inject(Master);

  grigData: CompetationModel[] = [];

  ngOnInit(): void {
    this.getAllData()
  }
  getAllData() {
  this.masterService.GetAllCompetation().subscribe({
    next: (res) => {
      this.grigData = res;
    },
    error: (err) => {
      console.error("Error fetching competitions:", err);
    }
  });
}


  OnSave() {

    this.masterService.onSaveCompetation(this.comptationObj).subscribe({
      next: (res) => {
        console.log("Response:", res);
        alert("Competition Created Successfully");
      },
      error: (error) => {
        alert(error.error)
      }
    });
  }

}
