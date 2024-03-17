import { useState } from 'react';
import { useRouter } from 'next/router';

const PricingPage: React.FC = () => {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handlePlanSelection = (plan: string) => {
    setSelectedPlan(plan);
  };

  const handlePayment = () => {
    // Redirect to Stripe (replace with your Stripe URL)
    window.location.href = 'https://stripe.com';
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-lg w-full">
        <div className="flex justify-between mb-8">
          <div
            className={`glass p-8 rounded-lg shadow-lg text-center ${
              selectedPlan === '$20' ? 'bg-blue-200' : 'bg-white'
            }`}
            onClick={() => handlePlanSelection('$20')}
          >
            <h2 className="text-2xl font-semibold mb-4">$20 Plan</h2>
            <ul className="text-left">
              <li className="mb-2">Feature 1</li>
              <li className="mb-2">Feature 2</li>
              <li className="mb-2">Feature 3</li>
            </ul>
          </div>
          <div
            className={`glass p-8 rounded-lg shadow-lg text-center ${
              selectedPlan === '$50' ? 'bg-blue-200' : 'bg-white'
            }`}
            onClick={() => handlePlanSelection('$50')}
          >
            <h2 className="text-2xl font-semibold mb-4">$50 Plan</h2>
            <ul className="text-left">
              <li className="mb-2">Feature 1</li>
              <li className="mb-2">Feature 2</li>
              <li className="mb-2">Feature 3</li>
              <li className="mb-2">Feature 4</li>
              <li className="mb-2">Feature 5</li>
            </ul>
          </div>
        </div>
        <button
          className="glass bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
          onClick={handlePayment}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default PricingPage;
