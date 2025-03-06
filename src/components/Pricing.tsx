import { Check, AlertCircle } from 'lucide-react';

const Pricing = () => {
  const tiers = [
    {
      name: 'Basic',
      price: 15000,
      description: 'Perfect for small businesses and personal brands',
      features: [
        'Responsive Single Page Website',
        'Basic SEO Optimization',
        '3 Content Sections',
        'Contact Form',
        'Mobile-Friendly Design',
        '2 Rounds of Revisions',
      ],
      limitations: [
        'No Custom Animations',
        'No Database Integration',
        'Basic Hosting Only',
      ],
      recommended: false,
      deliveryTime: '1-2 weeks',
    },
    {
      name: 'Professional',
      price: 50000,
      description: 'Ideal for growing businesses and startups',
      features: [
        'Multi-Page Website (Up to 5 pages)',
        'Advanced SEO Optimization',
        'Custom Animations',
        'Blog Integration',
        'Social Media Integration',
        'Email Newsletter Setup',
        'Premium Hosting',
        'SSL Certificate',
        '4 Rounds of Revisions',
      ],
      limitations: ['Limited Database Features', 'Basic Analytics'],
      recommended: true,
      deliveryTime: '2-3 weeks',
    },
    {
      name: 'Enterprise',
      price: 100000,
      description: 'Full-featured solution for established businesses',
      features: [
        'Custom Web Application',
        'Unlimited Pages',
        'Full Database Integration',
        'User Authentication',
        'Admin Dashboard',
        'Advanced Analytics',
        'Payment Gateway Integration',
        'Custom API Development',
        'Advanced Security Features',
        'Premium Support',
        'Unlimited Revisions',
      ],
      limitations: [],
      recommended: false,
      deliveryTime: '4-6 weeks',
    },
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-MU', { style: 'currency', currency: 'MUR' }).format(price);
  };

  const handleGetStarted = (tier: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      const messageInput = document.getElementById('message') as HTMLTextAreaElement;
      if (messageInput) {
        messageInput.value = `I'm interested in the ${tier} package.`;
      }
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            Choose the perfect package for your project needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 ${
                tier.recommended
                  ? 'bg-white dark:bg-gray-900 shadow-xl scale-105 border-2 border-blue-500 dark:border-blue-400'
                  : 'bg-white dark:bg-gray-900 shadow-lg'
              }`}
            >
              {tier.recommended && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                  Recommended
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                  {tier.name}
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                    {formatPrice(tier.price)}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">
                  {tier.description}
                </p>
                <div className="mb-8">
                  <div className="font-medium text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                    Features included:
                  </div>
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start text-gray-600 dark:text-gray-300 transition-colors duration-300"
                      >
                        <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {tier.limitations.length > 0 && (
                  <div className="mb-8">
                    <div className="font-medium text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                      Limitations:
                    </div>
                    <ul className="space-y-3">
                      {tier.limitations.map((limitation, limitIndex) => (
                        <li
                          key={limitIndex}
                          className="flex items-start text-gray-600 dark:text-gray-300 transition-colors duration-300"
                        >
                          <AlertCircle className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0" />
                          <span>{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="text-sm text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">
                  Estimated delivery time: {tier.deliveryTime}
                </div>
                <button
                  onClick={() => handleGetStarted(tier.name)}
                  className="w-full py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-300 transform hover:scale-105"
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
            Need a custom solution?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
          >
            Contact for Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
