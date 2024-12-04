import { LoyaltyTier } from '../types';

export const getCurrentTier = (points: number, tiers: LoyaltyTier[]): LoyaltyTier => {
  return [...tiers]
    .reverse()
    .find(tier => points >= tier.minimumPoints) || tiers[0];
};