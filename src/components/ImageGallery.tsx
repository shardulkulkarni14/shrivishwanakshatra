import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const ImageGallery = () => {
  const { t } = useTranslation();
  const baseUrl = import.meta.env.BASE_URL;
  const scrollRef = useRef<HTMLDivElement>(null);

  const images = [
    { src: `${baseUrl}gallery/DSC09039.JPG`, alt: "Clinic Interior" },
    { src: `${baseUrl}gallery/DSC09041.JPG`, alt: "Treatment Room" },
    { src: `${baseUrl}gallery/DSC09044.JPG`, alt: "Ayurvedic Medicines" },
    { src: `${baseUrl}gallery/DSC09047.JPG`, alt: "Consultation Area" },
    { src: `${baseUrl}gallery/DSC09051.JPG`, alt: "Therapy Room" },
    { src: `${baseUrl}gallery/DSC09052.JPG`, alt: "Clinic Facility" },
    { src: `${baseUrl}gallery/IMG_1932.PNG`, alt: "Clinic Photo" },
    { src: `${baseUrl}gallery/IMG_1933.PNG`, alt: "Clinic Photo" },
  ];

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const scroll = () => {
      scrollPosition += scrollSpeed;

      // Reset position when we've scrolled through the first set of images
      const halfWidth = scrollContainer.scrollWidth / 2;
      if (scrollPosition >= halfWidth) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    // Start scrolling
    animationId = requestAnimationFrame(scroll);

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="py-16 bg-secondary/30 overflow-hidden">
      <div className="container mb-10">
        <div className="text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("home.gallery.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("home.gallery.subtitle")}
          </p>
        </div>
      </div>

      {/* Auto-scrolling gallery */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-hidden cursor-grab active:cursor-grabbing"
        style={{ scrollBehavior: "auto" }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[300px] md:w-[400px] lg:w-[450px] aspect-[4/3] rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Subtle gradient overlays for fade effect */}
      <div className="relative -mt-[calc(300px*3/4)] md:-mt-[calc(400px*3/4)] lg:-mt-[calc(450px*3/4)] pointer-events-none">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-secondary/30 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-secondary/30 to-transparent z-10" />
        <div className="h-[calc(300px*3/4)] md:h-[calc(400px*3/4)] lg:h-[calc(450px*3/4)]" />
      </div>
    </section>
  );
};

export default ImageGallery;
