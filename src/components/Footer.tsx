import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();
  const logoUrl = `${import.meta.env.BASE_URL}logo.jpeg`;

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logoUrl}
                alt="Shri Vishwa Nakshatra Logo"
                className="w-10 h-10 object-contain"
              />
              <div>
                <h3 className="font-heading text-lg font-bold">{t("common.brand.name")}</h3>
                <p className="text-xs text-primary-foreground/70">{t("common.brand.taglineShort")}</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              {t("common.brand.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">{t("common.footer.quickLinks")}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  {t("common.nav.home")}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  {t("common.nav.services")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  {t("common.nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">{t("common.footer.ourTreatments")}</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>{t("home.services.panchakarma.title")}</li>
              <li>{t("home.services.nadi.title")}</li>
              <li>{t("services.specialized.suvarna.title")}</li>
              <li>{t("services.specialized.diet.title")}</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">{t("common.footer.contactUs")}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+919912342125"
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>+91 9912342125</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:shrivishwanakshatra@outlook.com"
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span>shrivishwanakshatra@outlook.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>Mee Seva Rd, Friends Colony, Miyapur, Hyderabad - 500049</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <span>{t("common.contact.hoursValue")}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/70">
              © {new Date().getFullYear()} {t("common.footer.copyright")}
            </p>
            <p className="text-sm text-primary-foreground/70">
              {t("common.footer.doctor")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
