
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Master } from '../../service/master';


@Component({
  selector: 'app-register-event',
  imports: [ReactiveFormsModule],
  templateUrl: './register-event.html',
  styleUrl: './register-event.css',
})
export class RegisterEvent {
  submissionForm: FormGroup = new FormGroup({

    submissionId: new FormControl(0),

    competitionId: new FormControl(0),

    userId: new FormControl(0),

    projectTitle: new FormControl(""),

    description: new FormControl(""),

    githubLink: new FormControl(""),

    submissionDate: new FormControl(new Date()),

    status: new FormControl(""),

    rank: new FormControl("0")

  })

  masterSrv = inject(Master)
  constructor(private actiavteRoute: ActivatedRoute) {
    this.actiavteRoute.params.subscribe((res: any) => {


      this.submissionForm.controls['competitionId'].setValue(res.id);

    })


    const localData = localStorage.getItem('UserDetail');
    if (localData != null) {
      const parseData = JSON.parse(localData);
      this.submissionForm.controls['userId'].setValue(parseData.userId)
    }



  }
  onSubmit() {
     const formValue = this.submissionForm.value;
    this.masterSrv.onSubmitProject(formValue).subscribe((res: any) => {
           alert("Submition Successfull")
    })

  }

}

