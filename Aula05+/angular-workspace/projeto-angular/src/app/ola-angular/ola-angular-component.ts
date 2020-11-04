import {Component} from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
    selector: "ola-angular",
    templateUrl: "./ola-angular.component.html",
    styleUrls: ['./ola-angular.component.css']
})

export class OlaAngularComponent{
    framework = "Angular";
}