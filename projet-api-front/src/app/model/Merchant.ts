export interface Merchant {
  _id: string;
  name: string;
  websiteUrl: string;
  affiliateRate?: number;
  conditions?: string;
  createdAt: string;
  updatedAt: string;
}