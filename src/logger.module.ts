import { ModuleWithProviders, NgModule } from '@angular/core';
import { silentLoggerServiceProvider } from './silent-logger.service.provider';

@NgModule({})
export class LoggerModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: LoggerModule,
            providers: [ silentLoggerServiceProvider ]
        }
    }
}
