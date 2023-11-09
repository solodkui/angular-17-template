// * Base
import { bootstrapApplication } from '@angular/platform-browser';

// * Config
import { config } from './app/app.config.server';

// * Components
import AppComponent from './app/app.component';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
