export interface Message {
  from: string;
  to: string;
  message: string;
}

export interface JsonWebToken {
  context_id: string;
  token_type: string;
  exp: number;
  sub: string;
  executor_public_key: string;
}