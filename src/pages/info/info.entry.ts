import { pageStartup } from 'angular-miniprogram';
import { InfoComponent } from './info.component';
import { InfoModule } from './info.module';
console.log('info-start');

pageStartup(InfoModule, InfoComponent);
console.log('info-end');
