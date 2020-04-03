# ui-custom-lib

This is an UI custom library based on Adminlte library with purpose for personal use, if you need a full template of Primeng please visit https://github.com/mledour/angular-admin-lte

## Installation

Run:
```
npm install ad-custom-lib
```

In app.module.ts:
```
import { AdCustomLibModule } from 'ad-custom-lib';
```
----Note----
If you encounter the following error:
```
Uncaught TypeError: Object(...) is not a function
    at ui-custom-lib.js:19
    at Module../node_modules/ui-custom-lib/fesm5/ui-custom-lib.js (ui-custom-lib.js:21)
```
Plesea run cmd: 
```
npm uninstall @angular/core
After:
npm install -S @angular/core
```
And after If you encounter the following error:
```
ERROR NullInjectorError: StaticInjectorError(AppModule)[RouterScroller -> ViewportScroller]: 
  StaticInjectorError(Platform: core)[RouterScroller -> ViewportScroller]: 
```
Plesea run cmd update angular to version 8: 
```
ng update @angular/cli @angular/core
```

