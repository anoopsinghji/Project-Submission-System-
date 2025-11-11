import { AsyncPipe, DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { CompetationModel } from '../../models/competation';
import { Master } from '../../service/master';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink,AsyncPipe, DatePipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
 $eventList : Observable<CompetationModel []> = new Observable<CompetationModel[]>;
 masterService = inject (Master);

 constructor(){
  this.$eventList = this.masterService.GetAllCompetation();
 }

}
