"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostMessageInput = void 0;
const validations_1 = require("@alanszp/validations");
const class_validator_1 = require("class-validator");
const PostMessageBodyValidator_1 = require("../validators/PostMessageBodyValidator");
class PostMessageInput extends validations_1.BaseModel {
    constructor(body) {
        var _a, _b;
        super();
        this.employeeId = body.employeeId;
        this.body = body.body;
        this.askText = (_a = body.askText) !== null && _a !== void 0 ? _a : undefined;
        this.buttons = (_b = body.buttons) !== null && _b !== void 0 ? _b : undefined;
        this.webhookContext = body.webhookContext;
        this.webhookUrl = body.webhookUrl;
    }
    validate() {
        const _super = Object.create(null, {
            validate: { get: () => super.validate }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield _super.validate.call(this);
            if (this.askText === true && this.buttons !== undefined) {
                throw validations_1.ModelValidationError.from({
                    property: "askText",
                    constraints: {
                        interactionNotAllowed: "cannot send both askText and buttons props",
                    },
                });
            }
        });
    }
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], PostMessageInput.prototype, "employeeId", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], PostMessageInput.prototype, "body", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], PostMessageInput.prototype, "webhookUrl", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Object)
], PostMessageInput.prototype, "askText", void 0);
__decorate([
    PostMessageBodyValidator_1.IsButton({ each: true }),
    class_validator_1.IsOptional(),
    __metadata("design:type", Object)
], PostMessageInput.prototype, "buttons", void 0);
__decorate([
    class_validator_1.IsObject(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Object)
], PostMessageInput.prototype, "webhookContext", void 0);
exports.PostMessageInput = PostMessageInput;
