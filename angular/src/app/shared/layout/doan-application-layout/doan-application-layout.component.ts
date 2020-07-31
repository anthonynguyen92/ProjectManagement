import { Component, OnInit, AfterContentInit } from '@angular/core';
declare var $;

@Component({
  selector: 'app-doan-application-layout',
  templateUrl: './doan-application-layout.component.html',
})

export class DoanApplicationLayoutComponent implements OnInit, AfterContentInit {
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