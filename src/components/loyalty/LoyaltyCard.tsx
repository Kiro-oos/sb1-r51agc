import React from 'react';
import { LoyaltyTier } from '../../types';
import { useStore } from '../../store/useStore';
import { LoyaltyBenefit } from './LoyaltyBenefit';

interface LoyaltyCardProps {
  tier: LoyaltyTier;
}

export const LoyaltyCard: React.FC<LoyaltyCardProps> = ({ tier }) => {
  const loyaltyPoints = useStore((state) => state.loyaltyPoints);
  const isCurrentTier = loyaltyPoints >= tier.minimumPoints;

  return (
    <div className={`p-6 rounded-lg shadow-md ${isCurrentTier ? 'bg-purple-50 border-2 border-purple-500' : 'bg-white'}`}>
      <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
      <p className="text-gray-600 mb-4">{tier.minimumPoints} points required</p>
      <ul className="space-y-2">
        {tier.benefits.map((benefit, index) => (
          <LoyaltyBenefit key={index} benefit={benefit} />
        ))}
      </ul>
    </div>
  );
};