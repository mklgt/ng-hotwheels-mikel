import {Component, OnInit} from '@angular/core';
import {HotWheelService} from '../shared/hotwheel.service';
import {HotWheel} from '../shared/hotwheel';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-hotwheel-detail',
  templateUrl: './hotwheel-detail.component.html',
  styleUrls: ['./hotwheel-detail.component.css']
})
export class HotWheelDetailComponent implements OnInit {

  hotwheel: HotWheel;
  hotWheelId: number;

  constructor(private activatedroute: ActivatedRoute, private router: Router, private hotWheelService: HotWheelService) {}

  ngOnInit() {
    this.hotWheelId = parseInt(this.activatedroute.snapshot.params['hotwheelId']);
    this.hotWheelService.getHotWheelById(this.hotWheelId).subscribe(
      (data: HotWheel) => this.hotwheel = data
    );
  }
  goEdit():void{
    this.router.navigate(['/hotwheels', this.hotWheelId, 'edit']);
  }
  onBack(): void {
    this.router.navigate(['']);
  }

}
