import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { PropertyBagService } from '../property-bag.service';
import { NotificationStateManagementService } from '../notification-state-management.service';

@Component({
  selector: 'app-service-communication-container',
  templateUrl: './service-communication-container.component.html',
  styleUrls: ['./service-communication-container.component.scss']
})
export class ServiceCommunicationContainerComponent implements OnInit {

  showBag1: boolean = true
  showBag2: boolean = true
  showBag3: boolean = true

  constructor(public readonly propertyBagService: PropertyBagService, public notificationStateManagementService: NotificationStateManagementService) { }

  ngOnInit(): void {
  }



}
