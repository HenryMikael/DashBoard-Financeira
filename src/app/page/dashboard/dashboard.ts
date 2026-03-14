import { Component } from '@angular/core';
import { Dashboardcomponent } from "../../components/dashboardcomponent/dashboardcomponent";

@Component({
  selector: 'app-dashboard',
  imports: [Dashboardcomponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {}
