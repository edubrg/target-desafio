import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

registerLocaleData(ptBr);

await bootstrapApplication(App, appConfig);
