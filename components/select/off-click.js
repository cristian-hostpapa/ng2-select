"use strict";
var core_1 = require('@angular/core');
var OffClickDirective = (function () {
    function OffClickDirective() {
    }
    /* tslint:enable */
    // @HostListener('click', ['$event']) public onClick($event: MouseEvent): void {
    //   $event.stopPropagation();
    // }
    OffClickDirective.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { document.addEventListener('click', _this.offClickHandler); }, 0);
    };
    OffClickDirective.prototype.ngOnDestroy = function () {
        document.removeEventListener('click', this.offClickHandler);
    };
    OffClickDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[offClick]'
                },] },
    ];
    /** @nocollapse */
    OffClickDirective.ctorParameters = function () { return []; };
    OffClickDirective.propDecorators = {
        'offClickHandler': [{ type: core_1.Input, args: ['offClick',] },],
    };
    return OffClickDirective;
}());
exports.OffClickDirective = OffClickDirective;
