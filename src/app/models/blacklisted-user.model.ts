export interface BlacklistedUser {
  name: string;
  email: string;
  phone: string;
  banDate: Date;
  bannedBy: string;
  details: string;
}

export interface RemoveFromBlacklistRequest {
  email: string;
  phone: string;
}

export interface RemoveFromBlacklistResponse {
  error?: string;
}