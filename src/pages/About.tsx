import { ShieldCheck, Users, Truck, Award } from "lucide-react";

const AboutPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold text-surface-dark-foreground">About Mag Traders</h1>
          <p className="mx-auto max-w-2xl text-lg text-surface-dark-foreground/60">
            Your trusted partner for quality IT hardware and computer components across the United Kingdom.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Our Story</h2>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            Mag Traders was founded with a simple mission: to provide businesses and IT professionals with
            reliable, high-quality computer hardware at competitive prices. Based in the United Kingdom,
            we have built our reputation on trust, quality, and exceptional customer service.
          </p>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            We source our products directly from manufacturers and authorised distributors, ensuring every
            component meets the highest standards. From enterprise networking equipment to the latest
            graphics cards, our carefully curated catalog covers everything you need.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Whether you're upgrading a workstation, building a data center, or sourcing components for
            your IT business, Mag Traders is here to help with expert advice and fast, reliable delivery.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-center text-2xl font-bold text-foreground">Why Choose Us</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ShieldCheck, title: "Quality Assured", desc: "Every product is tested and verified before shipping." },
              { icon: Users, title: "Expert Support", desc: "Our knowledgeable team is always ready to help." },
              { icon: Truck, title: "Fast Delivery", desc: "Next-day delivery available across the UK." },
              { icon: Award, title: "Best Prices", desc: "Competitive pricing with trade account discounts." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-lg border border-border bg-card p-6 text-center card-hover">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-card-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
