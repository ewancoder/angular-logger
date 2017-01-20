import { FactoryProvider } from '@angular/core';
import { LoggerService } from './logger.service';

let silentLoggerServiceFactory = () => {
    return new LoggerService([]);
};

export let silentLoggerServiceProvider: FactoryProvider = {
    provide: LoggerService,
    useFactory: silentLoggerServiceFactory
};
