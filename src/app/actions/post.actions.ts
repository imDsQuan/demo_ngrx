import { Action } from '@ngrx/store';

export class EditText implements Action {
  readonly type = 'Edit';

  /// user a constructor to send a payload with the action
  constructor(public payload: string) {}
}

export class Upvote implements Action {
  readonly type = 'Upvote';
}

export class Downvote implements Action {
  readonly type = 'Downvote';
}

export class Reset implements Action {
  readonly type = 'Reset';
}

export type All
  = Upvote
  | Downvote
  | Reset
  | EditText;
