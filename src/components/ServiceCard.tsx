import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  treatments?: string[];
}

const ServiceCard = ({ title, description, icon: Icon, treatments }: ServiceCardProps) => {
  return (
    <article className="group bg-card rounded-lg p-6 shadow-card hover:shadow-hover transition-all duration-300 border border-border hover:border-primary/30">
      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {description}
      </p>
      {treatments && treatments.length > 0 && (
        <ul className="space-y-1">
          {treatments.map((treatment, index) => (
            <li
              key={index}
              className="text-sm text-foreground/80 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              {treatment}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default ServiceCard;
