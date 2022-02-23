import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Reply } from '../../models/forum.models';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service/auth.service';

export interface ReplyEvent {
  replyingToUsername: string;
  replyingToText: string;
}

@Component({
  selector: 'app-thread-reply',
  templateUrl: './thread-reply.component.html',
  styleUrls: ['./thread-reply.component.scss'],
})
export class ThreadReplyComponent implements OnInit {
  public profileImageSrc = 'assets/images/blank-profile-photo.jpg';
  public userHasLiked = false;
  public isOwnReply = false;
  public textSelected = false;

  @Input() reply: Reply;
  @Input() author: string;

  @Output() replyEvent: EventEmitter<ReplyEvent> = new EventEmitter<ReplyEvent>();

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    if (this.reply) {
      this.isOwnReply = this.authService.getToken()?.id === this.reply.account.id;
    }
  }
  getParsedDate(): string {
    return formatDate(this.reply.createdAt, 'MM/dd/yyyy - hh:mm', 'en-US');
  }

  visitProfile(): void {
    if (!this.reply.account.profileId) {
      return;
    }
    this.router.navigate([`/user/${this.reply.account.profileId}`]);
  }

  imgError(): void {
    this.profileImageSrc = 'assets/images/blank-profile-photo.jpg';
  }

  likeUnlikeReply(): void {
    this.userHasLiked = !this.userHasLiked;
  }

  clickReply() {
    this.replyEvent.emit({
      replyingToUsername: this.reply.account.username,
      replyingToText: this.reply.body,
    });
  }

  removeOwnReply(): void {
    return;
  }

  clicked(event: Event): void {
    const e = event as PointerEvent;
    if (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      !e.composedPath()[0].classList.contains('inner-text')
    ) {
      this.textSelected = false;
    }
  }

  getSelectedText() {
    let text = '';
    if (typeof window.getSelection !== 'undefined') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      text = window.getSelection().toString();
      // eslint-disable-next-line eqeqeq
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
    } else if (typeof document.selection !== 'undefined' && document.selection.type === 'Text') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      text = document.selection.createRange().text;
    }
    return text;
  }

  doSomethingWithSelectedText() {
    const selectedText = this.getSelectedText();
    if (selectedText) {
      this.textSelected = true;
    } else {
      this.textSelected = false;
    }
  }

  replyToSelected(): void {
    if (this.getSelectedText()) {
      this.replyEvent.emit({
        replyingToUsername: this.reply.account.username,
        replyingToText: this.getSelectedText(),
      });
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      document.getSelection().removeAllRanges();
    }
  }
}
