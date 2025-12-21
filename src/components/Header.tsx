import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const navLinks = [
    { href: "/", label: t("common.nav.home") },
    { href: "/services", label: t("common.nav.services") },
    { href: "/contact", label: t("common.nav.contact") },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Top bar with contact */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container flex justify-between items-center text-sm">
          <div className="hidden md:flex items-center gap-6">
            <a
              href="tel:+919912342125"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>+91 9912342125</span>
            </a>
            <a
              href="mailto:shrivishwanakshatra@outlook.com"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>shrivishwanakshatra@outlook.com</span>
            </a>
          </div>
          <p className="text-xs md:text-sm font-medium hidden sm:block">
            {t("common.brand.mottoWithSymbol")}
          </p>
          <LanguageSwitcher />
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.jpeg"
              alt="Shri Vishwa Nakshatra Logo"
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1 className="font-heading text-lg md:text-xl font-bold text-foreground leading-tight">
                {t("common.brand.name")}
              </h1>
              <p className="text-xs text-muted-foreground">
                {t("common.brand.tagline")}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`nav-link ${
                  isActive(link.href) ? "text-primary after:w-full" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              <a href="tel:+919912342125">{t("common.cta.bookAppointment")}</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-lg font-medium transition-colors ${
                    isActive(link.href) ? "text-primary" : "text-foreground/80 hover:text-primary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground mt-2">
                <a href="tel:+919912342125">{t("common.cta.bookAppointment")}</a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
