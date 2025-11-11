import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Master } from '../../service/master';


@Component({
  selector: 'app-project-submissions',
  imports: [],
  templateUrl: './project-submissions.html',
  styleUrl: './project-submissions.css',
})
export class ProjectSubmissions {
  currentCompetationID: number = 0;
  submissionList: any[] = [];
  mast = inject(Master);

  constructor(private actiavteRoute: ActivatedRoute) { }

  ngOnInit() {
    this.actiavteRoute.params.subscribe((res: any) => {
      this.currentCompetationID = res.id;
      this.getAllSubmissions(); // ✅ Call API when route changes
    });
  }

  getAllSubmissions() {
    this.mast.GetAllSubmissionByCompetationId(this.currentCompetationID).subscribe({
      next: (res: any) => {
        this.submissionList = res;
        console.log('Submissions:', this.submissionList);
      },
      error: (err) => {
        console.error('Error loading submissions:', err);
      }
    });
  }

  onApprove(submissionId: number) {
    this.mast.ApprovedProject(submissionId).subscribe(() => {
      alert('✅ Project approved successfully!');
      this.getAllSubmissions(); // refresh list
    },
    error => {
      this.getAllSubmissions()
    }
  )
  }

  rejectProject(submissionId: number) {
    this.mast.RejectProject(submissionId).subscribe(() => {
      alert('❌ Project rejected successfully!');
      this.getAllSubmissions(); // refresh list
    },
    error => {
      this.getAllSubmissions()
    }
  );
  }

  markAsWinner(submissionId: number) {
    this.mast.WinnerProject(submissionId).subscribe(() => {
      alert('👑 Project marked as winner!');
      this.getAllSubmissions(); // refresh list
    },
    error => {
      this.getAllSubmissions()
    }
  );
  }



}

