import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

console.log(platformBrowserDynamic)

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
