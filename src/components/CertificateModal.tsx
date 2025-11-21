import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  alt?: string;
}

export default function CertificateModal({
  isOpen,
  onClose,
  imageUrl,
  title,
  alt,
}: CertificateModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-4xl w-full max-h-[95vh] bg-background rounded-2xl shadow-2xl overflow-hidden border-2 border-border"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-4 right-4 z-10 bg-background/90 backdrop-blur-sm p-2 rounded-full hover:bg-accent transition-colors duration-300 shadow-lg"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 text-foreground" />
              </motion.button>

              {/* Image Container */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                  {title}
                </h3>
                <div className="relative w-full flex items-center justify-center bg-muted/10 rounded-lg overflow-hidden">
                  <motion.img
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    src={imageUrl}
                    alt={alt || title}
                    className="max-w-full max-h-[70vh] object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

