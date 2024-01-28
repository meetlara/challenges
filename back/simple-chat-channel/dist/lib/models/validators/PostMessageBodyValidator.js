"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsButton = void 0;
const class_validator_1 = require("class-validator");
function isButton(obj) {
    return class_validator_1.isObject(obj) && class_validator_1.isString(obj.label) && class_validator_1.isString(obj.value);
}
function IsButton(validationOptions) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function decorator(object, propertyName) {
        class_validator_1.registerDecorator({
            name: "IsButton",
            target: object.constructor,
            propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value) {
                    return isButton(value);
                },
                defaultMessage() {
                    return `$property must define label and value`;
                },
            },
        });
    };
}
exports.IsButton = IsButton;
