import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown, Clock, Users, CheckCircle2, Stethoscope } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface TherapyCardProps {
  therapyKey: string;
  icon: React.ReactNode;
}

const TherapyCard = ({ therapyKey, icon }: TherapyCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const title = t(`services.panchakarma.${therapyKey}.title`);
  const description = t(`services.panchakarma.${therapyKey}.description`);
  const treatments = t(`services.panchakarma.${therapyKey}.treatments`, { returnObjects: true }) as string[];

  const hasDetails = t(`services.panchakarma.${therapyKey}.details.fullDescription`, { defaultValue: "" }) !== "";

  const details = hasDetails ? {
    fullDescription: t(`services.panchakarma.${therapyKey}.details.fullDescription`),
    benefits: t(`services.panchakarma.${therapyKey}.details.benefits`, { returnObjects: true }) as string[],
    procedure: t(`services.panchakarma.${therapyKey}.details.procedure`),
    duration: t(`services.panchakarma.${therapyKey}.details.duration`),
    idealFor: t(`services.panchakarma.${therapyKey}.details.idealFor`),
  } : null;

  return (
    <Card className={`overflow-hidden transition-all duration-300 border-2 ${isOpen ? 'border-primary shadow-xl' : 'border-primary/20 hover:border-primary/40 hover:shadow-lg'}`}>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="w-full text-left">
          <div className="p-6 cursor-pointer">
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-xl transition-colors ${isOpen ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'}`}>
                {icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {title}
                  </h3>
                  <ChevronDown className={`h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </div>
                <p className="text-muted-foreground text-sm mt-1 line-clamp-2">{description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {treatments.slice(0, 3).map((treatment, index) => (
                    <Badge key={index} variant="secondary" className="bg-accent/20 text-accent-foreground text-xs">
                      {treatment}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent>
          {hasDetails && details && (
            <CardContent className="pt-0 pb-6 px-6">
              <div className="border-t border-primary/20 pt-6 space-y-6">
                {/* Full Description */}
                <div className="bg-secondary/50 rounded-xl p-4">
                  <p className="text-foreground/90 leading-relaxed">
                    {details.fullDescription}
                  </p>
                </div>

                {/* Benefits Grid */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    {t("home.therapyDetails.benefits")}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {details.benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2 bg-green-50 dark:bg-green-950/30 rounded-lg p-3"
                      >
                        <span className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        <span className="text-sm text-foreground/80">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Procedure */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Stethoscope className="h-5 w-5 text-primary" />
                    {t("home.therapyDetails.procedure")}
                  </h4>
                  <div className="bg-blue-50 dark:bg-blue-950/30 rounded-xl p-4">
                    <p className="text-sm text-foreground/80 leading-relaxed">{details.procedure}</p>
                  </div>
                </div>

                {/* Duration & Ideal For */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-amber-50 dark:bg-amber-950/30 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-5 w-5 text-amber-600" />
                      <h4 className="font-semibold text-foreground">{t("home.therapyDetails.duration")}</h4>
                    </div>
                    <p className="text-sm text-foreground/80">{details.duration}</p>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-950/30 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-5 w-5 text-purple-600" />
                      <h4 className="font-semibold text-foreground">{t("home.therapyDetails.idealFor")}</h4>
                    </div>
                    <p className="text-sm text-foreground/80">{details.idealFor}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          )}
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

export default TherapyCard;
