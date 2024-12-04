import React from 'react';

interface LoyaltyBenefitProps {
  benefit: string;
}

export const LoyaltyBenefit: React.FC<LoyaltyBenefitProps> = ({ benefit }) => {
  return (
    <li className="flex items-center">
      <svg className="w-4 h-4 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      </svg>
      {benefit}
    </li>
  );
};