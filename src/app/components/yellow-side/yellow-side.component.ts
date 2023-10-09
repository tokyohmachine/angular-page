import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-yellow-side',
  templateUrl: './yellow-side.component.html',
  styleUrls: ['./yellow-side.component.css', './yellow-side.responsive.component.css']
})

export class YellowSideComponent implements OnInit{
  @Input()
  imageCover:string = ""
  iconCover:string = "/assets/more.png"
  subTitle:string = "BEST OPEN-WORLD GAME"


  constructor() {}

  ngOnInit(): void {}

}
