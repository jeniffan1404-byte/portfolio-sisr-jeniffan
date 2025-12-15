import { motion } from 'framer-motion';
import { Code, Dumbbell, Book, Plane, FileText, GraduationCap } from 'lucide-react';

const interests = [
  { icon: Code, label: 'Informatique' },
  { icon: Dumbbell, label: 'Sport' },
  { icon: Book, label: 'Lecture' },
  { icon: Plane, label: 'Voyages' },
];

const AboutSection = () => {
  return (
    <section id="apropos" className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">À propos de moi</h2>
          <p className="section-subtitle">Découvrez mon parcours et mes motivations</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 gradient-card rounded-2xl blur-xl opacity-50" />
              <div className="relative gradient-card rounded-2xl p-8 border border-border/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <GraduationCap size={32} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Jeniffan JOHN ARULTHASAN</h3>
                    <p className="text-primary">BTS SIO option SISR</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span>Ynov Campus Paris</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span>Promotion 2023-2025</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span>Spécialité SISR</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Bonjour, je suis <span className="text-foreground font-semibold">Jeniffan JOHN ARULTHASAN</span>, 
                étudiant en BTS SIO (Services Informatiques aux Organisations) 
                dans la spécialité <span className="text-primary font-semibold">SISR</span> (Solutions d'Infrastructure, Systèmes et Réseaux) 
                à <span className="text-foreground font-semibold">Ynov Campus Paris</span>.
              </p>
              <p>
                Passionné par l'informatique et les nouvelles technologies, je me forme aux métiers 
                de l'administration des systèmes et des réseaux. Mon objectif est de devenir 
                un professionnel capable de gérer, maintenir et sécuriser les infrastructures informatiques des entreprises.
              </p>
              <p>
                Ce portfolio est une vitrine de mes réalisations académiques et professionnelles. 
                Vous y découvrirez mes compétences, mes projets réalisés dans le cadre de ma formation, 
                ainsi que ma veille technologique.
              </p>
            </div>

            {/* CV Button */}
            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover-lift glow-effect"
              >
                <FileText size={20} />
                Télécharger mon CV
              </a>
            </div>

            {/* Interests */}
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-foreground mb-4">Centres d'intérêt</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
                  >
                    <interest.icon size={24} className="text-primary" />
                    <span className="text-xs text-muted-foreground">{interest.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
