import { isString, registerDecorator, ValidationOptions, isObject } from "class-validator";

export interface Button {
  label: string;
  value: string;
}

function isButton(obj: unknown): obj is Button {
  return isObject(obj) && isString((obj as Button).label) && isString((obj as Button).value);
}

export function IsButton(validationOptions?: ValidationOptions) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function decorator(object: Object, propertyName: string): void {
    registerDecorator({
      name: "IsButton",
      target: object.constructor,
      propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: unknown): boolean {
          return isButton(value);
        },

        defaultMessage() {
          return `$property must define label and value`;
        },
      },
    });
  };
}
