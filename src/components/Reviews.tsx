import { useTranslation } from "react-i18next";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const Reviews = () => {
  const { t } = useTranslation();

  const reviews = t("home.reviews.items", { returnObjects: true }) as Array<{
    name: string;
    location: string;
    rating: number;
    text: string;
    treatment: string;
  }>;

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("home.reviews.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("home.reviews.subtitle")}
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                <Card className="h-full border-primary/20 bg-secondary/20">
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-primary/30 mb-4" />
                    <p className="text-foreground/80 mb-4 italic leading-relaxed">
                      "{review.text}"
                    </p>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating
                              ? "text-accent fill-accent"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="border-t border-primary/10 pt-4">
                      <p className="font-semibold text-foreground">{review.name}</p>
                      <p className="text-sm text-muted-foreground">{review.location}</p>
                      <p className="text-xs text-primary mt-1">{review.treatment}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default Reviews;
