import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-black-side',
  templateUrl: './black-side.component.html',
  styleUrls: ['./black-side.component.css', './black-side.responsive.component.css']
})
export class BlackSideComponent implements OnInit {
  titleRight:string = "ORDER.NOW"
  h3Sub:string = "OVER 200 AWARDS"
  h3Title:string = "SELECT.YOUR.PLATFORM:"
  paraGraph:string = "Cyberpunk 2077 is an open-world, action-adventure storu set in Night City, a megalopolis obsessed with power, glamour and body modifiction."
  constructor() {}
  buttonLink:string = "PRE.ORDER.NOW"
  endPara:string = "COMING DECEMBER 10TH, 2020"
  ngOnInit(): void {}

}
