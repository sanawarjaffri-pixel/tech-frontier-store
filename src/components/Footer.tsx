import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const socials = [
  { name: "Facebook", Icon: Facebook, href: "#" },
  { name: "Twitter", Icon: Twitter, href: "#" },
  { name: "LinkedIn", Icon: Linkedin, href: "#" },
  { name: "Instagram", Icon: Instagram, href: "#" },
];

const Footer = () => {
  return (
    <footer className="surface-dark">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="mb-4 inline-flex items-center" aria-label="Mag Traders home">
              <img
                src={logo}
                alt="Mag Traders logo"
                className="h-10 w-auto sm:h-11 object-contain brightness-0 invert"
                loading="lazy"
                decoding="async"
              />
            </Link>
            <p className="mb-6 mt-4 text-sm leading-relaxed text-surface-dark-foreground/60">
              Your trusted source for quality IT hardware and computer components.
              Serving businesses and professionals across the UK.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ name, Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-dark-foreground/10 text-surface-dark-foreground/70 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/30"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-surface-dark-foreground">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Shop", path: "/shop" },
                { name: "Categories", path: "/categories" },
                { name: "About Us", path: "/about" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-surface-dark-foreground/60 transition-colors hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-surface-dark-foreground">
              Policies
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Shipping Policy", path: "/policies/shipping" },
                { name: "Return Policy", path: "/policies/returns" },
                { name: "Billing Policy", path: "/policies/billing" },
                { name: "Privacy Policy", path: "/policies/privacy" },
                { name: "Terms & Conditions", path: "/policies/terms" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-surface-dark-foreground/60 transition-colors hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-surface-dark-foreground">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-surface-dark-foreground/60">
                  123 Tech Lane, London, EC1A 1BB, United Kingdom
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-surface-dark-foreground/60">+44 20 7123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-surface-dark-foreground/60">info@magtraders.co.uk</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="mb-3 text-sm font-medium text-surface-dark-foreground">Newsletter</h4>
              <form className="flex flex-col gap-2 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email"
                  aria-label="Email address"
                  className="h-10 w-full flex-1 rounded-md border border-surface-dark-foreground/20 bg-surface-dark-foreground/5 px-3 text-sm text-surface-dark-foreground placeholder:text-surface-dark-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="h-10 shrink-0 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-md hover:shadow-primary/30"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-surface-dark-foreground/10 pt-8">
          <div className="mb-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              { name: "Visa", label: "VISA", color: "text-[#1A1F71]" },
              { name: "Mastercard", label: "MC", color: "text-[#EB001B]" },
              { name: "PayPal", label: "PayPal", color: "text-[#003087]" },
              { name: "American Express", label: "AMEX", color: "text-[#2E77BC]" },
              { name: "Discover", label: "Discover", color: "text-[#FF6000]" },
              { name: "Maestro", label: "Maestro", color: "text-[#0099DF]" },
            ].map((pm) => (
              <div
                key={pm.name}
                aria-label={pm.name}
                title={pm.name}
                className="flex h-8 w-12 items-center justify-center rounded-md bg-white px-2 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 sm:h-9 sm:w-14"
              >
                <span className={`text-[10px] font-bold tracking-tight sm:text-xs ${pm.color}`}>
                  {pm.label}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-surface-dark-foreground/40">
            © {new Date().getFullYear()} Mag Traders. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
