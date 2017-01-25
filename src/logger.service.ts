import { Injectable, Optional } from '@angular/core';

@Injectable()
export class LoggerService {
    constructor(@Optional() private readonly tags: string[]) {
        this.log('LoggerService initialized.', ['logger', 'service', 'init']);
    }

    log(message: string, tags?: string[], color?: string): void {
        if (this.tags) {
            if (this.isShown(tags)) {
                if (color) {
                    console.log(`%c ${message}`, `color: ${color}`);
                    return;
                }

                console.log(message);
                return;
            }

            return;
        }

        if (color) {
            console.log(`%c ${message}`, `color: ${color}`);
            return
        }

        console.log(message);
    }

    error(message: string): void {
        console.error(message);
    }

    private isShown(tags: string[]): boolean {
        if (!tags) {
            return false;
        }

        for (var i = 0, length = tags.length; i < length; i++) {
            if (this.tags.indexOf(tags[i]) !== -1) {
                return true;
            }
        }

        return false;
    }
}
