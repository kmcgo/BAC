"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var drink_reducer_1 = require("./reducers/drink.reducer");
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var drinks_list_component_1 = require("./drinks-list/drinks-list.component");
var scoreboard_component_1 = require("./scoreboard/scoreboard.component");
var forms_2 = require("@angular/forms");
var store_devtools_1 = require("@ngrx/store-devtools");
var environment_1 = require("../environments/environment");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                forms_1.ReactiveFormsModule,
                forms_2.FormsModule,
                store_1.StoreModule.forRoot({
                    tutorial: drink_reducer_1.reducer
                }),
                router_1.RouterModule.forRoot([
                    { path: '', component: home_component_1.HomeComponent },
                    { path: 'drinks', component: drinks_list_component_1.DrinksComponent },
                    { path: 'scoreboard', component: scoreboard_component_1.ScoreboardComponent },
                ]),
                store_devtools_1.StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment_1.environment.production })
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                drinks_list_component_1.DrinksComponent,
                scoreboard_component_1.ScoreboardComponent,
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map