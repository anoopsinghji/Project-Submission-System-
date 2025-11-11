import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CompetationModel } from '../models/competation';

@Injectable({
  providedIn: 'root'
})
export class Master {

  $loginDone: Subject<void> = new Subject<void>


  constructor(private http: HttpClient) { }

  onSaveCompetation(data: CompetationModel) {
    return this.http.post("https://api.freeprojectapi.com/api/ProjectCompetition/competition", data)
  }

  onSubmitProject(data: any) {
    return this.http.post("https://api.freeprojectapi.com/api/ProjectCompetition/project", data)
  }

  GetAllCompetation() {
    return this.http.get<CompetationModel[]>("https://api.freeprojectapi.com/api/ProjectCompetition/GetAllCompetition")
  }

  GetAllSubmissionByCompetationId(completitaionId: number) {
    return this.http.get<CompetationModel[]>(
      `https://api.freeprojectapi.com/api/ProjectCompetition/project/byCompetition/${completitaionId}`
    );
  }

  ApprovedProject(projectSubId: number) {
    return this.http.put<CompetationModel[]>(
      `https://api.freeprojectapi.com/api/ProjectCompetition/project/approve/${projectSubId}`, {}
    );
  }
  RejectProject(projectSubId: number) {
    return this.http.put(
      `https://api.freeprojectapi.com/api/ProjectCompetition/project/reject/${projectSubId}`,
      {}
    );
  }
  WinnerProject(projectSubId: number) {
    return this.http.put(
      `https://api.freeprojectapi.com/api/ProjectCompetition/project/winner/${projectSubId}`,
      {}
    );
  }
  GetDashboardSummary() {
    return this.http.get("https://api.freeprojectapi.com/api/ProjectCompetition/GetDashboardSummary");
  }

}
