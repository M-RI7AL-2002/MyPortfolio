import { galerie } from "@/data/galerie";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion, type Variants } from "framer-motion";
import { Card3D } from "@/components/ui/card-3d";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Galerie() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-7xl mx-auto p-4 sm:p-6"
    >
      <motion.h1
        variants={itemVariants}
        className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-foreground via-primary to-foreground/70 bg-clip-text text-transparent"
      >
        Galerie
      </motion.h1>

      <motion.div
        variants={itemVariants}
        className="relative"
      >
        <Carousel className="w-full">
          <CarouselContent>
            {galerie.map((item, idx) => (
              <CarouselItem
                key={item.id}
                className="w-full flex justify-center items-center"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="w-full flex justify-center"
                >
                  <Card3D intensity={10} className="w-full max-w-2xl md:max-w-4xl lg:max-w-5xl flex justify-center">
                    <Card className="w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden relative group border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 flex items-center justify-center bg-muted/10">
                      <motion.img
                        src={item.image}
                        alt={item.title}
                        className="max-w-full max-h-full object-contain object-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />
                      <CardContent className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent text-white w-full text-center p-6 backdrop-blur-sm">
                        <motion.h3
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="text-xl font-bold mb-1"
                        >
                          {item.title}
                        </motion.h3>
                      </CardContent>
                    </Card>
                  </Card3D>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur-md text-foreground border-2 border-border p-3 md:p-4 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-lg hover:shadow-xl z-10">
            <ChevronLeft className="w-5 h-5" />
          </CarouselPrevious>
          <CarouselNext className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur-md text-foreground border-2 border-border p-3 md:p-4 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-lg hover:shadow-xl z-10">
            <ChevronRight className="w-5 h-5" />
          </CarouselNext>
        </Carousel>
      </motion.div>
    </motion.section>
  );
}
