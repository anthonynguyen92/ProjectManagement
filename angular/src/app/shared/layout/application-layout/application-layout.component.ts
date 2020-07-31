import { Component, OnInit, AfterContentInit, AfterViewInit } from '@angular/core';

declare var $;
@Component({
  selector: 'ft-application-layout',
  templateUrl: './application-layout.component.html'
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

    $.AdminBSB.leftSideBar.setMenuHeight();
    $.AdminBSB.leftSideBar.checkStatuForResize(false);

    $.AdminBSB.demo.setSkinListHeightAndScroll();
    $.AdminBSB.demo.setSettingListHeightAndScroll();

  }
}