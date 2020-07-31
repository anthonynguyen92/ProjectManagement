import { Component, OnInit, Injector, ViewEncapsulation } from '@angular/core';

declare var $;
@Component({
  selector: 'right-sidebar',
  templateUrl: './right-sidebar.component.html',
  encapsulation: ViewEncapsulation.None
})

export class RightSidebarComponent implements OnInit {

  themes: UiThemeInfo[] = [
    new UiThemeInfo('Default', 'default'),
    new UiThemeInfo('Red', 'red'),
    new UiThemeInfo('Pink', 'pink'),
    new UiThemeInfo('Purple', 'purple'),
    new UiThemeInfo('Deep Purple', 'deep-purple'),
    new UiThemeInfo('Indigo', 'indigo'),
    new UiThemeInfo('Blue', 'blue'),
    new UiThemeInfo('Light Blue', 'light-blue'),
    new UiThemeInfo('Cyan', 'cyan'),
    new UiThemeInfo('Teal', 'teal'),
    new UiThemeInfo('Green', 'green'),
    new UiThemeInfo('Light Green', 'light-green'),
    new UiThemeInfo('Lime', 'lime'),
    new UiThemeInfo('Yellow', 'yellow'),
    new UiThemeInfo('Amber', 'amber'),
    new UiThemeInfo('Orange', 'orange'),
    new UiThemeInfo('Deep Orange', 'deep-orange'),
    new UiThemeInfo('Brown', 'brown'),
    new UiThemeInfo('Grey', 'grey'),
    new UiThemeInfo('Blue Grey', 'blue-grey'),
    new UiThemeInfo('Black', 'black')
  ];

  selectedThemeCssClass = 'default';

  constructor(
    injector: Injector) {

  }

  ngOnInit(): void {
    $('body').addClass('theme-' + this.selectedThemeCssClass);
  }

  setTheme(theme: UiThemeInfo): void {
    const $body = $('body');
    $('.right-sidebar .demo-choose-skin li').removeClass('active');
    $body.removeClass('theme-' + this.selectedThemeCssClass);
    $('.right-sidebar .demo-choose-skin li div.' + theme.cssClass).closest('li').addClass('active');
    $body.addClass('theme-' + theme.cssClass);

    this.selectedThemeCssClass = theme.cssClass;
  }

}

class UiThemeInfo {
  constructor(
    public name: string,
    public cssClass: string
  ) { }
}