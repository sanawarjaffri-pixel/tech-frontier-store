import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  return (
    <div className="w-full overflow-x-hidden">
      <section className="hero-gradient py-20">
        <div className="mx-auto max-w-7xl px-6 text-center md:px-8">
          <h1 className="mb-4 text-4xl font-bold text-surface-dark-foreground">Contact Us</h1>
          <p className="mx-auto max-w-2xl text-lg text-surface-dark-foreground/60">
            Get in touch with our team for sales enquiries, support, or trade accounts.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Contact info */}
          <div className="space-y-6">
            {[
              { icon: MapPin, title: "Address", lines: ["123 Tech Lane", "London, EC1A 1BB", "United Kingdom"] },
              { icon: Phone, title: "Phone", lines: ["+44 20 7123 4567"] },
              { icon: Mail, title: "Email", lines: ["info@magtraders.co.uk", "sales@magtraders.co.uk"] },
              { icon: Clock, title: "Business Hours", lines: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"] },
            ].map(({ icon: Icon, title, lines }) => (
              <div key={title} className="flex gap-4 rounded-lg border border-border bg-card p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-card-foreground">{title}</h3>
                  {lines.map((line) => (
                    <p key={line} className="text-sm text-muted-foreground">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="rounded-lg border border-border bg-card p-8">
              <h2 className="mb-6 text-xl font-bold text-card-foreground">Send us a Message</h2>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">Name</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Subject</label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Tell us more..."
                  />
                </div>
                <Button size="lg" type="submit">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-8">
        <div className="overflow-hidden rounded-xl border border-border">
          <iframe
            title="Mag Traders Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.4!2d-0.0977!3d51.5185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b5e0a5b0001%3A0x400!2sLondon+EC1A!5e0!3m2!1sen!2suk!4v1"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
