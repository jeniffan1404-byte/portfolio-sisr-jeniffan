import { Linkedin, Github, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-coding.png';

const HeroSection = () => {
  return (
    <section id="accueil" className="min-h-screen gradient-hero flex items-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Social Links */}
            <div className="flex gap-4 mb-6">
              <a
                href="https://www.linkedin.com/in/jeniffan-john-arulthasan-2758152b6/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-primary hover:glow-effect transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-foreground" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-primary hover:glow-effect transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={20} className="text-foreground" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-primary hover:glow-effect transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={20} className="text-foreground" />
              </a>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-2 glow-text">
              Jeniffan
            </h1>
            <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">
              JOHN ARULTHASAN
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              Étudiant en BTS SIO option SISR
            </p>
            <p className="text-lg text-muted-foreground/80 mb-8">
              Ynov Campus Paris
            </p>

            <a
              href="#apropos"
              className="inline-block px-8 py-3 border-2 border-foreground/30 rounded-full text-foreground font-medium hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Découvrir mon parcours
            </a>
          </motion.div>

          {/* Right Content - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
              <img
                src={heroImage}
                alt="Développeur travaillant sur un ordinateur"
                className="relative z-10 w-full max-w-lg animate-float"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
