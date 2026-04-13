import { ShieldCheck, Users, Truck, Award, BookOpen, Eye, Target } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero */}
      <section className="hero-gradient py-20">
        <div className="mx-auto max-w-7xl px-6 text-center md:px-8">
          <h1 className="mb-4 text-4xl font-bold text-surface-dark-foreground">About Mag Traders</h1>
          <p className="mx-auto max-w-2xl text-lg text-surface-dark-foreground/60">
            Your trusted partner for quality IT hardware and computer components across the United Kingdom.
          </p>
        </div>
      </section>

      {/* Story / Vision / Mission Cards */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: BookOpen,
              title: "Our Story",
              description:
                "Mag Traders was founded with a simple mission: to provide businesses and IT professionals with reliable, high-quality computer hardware at competitive prices. Based in the United Kingdom, we have built our reputation on trust, quality, and exceptional customer service over the years.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              description:
                "We envision a future where every business, from startups to enterprises, has seamless access to top-tier IT hardware. We aim to be the UK's most trusted and accessible IT hardware partner, empowering organisations with the technology they need to thrive.",
            },
            {
              icon: Target,
              title: "Our Mission",
              description:
                "Our mission is to deliver premium computer components and IT equipment with unmatched reliability, competitive pricing, and expert guidance. We strive to simplify the procurement process so our customers can focus on what matters most — growing their business.",
            },
          ].map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-xl border border-border bg-card p-8 card-hover"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <Icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-card-foreground">{title}</h3>
              <p className="leading-relaxed text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Who We Are</h2>
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
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <h2 className="mb-10 text-center text-2xl font-bold text-foreground">Why Choose Us</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ShieldCheck, title: "Quality Assured", desc: "Every product is tested and verified before shipping." },
              { icon: Users, title: "Expert Support", desc: "Our knowledgeable team is always ready to help." },
              { icon: Truck, title: "Fast Delivery", desc: "Next-day delivery available across the UK." },
              { icon: Award, title: "Best Prices", desc: "Competitive pricing with trade account discounts." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-border bg-card p-6 text-center card-hover">
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
