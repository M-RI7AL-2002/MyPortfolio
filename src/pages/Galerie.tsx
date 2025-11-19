import { galerie } from "@/data/galerie";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Galerie() {
  return (
    <section className="max-w-7xl mx-auto p-6 animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
        Galerie
      </h1>

      <div className="relative">
        <Carousel className="w-full">
          <CarouselContent>
            {galerie.map((item, idx) => (
              <CarouselItem 
                key={item.id} 
                className="w-full flex justify-center"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <Card className="w-full max-w-md md:max-w-lg h-[400px] md:h-[500px] overflow-hidden relative group border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <CardContent className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent text-white w-full text-center p-6 backdrop-blur-sm">
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur-md text-foreground border-2 border-border p-4 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 z-10">
            ◀
          </CarouselPrevious>
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur-md text-foreground border-2 border-border p-4 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 z-10">
            ▶
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  );
}
