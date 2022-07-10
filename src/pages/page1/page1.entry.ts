import { pageStartup } from 'angular-miniprogram';
import { Page1Component } from './page1.component';
import { Page1Module } from './page1.module';

console.log('page1-start');
pageStartup(Page1Module, Page1Component);
console.log('page1-end');
