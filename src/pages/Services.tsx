import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  Droplets,
  Wind,
  Sparkles,
  Heart,
  Baby,
  Brain,
  Leaf,
  Activity,
  Stethoscope,
  Apple,
  ArrowRight,
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  const { t } = useTranslation();

  const panchakarmaServices = [
    {
      icon: Droplets,
      title: t("services.panchakarma.basti.title"),
      description: t("services.panchakarma.basti.description"),
      treatments: t("services.panchakarma.basti.treatments", { returnObjects: true }) as string[],
    },
    {
      icon: Sparkles,
      title: t("services.panchakarma.vamana.title"),
      description: t("services.panchakarma.vamana.description"),
      treatments: t("services.panchakarma.vamana.treatments", { returnObjects: true }) as string[],
    },
    {
      icon: Activity,
      title: t("services.panchakarma.virechana.title"),
      description: t("services.panchakarma.virechana.description"),
      treatments: t("services.panchakarma.virechana.treatments", { returnObjects: true }) as string[],
    },
    {
      icon: Wind,
      title: t("services.panchakarma.nasya.title"),
      description: t("services.panchakarma.nasya.description"),
      treatments: t("services.panchakarma.nasya.treatments", { returnObjects: true }) as string[],
    },
    {
      icon: Heart,
      title: t("services.panchakarma.raktamokshana.title"),
      description: t("services.panchakarma.raktamokshana.description"),
      treatments: t("services.panchakarma.raktamokshana.treatments", { returnObjects: true }) as string[],
    },
  ];

  const specializedServices = [
    {
      icon: Stethoscope,
      title: t("services.specialized.nadi.title"),
      description: t("services.specialized.nadi.description"),
    },
    {
      icon: Baby,
      title: t("services.specialized.suvarna.title"),
      description: t("services.specialized.suvarna.description"),
    },
    {
      icon: Apple,
      title: t("services.specialized.diet.title"),
      description: t("services.specialized.diet.description"),
    },
    {
      icon: Leaf,
      title: t("services.specialized.herbal.title"),
      description: t("services.specialized.herbal.description"),
    },
  ];

  const conditionsGroups = [
    {
      title: t("services.conditions.digestive.title"),
      icon: Activity,
      conditions: t("services.conditions.digestive.items", { returnObjects: true }) as string[],
    },
    {
      title: t("services.conditions.vaat.title"),
      icon: Wind,
      conditions: t("services.conditions.vaat.items", { returnObjects: true }) as string[],
    },
    {
      title: t("services.conditions.women.title"),
      icon: Heart,
      conditions: t("services.conditions.women.items", { returnObjects: true }) as string[],
    },
    {
      title: t("services.conditions.skin.title"),
      icon: Sparkles,
      conditions: t("services.conditions.skin.items", { returnObjects: true }) as string[],
    },
    {
      title: t("services.conditions.mental.title"),
      icon: Brain,
      conditions: t("services.conditions.mental.items", { returnObjects: true }) as string[],
    },
    {
      title: t("services.conditions.children.title"),
      icon: Baby,
      conditions: t("services.conditions.children.items", { returnObjects: true }) as string[],
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t("services.meta.title")}</title>
        <meta name="description" content={t("services.meta.description")} />
        <meta name="keywords" content={t("services.meta.keywords")} />
        <link rel="canonical" href="https://shrivishwanakshatra.com/services" />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl animate-fade-up">
              <p className="text-accent font-medium mb-4 flex items-center gap-2">
                <Leaf className="h-5 w-5" />
                {t("services.hero.subtitle")}
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {t("services.hero.title")}
              </h1>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                {t("services.hero.description")}
              </p>
            </div>
          </div>
        </section>

        {/* Panchakarma Services */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="text-center mb-12 animate-fade-up">
              <p className="text-accent font-medium mb-2">{t("services.panchakarma.subtitle")}</p>
              <h2 className="section-title mb-4">{t("services.panchakarma.title")}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t("services.panchakarma.description")}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {panchakarmaServices.map((service, index) => (
                <div
                  key={index}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialized Services */}
        <section className="py-16 md:py-24 bg-secondary/50">
          <div className="container">
            <div className="text-center mb-12 animate-fade-up">
              <p className="text-accent font-medium mb-2">{t("services.specialized.subtitle")}</p>
              <h2 className="section-title mb-4">{t("services.specialized.title")}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t("services.specialized.description")}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {specializedServices.map((service, index) => (
                <div
                  key={index}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conditions Treated */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="text-center mb-12 animate-fade-up">
              <p className="text-accent font-medium mb-2">{t("services.conditions.subtitle")}</p>
              <h2 className="section-title mb-4">{t("services.conditions.title")}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t("services.conditions.description")}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {conditionsGroups.map((group, index) => {
                const Icon = group.icon;
                return (
                  <div
                    key={index}
                    className="bg-card rounded-lg p-6 shadow-card border border-border animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        {group.title}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {group.conditions.map((condition, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {condition}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              {t("services.cta.title")}
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              {t("services.cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                <a href="tel:+919912342125">{t("common.cta.callNow")}</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/50 text-primary-foreground bg-transparent hover:bg-primary-foreground/10"
              >
                <Link to="/contact">
                  {t("common.cta.contactUs")} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;
