"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import inquirer from "inquirer";
var dragonhealth = Math.floor(Math.random() * 100) + 1;
var humanhealth = Math.floor(Math.random() * 100) + 1;
var damage = Math.floor(Math.random() * 20) + 1;
function startgame() {
    return __awaiter(this, void 0, void 0, function () {
        var action, dragonDamage, humanDamage;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(dragonhealth > 0 && humanhealth > 0)) return [3 /*break*/, 2];
                    return [4 /*yield*/, inquirer.prompt([{
                                name: "action",
                                message: "What do you want to do?",
                                type: 'list',
                                choices: ["Fight", "Run"]
                            }])];
                case 1:
                    action = _a.sent();
                    if (action.action === "Fight") {
                        console.log('You chose to fight. Good luck!');
                        console.log("Your health =", humanhealth);
                        console.log("Dragon's health =", dragonhealth);
                        console.log("Damage =", damage);
                        dragonDamage = Math.floor(Math.random() * damage) + 1;
                        console.log("You hit the dragon with", dragonDamage, "damage!");
                        dragonhealth -= dragonDamage;
                        humanDamage = Math.floor(Math.random() * damage) + 1;
                        console.log("The dragon attacks you with", humanDamage, "damage!");
                        humanhealth -= humanDamage;
                    }
                    else if (action.action === "Run") {
                        console.log('You chose to run. Coward!');
                        console.log('You lost the game.');
                        return [3 /*break*/, 2]; // End the game if the player chooses to run
                    }
                    if (dragonhealth <= 0) {
                        console.log('You won the game.');
                        return [3 /*break*/, 2]; // End the game if the dragon is defeated
                    }
                    if (humanhealth <= 0) {
                        console.log("You lost the game.");
                        return [3 /*break*/, 2]; // End the game if the human is defeated
                    }
                    return [3 /*break*/, 0];
                case 2: return [2 /*return*/];
            }
        });
    });
}
startgame();
