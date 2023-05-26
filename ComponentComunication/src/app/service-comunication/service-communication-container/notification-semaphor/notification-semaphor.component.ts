import { Component, OnInit } from '@angular/core';
import { NotificationStateManagementService } from '../../notification-state-management.service';

@Component({
  selector: 'app-notification-semaphor',
  templateUrl: './notification-semaphor.component.html',
  styleUrls: ['./notification-semaphor.component.scss']
})
export class NotificationSemaphorComponent implements OnInit {

  constructor(public notificationStateManagementService: NotificationStateManagementService) { }

  ngOnInit(): void {
  }

}
