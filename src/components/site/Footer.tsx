import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Facebook, Instagram, Twitter, Linkedin, Heart } from "lucide-react";
import logo from "../../../public/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link to="/" className="inline-flex items-center" aria-label="Home">
              <span className="inline-flex items-center justify-center rounded-2xl bg-primary-foreground p-3">
                <img src={logo} alt="SONRU ISELE Charity Foundation" width={140} height={140} className="h-24 w-auto" />
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
              A Nigerian humanitarian foundation lending a hand and lighting lives through
              healthcare, education, enterprise and dignified accommodation.
            </p>
            <div className="mt-6 flex gap-2">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 transition hover:border-gold hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-[0.22em] text-gold">Explore</h3>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
              <li><Link to="/about" className="hover:text-gold transition">About</Link></li>
              <li><Link to="/mission" className="hover:text-gold transition">Mission & Vision</Link></li>
              <li><Link to="/impact" className="hover:text-gold transition">Our Impact</Link></li>
              <li><Link to="/values" className="hover:text-gold transition">Core Values</Link></li>
              <li><Link to="/gallery" className="hover:text-gold transition">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-[0.22em] text-gold">Get Involved</h3>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
              <li><Link to="/donate" className="hover:text-gold transition">Donate</Link></li>
              <li><Link to="/get-involved" className="hover:text-gold transition">Volunteer</Link></li>
              <li><Link to="/get-involved" className="hover:text-gold transition">Partner with us</Link></li>
              <li><Link to="/get-involved" className="hover:text-gold transition">Newsletter</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-[0.22em] text-gold">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-0.5 text-gold" /><span>Lagos, Nigeria</span></li>
              <li className="flex items-start gap-3"><Mail className="h-4 w-4 mt-0.5 text-gold" /><span>hello@sonruisele.org</span></li>
              <li className="flex items-start gap-3"><Phone className="h-4 w-4 mt-0.5 text-gold" /><span>+234 800 000 0000</span></li>
            </ul>
            <Link
              to="/donate"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--gradient-gold)] px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-[var(--shadow-gold)] hover:scale-[1.03] transition"
            >
              <Heart className="h-4 w-4" /> Donate Now
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} SONRU ISELE Charity Foundation. All rights reserved.</p>
          <p className="font-display italic text-gold/90">“Lend a Hand, Light a Life.”</p>
        </div>
      </div>
    </footer>
  );
}