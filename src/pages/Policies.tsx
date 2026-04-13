import { useParams, Link } from "react-router-dom";

const policies: Record<string, { title: string; content: string[] }> = {
  shipping: {
    title: "Shipping Policy",
    content: [
      "At Mag Traders, we offer fast and reliable shipping across the United Kingdom. We understand the importance of receiving your IT hardware promptly and in perfect condition.",
      "Standard Delivery: 2-3 business days (Free on orders over £500). Express Delivery: Next business day (£9.99). Same Day Delivery: Available for London orders placed before 12:00 PM (£19.99).",
      "All orders are carefully packaged using anti-static bags and protective materials to ensure your components arrive safely. Tracking information is provided for all shipments.",
      "For international shipping enquiries, please contact our sales team at sales@magtraders.co.uk. We ship to select European destinations with delivery times of 5-7 business days.",
      "Orders placed before 2:00 PM on business days are dispatched the same day. Weekend orders are processed on the following Monday.",
    ],
  },
  returns: {
    title: "Return Policy",
    content: [
      "We want you to be completely satisfied with your purchase from Mag Traders. If for any reason you're not happy, we offer a straightforward return process.",
      "You may return most items within 24 hours of delivery for a full refund or exchange. Items must be in their original packaging, unused, and in resalable condition.",
      "To initiate a return, please contact our support team with your order number. We will provide a return authorisation number and instructions for sending the item back.",
      "Refunds are processed within 5-7 business days of receiving the returned item. The refund will be issued to the original payment method.",
      "Please note: Custom-configured items, opened software, and items marked as non-returnable are excluded from our return policy. Defective items are covered under our warranty policy.",
    ],
  },
  billing: {
    title: "Billing Policy",
    content: [
      "Mag Traders offers transparent and secure billing for all purchases. We accept major credit/debit cards, bank transfers, and PayPal.",
      "All prices are listed in GBP (£) and include VAT where applicable. VAT invoices are provided with every order for business customers.",
      "Trade account customers enjoy 30-day payment terms subject to credit approval. Please contact our sales team to apply for a trade account.",
      "Payment is processed at the time of order placement. For pre-order items, payment is taken when the item is dispatched.",
      "We use industry-standard encryption to protect your payment information. Your financial data is never stored on our servers.",
    ],
  },
  privacy: {
    title: "Privacy Policy",
    content: [
      "Mag Traders is committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information.",
      "We collect information necessary to process your orders, including name, address, email, and payment details. This information is used solely for order fulfilment and customer communication.",
      "We do not sell or share your personal information with third parties for marketing purposes. Information may be shared with delivery partners to fulfil your orders.",
      "Our website uses cookies to improve your browsing experience and analyse site traffic. You can manage cookie preferences through your browser settings.",
      "You have the right to access, correct, or delete your personal data. Please contact us at privacy@magtraders.co.uk for any data-related requests.",
    ],
  },
  terms: {
    title: "Terms & Conditions",
    content: [
      "By using the Mag Traders website and purchasing our products, you agree to the following terms and conditions.",
      "All products are subject to availability. We reserve the right to limit quantities and refuse orders at our discretion. Prices are subject to change without notice.",
      "Product descriptions and images are provided for informational purposes. While we strive for accuracy, slight variations may occur. Please verify specifications before purchasing.",
      "Mag Traders shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products. Our liability is limited to the purchase price of the item.",
      "These terms are governed by the laws of England and Wales. Any disputes will be resolved through the courts of England and Wales.",
    ],
  },
};

const PoliciesPage = () => {
  const { type } = useParams();
  const policy = policies[type || ""] || policies.shipping;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Home</Link> / <span className="text-foreground">{policy.title}</span>
      </div>

      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-3xl font-bold text-foreground">{policy.title}</h1>
        <div className="space-y-6">
          {policy.content.map((paragraph, i) => (
            <p key={i} className="leading-relaxed text-muted-foreground">{paragraph}</p>
          ))}
        </div>

        {/* Policy nav */}
        <div className="mt-12 rounded-lg border border-border bg-secondary/50 p-6">
          <h3 className="mb-4 text-sm font-semibold text-foreground">Other Policies</h3>
          <div className="flex flex-wrap gap-2">
            {Object.entries(policies).map(([key, val]) => (
              <Link
                key={key}
                to={`/policies/${key}`}
                className={`rounded-md px-4 py-2 text-sm transition-colors ${
                  type === key
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {val.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliciesPage;
