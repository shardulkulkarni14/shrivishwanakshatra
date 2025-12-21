import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Users, Award, ArrowRight, Leaf, Droplets, Wind } from "lucide-react";
import heroImage from "@/assets/hero-ayurveda.jpg";
import ServiceCard from "@/components/ServiceCard";

const Index = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Sparkles,
      title: t("home.services.panchakarma.title"),
      description: t("home.services.panchakarma.description"),
    },
    {
      icon: Heart,
      title: t("home.services.nadi.title"),
      description: t("home.services.nadi.description"),
    },
    {
      icon: Leaf,
      title: t("home.services.herbal.title"),
      description: t("home.services.herbal.description"),
    },
  ];

  const conditions = [
    t("home.conditions.digestive"),
    t("home.conditions.joint"),
    t("home.conditions.skin"),
    t("home.conditions.women"),
    t("home.conditions.stress"),
    t("home.conditions.children"),
  ];

  return (
    <>
      <Helmet>
        <title>{t("home.meta.title")}</title>
        <meta name="description" content={t("home.meta.description")} />
        <meta name="keywords" content={t("home.meta.keywords")} />
        <link rel="canonical" href="https://shrivishwanakshatra.com/" />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-hero" />
          </div>
          <div className="container relative z-10 py-20">
            <div className="max-w-2xl text-primary-foreground animate-fade-up">
              <p className="text-accent font-medium mb-4 flex items-center gap-2">
                <Leaf className="h-5 w-5" />
                {t("home.hero.tagline")}
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {t("home.hero.title")}{" "}
                <span className="text-accent">{t("home.hero.highlight")}</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                {t("home.hero.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg"
                >
                  <a href="tel:+919912342125">{t("common.cta.bookAppointment")}</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/50 text-primary-foreground bg-transparent hover:bg-primary-foreground/10"
                >
                  <Link to="/services">
                    {t("common.cta.exploreServices")} <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-up">
                <p className="text-accent font-medium mb-2">{t("home.about.subtitle")}</p>
                <h2 className="section-title mb-6">
                  {t("home.about.title")}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {t("home.about.description1")} <strong className="text-foreground">{t("home.about.doctorName")}</strong> {t("home.about.credentials")}{t("home.about.description2")}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {t("home.about.specializations")}
                </p>
                <div className="flex flex-wrap gap-3">
                  {conditions.map((condition, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {condition}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-primary rounded-lg p-6 text-primary-foreground animate-fade-up delay-100">
                    <Droplets className="h-8 w-8 mb-3" />
                    <h3 className="font-heading text-lg font-semibold mb-2">{t("home.treatments.basti.name")}</h3>
                    <p className="text-sm text-primary-foreground/80">{t("home.treatments.basti.description")}</p>
                  </div>
                  <div className="bg-accent rounded-lg p-6 text-accent-foreground animate-fade-up delay-200">
                    <Wind className="h-8 w-8 mb-3" />
                    <h3 className="font-heading text-lg font-semibold mb-2">{t("home.treatments.nasya.name")}</h3>
                    <p className="text-sm text-accent-foreground/80">{t("home.treatments.nasya.description")}</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-leaf rounded-lg p-6 text-primary-foreground animate-fade-up delay-300">
                    <Sparkles className="h-8 w-8 mb-3" />
                    <h3 className="font-heading text-lg font-semibold mb-2">{t("home.treatments.virechana.name")}</h3>
                    <p className="text-sm text-primary-foreground/80">{t("home.treatments.virechana.description")}</p>
                  </div>
                  <div className="bg-earth rounded-lg p-6 text-primary-foreground animate-fade-up delay-400">
                    <Award className="h-8 w-8 mb-3" />
                    <h3 className="font-heading text-lg font-semibold mb-2">{t("home.treatments.vamana.name")}</h3>
                    <p className="text-sm text-primary-foreground/80">{t("home.treatments.vamana.description")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-16 md:py-24 bg-secondary/50">
          <div className="container">
            <div className="text-center mb-12 animate-fade-up">
              <p className="text-accent font-medium mb-2">{t("home.services.subtitle")}</p>
              <h2 className="section-title mb-4">{t("home.services.title")}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t("home.services.description")}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ServiceCard {...feature} />
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button asChild size="lg" className="font-semibold">
                <Link to="/services">
                  {t("common.cta.viewAllServices")} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Doctor Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center animate-fade-up">
              <p className="text-accent font-medium mb-2">{t("home.doctor.subtitle")}</p>
              <h2 className="section-title mb-6">{t("home.doctor.name")}</h2>
              <div className="bg-card rounded-lg p-8 shadow-card">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
                  {t("home.doctor.credentials")}
                </h3>
                <p className="text-accent font-medium mb-4">
                  {t("home.doctor.title")}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t("home.doctor.training")}
                </p>
                <p className="text-sm text-muted-foreground">
                  {t("home.doctor.registration")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              {t("home.cta.title")}
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              {t("home.cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                <a href="tel:+919912342125">{t("common.cta.callNow")} +91 9912342125</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/50 text-primary-foreground bg-transparent hover:bg-primary-foreground/10"
              >
                <Link to="/contact">{t("common.cta.contactUs")}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;
