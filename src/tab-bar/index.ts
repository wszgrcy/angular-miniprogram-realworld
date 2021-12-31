import { pageStartup } from 'angular-miniprogram';
import { TabBarComponent } from './tab-bar.component';
import { TabBarModule } from './tab-bar.module';
pageStartup(TabBarModule, TabBarComponent, { useComponent: true });
