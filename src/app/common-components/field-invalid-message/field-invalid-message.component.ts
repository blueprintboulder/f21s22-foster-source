import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-field-invalid-message',
  templateUrl: './field-invalid-message.component.html',
  styleUrls: ['./field-invalid-message.component.scss'],
})
export class FieldInvalidMessageComponent {
  @Input() form: FormGroup;
  @Input() field: string;
  @Input() errors: string[];
  @Input() messages: string[];

  getErrorByIndex(i: number): any | undefined {
    if (this.form && this.form.get(this.field) && this.form.get(this.field)?.errors) {
      const errors = this.form!.get(this.field)!.errors;
      return (errors as any)[this.errors[i]];
    }
    return undefined;
  }

  getMessageByIndex(i: number): string | undefined {
    return this.messages[i];
  }
}
