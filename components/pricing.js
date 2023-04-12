import { FaCheck, FaStar, FaServer } from "react-icons/fa";
function Pricing() {
  const PricingTier = ({ title, subtitle, items }) => (
    <div className="p-4 w-full sm:w-full md:w-1/2 lg:w-1/2">
      <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative bg-white shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 overflow-hidden">
        <h2 className="text-3xl font-medium text-gray-900 pb-4 text-center">
          {title}
        </h2>
        <hr className="my-2" />
        <h3 className="text-gray-500 pb-4 text-2xl text-center">{subtitle}</h3>
        <div className="flex-grow">
          <ul className="space-y-2">
            {items.map((item, idx) => (
              <li
                key={idx}
                className="text-gray-600 leading-relaxed flex items-center justify-center"
              >
                <FaCheck className="text-green-500 mr-2" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
  const tiers = [
    {
      title: "STARTER",
      subtitle: "Beginner",
      items: [
        "Basic Website",
        "Responsive Design",
        "SEO Optimization",
        "Email Support",
      ],
    },
    {
      title: "PROFESSIONAL",
      subtitle: "Advanced",
      items: [
        "eCommerce Store",
        "Custom Functionality",
        "API Integration",
        "Priority Support",
      ],
    },
    {
      title: "ENTERPRISE",
      subtitle: "Elite",
      items: [
        "Custom Web Application",
        "API Integration & Automation",
        "24/7 Premium Support",
        "Advanced Security & Performance",
      ],
    },
    {
      title: "ADD-ONS",
      subtitle: "Boost",
      items: [
        "SEO & Digital Marketing",
        "Logo Design & Branding",
        "Social Media Management",
        "Content Creation & Copywriting",
      ],
    },
  ];
  return (
    <section className="text-gray-600 body-font bg-gradient-to-br from-blue-100 to-indigo-200">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Our Pricing Tiers
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-600">
            Choose from our range of pricing tiers to find the perfect solution
            for your business needs.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          {tiers.map((tier) => (
            <PricingTier
              key={tier.title}
              title={tier.title}
              subtitle={tier.subtitle}
              items={tier.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
