import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TabBarService } from 'src/service/tab-bar.service';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss'],
})
export class TabBarComponent implements OnInit {
  // mpComponentOptions 为使用组件函数传参(Component),
  // mpPageOptions 为使用页面函数传参(Page),
  static mpComponentOptions: WechatMiniprogram.Component.Options<
    {},
    {},
    {},
    {},
    true
  > = {
    lifetimes: {
      created: () => {
      },
      attached: () => {
      },
    },
  };
  selected = 0;
  color = '#7A7E83';
  selectedColor = '#3cc51f';
  list = [
    {
      pagePath: '/pages/page1/page1-entry',
      // iconPath: '/image/icon_component.png',
      // selectedIconPath: '/image/icon_component_HL.png',
      text: 'list',
    },
    {
      pagePath: '/pages/info/info-entry',
      // iconPath: '/image/icon_API.png',
      // selectedIconPath: '/image/icon_API_HL.png',
      text: 'info',
    },
  ];
  constructor(
    private cd: ChangeDetectorRef,
    private tabBarService: TabBarService
  ) {}

  ngOnInit() {
    this.tabBarService.subject.subscribe((index) => {
      this.selected = index;
    });
  }

  switchTab(e: any, index: number) {
    this.tabBarService.subject.next(index);
    wx.switchTab({ url: e.pagePath });
  }
}
