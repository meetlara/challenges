import { BaseModel, ModelValidationError } from "@alanszp/validations";
import { IsBoolean, IsNotEmpty, IsObject, IsOptional, IsString } from "class-validator";
import { Button, IsButton } from "../validators/PostMessageBodyValidator";

export interface PostMessageBody {
  employeeId: string;
  body: string;
  askText?: boolean;
  buttons?: Button[];
  webhookContext: Record<string, unknown>;
  webhookUrl: string;
}

export class PostMessageInput extends BaseModel {
  @IsString()
  @IsNotEmpty()
  public employeeId: string;

  @IsString()
  @IsNotEmpty()
  public body: string;

  @IsString()
  @IsNotEmpty()
  public webhookUrl: string;

  @IsBoolean()
  @IsOptional()
  public askText: boolean | undefined;

  @IsButton({ each: true })
  @IsOptional()
  public buttons: Button[] | undefined;

  @IsObject()
  @IsOptional()
  public webhookContext: Record<string, unknown>;

  constructor(body: PostMessageBody) {
    super();
    this.employeeId = body.employeeId;
    this.body = body.body;
    this.askText = body.askText ?? undefined;
    this.buttons = body.buttons ?? undefined;
    this.webhookContext = body.webhookContext;
    this.webhookUrl = body.webhookUrl;
  }

  public async validate(): Promise<void> {
    await super.validate();
    if (this.askText === true && this.buttons !== undefined) {
      throw ModelValidationError.from({
        property: "askText",
        constraints: {
          interactionNotAllowed: "cannot send both askText and buttons props",
        },
      });
    }
  }
}
