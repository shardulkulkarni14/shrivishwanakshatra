import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Leaf, Send } from "lucide-react";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Create schema with translated messages
  const contactSchema = z.object({
    name: z
      .string()
      .trim()
      .min(2, t("contact.validation.nameMin"))
      .max(100, t("contact.validation.nameMax"))
      .regex(/^[a-zA-Z\s'-\u0900-\u097F\u0C00-\u0C7F]+$/, t("contact.validation.nameInvalid")),
    email: z
      .string()
      .trim()
      .email(t("contact.validation.emailInvalid"))
      .max(255, t("contact.validation.emailMax")),
    phone: z
      .string()
      .trim()
      .min(10, t("contact.validation.phoneMin"))
      .max(15, t("contact.validation.phoneMax"))
      .regex(/^[+]?[\d\s-]+$/, t("contact.validation.phoneInvalid")),
    message: z
      .string()
      .trim()
      .min(10, t("contact.validation.messageMin"))
      .max(1000, t("contact.validation.messageMax")),
  });

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    // Simulate form submission (replace with actual backend call)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: t("contact.toast.success"),
      description: t("contact.toast.successDescription"),
    });

    form.reset();
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t("common.contact.phone"),
      content: "+91 9912342125",
      href: "tel:+919912342125",
    },
    {
      icon: Mail,
      title: t("common.contact.email"),
      content: "shrivishwanakshatra@outlook.com",
      href: "mailto:shrivishwanakshatra@outlook.com",
    },
    {
      icon: MapPin,
      title: t("common.contact.address"),
      content: "Mee Seva Rd, Friends Colony, Miyapur, Hyderabad - 500049",
      href: "https://maps.google.com/?q=Mee+Seva+Rd,+Friends+Colony,+Miyapur,+Hyderabad+500049",
    },
    {
      icon: Clock,
      title: t("common.contact.hours"),
      content: t("common.contact.hoursValue"),
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t("contact.meta.title")}</title>
        <meta name="description" content={t("contact.meta.description")} />
        <meta name="keywords" content={t("contact.meta.keywords")} />
        <link rel="canonical" href="https://shrivishwanakshatra.com/contact" />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl animate-fade-up">
              <p className="text-accent font-medium mb-4 flex items-center gap-2">
                <Leaf className="h-5 w-5" />
                {t("contact.hero.subtitle")}
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {t("contact.hero.title")}
              </h1>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                {t("contact.hero.description")}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="animate-fade-up">
                <h2 className="section-title mb-8">{t("contact.info.title")}</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border hover:shadow-card transition-shadow"
                      >
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                            {info.title}
                          </h3>
                          {info.href ? (
                            <a
                              href={info.href}
                              target={info.href.startsWith("http") ? "_blank" : undefined}
                              rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{info.content}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Map */}
                <div className="mt-8 rounded-lg overflow-hidden border border-border h-64 md:h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.5!2d78.3574!3d17.4966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI5JzQ4LjAiTiA3OMKwMjEnMjYuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={t("contact.info.mapTitle")}
                  />
                </div>
              </div>

              {/* Contact Form */}
              <div className="animate-fade-up delay-200">
                <div className="bg-card rounded-lg p-6 md:p-8 shadow-card border border-border">
                  <h2 className="font-heading text-2xl font-semibold text-foreground mb-2">
                    {t("contact.form.title")}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {t("contact.form.description")}
                  </p>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("contact.form.name")}</FormLabel>
                            <FormControl>
                              <Input
                                placeholder={t("contact.form.namePlaceholder")}
                                {...field}
                                className="bg-background"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t("contact.form.email")}</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder={t("contact.form.emailPlaceholder")}
                                  {...field}
                                  className="bg-background"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t("contact.form.phone")}</FormLabel>
                              <FormControl>
                                <Input
                                  type="tel"
                                  placeholder={t("contact.form.phonePlaceholder")}
                                  {...field}
                                  className="bg-background"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("contact.form.message")}</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder={t("contact.form.messagePlaceholder")}
                                rows={5}
                                {...field}
                                className="bg-background resize-none"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full font-semibold"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          t("common.cta.sending")
                        ) : (
                          <>
                            {t("common.cta.sendMessage")} <Send className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-secondary/50">
          <div className="container text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t("contact.cta.title")}
            </h2>
            <p className="text-muted-foreground mb-6">
              {t("contact.cta.description")}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              <a href="tel:+919912342125">
                <Phone className="mr-2 h-5 w-5" />
                {t("common.cta.callNow")} +91 9912342125
              </a>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
