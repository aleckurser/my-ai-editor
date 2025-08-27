import React from 'react';

const pricingPlans = [
  {
    title: 'Free',
    price: 'Rs.0',
    frequency: '/month',
    features: [
      'Basic AI tools',
      '5 free credits',
      'Standard support',
      'Limited access to templates',
    ],
    buttonText: 'Get Started',
    buttonColor: 'bg-black text-white',
  },
  {
    title: 'Pro',
    price: 'Rs.1500',
    frequency: '/month',
    features: [
      'All basic features',
      '100 credits per month',
      'Priority support',
      'Full access to templates',
    ],
    buttonText: 'Start 14-day Free Trial',
    buttonColor: 'bg-blue-500 text-white',
  },
  {
    title: 'Enterprise',
    price: 'Custom',
    frequency: '',
    features: [
      'All Pro features',
      'Unlimited credits',
      'Dedicated manager',
      'Custom integrations',
    ],
    buttonText: 'Contact Us',
    buttonColor: 'bg-gray-700 text-white',
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8 pt-24">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animate-fadeInUp">
          Simple, Transparent Pricing
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto animate-fadeInUp delay-200">
          Choose a plan that's right for you. Get started for free and upgrade as you grow.
        </p>
      </div>

      <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`bg-gray-100 rounded-lg shadow-md p-8 flex flex-col justify-between transform hover:scale-105 transition-transform duration-300 animate-fadeInUp`}
            style={{ animationDelay: `${200 * index}ms` }}
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">{plan.title}</h2>
              <div className="text-4xl font-extrabold mb-2">
                {plan.price}
              </div>
              <p className="text-gray-500 text-lg">{plan.frequency}</p>
            </div>
            <ul className="list-none text-left space-y-2 my-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 011.414-.707L10 10.586l1.586-1.586A1 1 0 1113 11.414L10.707 13.707a1 1 0 01-1.414 0L7 11.414a1 1 0 010-1.414z" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className={`w-full px-6 py-3 rounded-md font-semibold ${plan.buttonColor}`}>
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}