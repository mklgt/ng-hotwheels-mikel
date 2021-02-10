import {Component, Input} from '@angular/core';
import {HotWheel} from '../shared/hotwheel';

@Component({
  selector: 'app-hotwheel-item',
  templateUrl: './hotwheel-item.component.html',
  styleUrls: ['./hotwheel-item.component.css']
})
export class HotWheelItemComponent {

  @Input() hotwheel: HotWheel;
}
