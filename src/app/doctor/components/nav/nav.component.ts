import { Component, OnInit } from '@angular/core';
import { faCalendar, faUser } from '@fortawesome/free-regular-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  // Icons
  calendarIcon = faCalendar;
  userIcon = faUser;
  outIcon = faSignOutAlt;

  // Show left menu
  showFiller = false;

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
