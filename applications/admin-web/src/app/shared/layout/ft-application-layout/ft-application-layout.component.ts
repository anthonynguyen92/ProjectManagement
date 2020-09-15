import { Component, OnInit, AfterContentInit, AfterViewInit } from '@angular/core';

declare var $;

@Component({
  selector: 'app-ft-application-layout',
  templateUrl: './ft-application-layout.component.html',
  styleUrls: ['./ft-application-layout.component.css']
})
export class FtApplicationLayoutComponent implements OnInit, AfterContentInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    $.AdminBSB.activateAll();
    $.AdminBSB.activateDemo();
}
  ngAfterContentInit() {
  }

  onResize(event) {
    // exported from $.AdminBSB.activateAll
    $.AdminBSB.leftSideBar.setMenuHeight();
    $.AdminBSB.leftSideBar.checkStatuForResize(false);

    // exported from $.AdminBSB.activateDemo
    $.AdminBSB.demo.setSkinListHeightAndScroll();
    $.AdminBSB.demo.setSettingListHeightAndScroll();
}
}
