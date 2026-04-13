import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="surface-dark">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">M</span>
              </div>
              <span className="text-xl font-bold text-surface-dark-foreground">Mag Traders</span>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-surface-dark-foreground/60">
              Your trusted source for quality IT hardware and computer components.
              Serving businesses and professionals across the UK.
            </p>
            <div className="flex gap-3">
              {["facebook", "twitter", "linkedin", "instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-dark-foreground/10 text-surface-dark-foreground/60 transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <span className="text-xs font-bold uppercase">{social[0]}</span>
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
              <h4 className="mb-2 text-sm font-medium text-surface-dark-foreground">Newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="h-9 flex-1 rounded-md border border-surface-dark-foreground/20 bg-surface-dark-foreground/5 px-3 text-sm text-surface-dark-foreground placeholder:text-surface-dark-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="h-9 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-surface-dark-foreground/10 pt-8 text-center">
          <p className="text-sm text-surface-dark-foreground/40">
            © {new Date().getFullYear()} Mag Traders. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
