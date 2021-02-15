import { NgModule } from '@angular/core';
import { RatesSymbolPipe } from './rates-symbol.pipe';

@NgModule({
    imports: [],
    declarations: [
        RatesSymbolPipe,
    ],
    exports: [
        RatesSymbolPipe,
    ],
})

export class PipesModule {
    static forRoot() {
        return {
            ngModule: PipesModule,
            providers: [],
        };
    }
}
