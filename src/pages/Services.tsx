import React from 'react';
import Nav from '../components/Nav';

const Services: React.FC = () => {
    const Divider = () => <hr className="m-1 " />;
  return (
    <div className="about-container">
      <Nav />
      <h1 className="text-3xl font-bold text-blue-900 mb-6 text-left">Services</h1>
      <p className="list-disc list-inside text-left">
<strong>Buyer Representation <br /></strong>
Guidance through every step of the home buying process—from the first showing to the final signature.
<Divider />
<strong>Seller Representation <br /></strong>
Expert marketing, pricing strategy, and negotiation to get top value for your property.
<Divider />
<strong>Luxury Home Sales & Purchases <br /></strong>
Discreet, dedicated service for high-end and custom properties.
<Divider />
<strong>New Construction <br /></strong>
Experience working directly with builders and navigating pre-construction deals.
<Divider />
<strong>Relocation Assistance <br /></strong>
Whether you're moving to Massachusetts or heading elsewhere, I help make transitions smooth and stress-free.
<Divider />
<strong>Investment Properties <br /></strong>
Find and evaluate residential or commercial investment opportunities.
<Divider />
<strong>Vacation & Second Homes <br /></strong>
From beachside retreats to weekend getaways—find your perfect escape.
<Divider />
<strong>Farm & Land Sales <br /></strong>
Knowledgeable support for those looking to buy or sell rural, agricultural, or undeveloped land.
<Divider />
<strong>Condominiums & Townhomes <br /></strong>
Whether it’s your first home or a downsizing move, I’ll help you find the right fit.
<Divider />
<strong>Lakefront & Beach Properties <br /></strong>
Specialized insight into waterfront living across Massachusetts and beyond.
<Divider />
<strong>Business Opportunities <br /></strong>
Helping entrepreneurs and investors buy and sell commercial or mixed-use properties.
<Divider />
<strong>Market Analysis & Home Valuation <br /></strong>
Detailed reports to help you understand your home’s market value and trends.</p>
    </div>
  );
};

export default Services;
