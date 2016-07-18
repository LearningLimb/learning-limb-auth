import {
    it,
    inject,
    describe,
    beforeEachProviders,
    expect
} from '@angular/core/testing';

import { AppComponent } from '../../../src/client/components/app';

describe('App', () => {

    beforeEachProviders(() => [
        AppComponent
    ]);

    it('should instantiate a new AppComponent', function() {
        expect(new AppComponent()).toBeDefined();
    });

});
