import { Component } from '@angular/core';
import { Master } from '../../service/master';
import { CommonModule} from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
dashboardData: any = {}; // store API response

  constructor(private master: Master) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData() {
    this.master.GetDashboardSummary().subscribe((res: any) => {
      this.dashboardData = res;
    });
  }
  

}
