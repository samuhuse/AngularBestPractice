import { Component, OnInit } from '@angular/core';
import { PropertyBagService } from '../../property-bag.service';

@Component({
  selector: 'app-bag-label',
  templateUrl: './bag-label.component.html',
  styleUrls: ['./bag-label.component.scss']
})
export class BagLabelComponent implements OnInit {

  // The state is persisted even if the components are destroied
  constructor(public propertyBagService: PropertyBagService) { }

  ngOnInit(): void {
  }

}
