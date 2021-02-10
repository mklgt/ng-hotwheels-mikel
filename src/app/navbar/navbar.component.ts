import { Component, OnInit } from '@angular/core';
import { HotWheelService } from '../shared/hotwheel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  id : any;

  constructor(private hotWheelService: HotWheelService, private router: Router) { }

  ngOnInit() {
  }

  newHotWheel(){
      this.hotWheelService.getMaxHotWheelId().subscribe(
        data => this.id = data
      );
      this.router.navigate(['/hotwheels', this.id, 'new'])

  }

}
