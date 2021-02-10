import {Component, OnInit} from '@angular/core';
import {HotWheel} from '../shared/hotwheel';
import {HotWheelService} from '../shared/hotwheel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hotwheels: HotWheel[]=[];
  constructor(private hotwheelService: HotWheelService) { }

  ngOnInit() {
   this.hotwheelService.getHotWheels().subscribe(
    (data: HotWheel[]) => this.hotwheels = data
   );
  }
}
