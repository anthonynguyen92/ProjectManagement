import { Component, Injector, ViewEncapsulation, OnInit } from '@angular/core';
//import { AppComponentBase } from '@shared/app-component-base';
//import { ConfigurationServiceProxy, ChangeUiThemeInput } from '@shared/service-proxies/service-proxies';

class UiThemeInfo {
    constructor(
        public name: string,
        public cssClass: string
    ) { }
}

@Component({
    templateUrl: './right-sidebar.component.html',
    selector: 'right-sidebar',
    encapsulation: ViewEncapsulation.None
})
export class RightSideBarComponent implements OnInit {

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
        injector: Injector
    ) {
        //super(injector);
    }

    ngOnInit(): void {
        //this.selectedThemeCssClass = this.setting.get('App.UiTheme');
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

