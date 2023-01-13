import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  // List of Users in Database
  public users: any = [];

  constructor(private api: ApiService, private auth: AuthService) {}

  ngOnInit() {
    this.onLoad();
  }

  // Getting Users Form Database and add it In List
  onLoad() {
    this.api.getUser().subscribe((res) => {
      this.users = res;
    });
  }

  // Logout Functionality
  logOut() {
    this.auth.signOut();
  }
}
