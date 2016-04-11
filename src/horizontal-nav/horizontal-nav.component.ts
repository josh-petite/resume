import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { MATERIAL_DIRECTIVES } from 'ng2-material/all';

@Component({
    selector: 'horizontal-nav',
    templateUrl: 'src/horizontal-nav/view.html',
    directives: [ROUTER_DIRECTIVES, MATERIAL_DIRECTIVES]
})
export class HorizontalNavComponent {}
