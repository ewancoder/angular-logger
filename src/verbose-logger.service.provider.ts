import { FactoryProvider } from '@angular/core';
import { LoggerService } from './logger.service';

let verboseLoggerServiceFactory = () => {
    return new LoggerService(undefined);
};

export let verboseLoggerServiceProvider: FactoryProvider = {
    provide: LoggerService,
    useFactory: verboseLoggerServiceFactory
};
