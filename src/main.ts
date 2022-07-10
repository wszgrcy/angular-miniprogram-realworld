import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { platformMiniProgram } from 'angular-miniprogram';
import 'zone.js';
import { MainModule } from './main.module';
console.log('init-start');
if (environment.production) {
  enableProdMode();
}

platformMiniProgram()
  .bootstrapModule(MainModule)
  .catch((err) => console.error(err));
console.log('init-end');
