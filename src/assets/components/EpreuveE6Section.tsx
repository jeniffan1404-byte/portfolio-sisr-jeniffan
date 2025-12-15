import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Target, FileText, Building2 } from 'lucide-react';

const parcours = [
  {
    type: 'formation',
    title: 'BTS SIO option SISR',
    organization: 'Ynov Campus Paris',
    period: '2023 - 2025',
    description: 'Formation aux métiers de l\'administration système et réseau. Apprentissage de la gestion des infrastructures informatiques, de la sécurité et de la virtualisation.',
  },
  {
    type: 'formation',
    title: 'Baccalauréat',
    organization: 'Lycée',
    period: '2020 - 2023',
    description: 'Obtention du baccalauréat général avec spécialités scientifiques.',
  },
];

const stages = [
  {
    title: 'Stage en entreprise - 1ère année',
    organization: 'Entreprise',
    period: '2024',
    duration: '6 semaines',
    missions: [
      'Assistance aux utilisateurs (support niveau 1)',
      'Installation et configuration de postes de travail',
      'Gestion des tickets d\'incidents',
      'Documentation technique',
    ],
  },
];

const certifications = [
  { name: 'Certification en cours...', status: 'En préparation' },
];

const EpreuveE6Section = () => {
  return (
    <section id="epreuve-e6" className="py-20 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-4">
            <Target size={18} />
            <span className="text-sm font-medium">Épreuve E6</span>
          </div>
          <h2 className="section-title">Parcours de Professionnalisation</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            L'épreuve E6 présente mon parcours de professionnalisation incluant ma formation, 
            mes stages et mes certifications.
          </p>
        </motion.div>

        {/* Description de l'épreuve */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="gradient-card rounded-2xl p-8 border border-border/30">
            <h3 className="text-xl font-bold text-foreground mb-4">Qu'est-ce que l'épreuve E6 ?</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              L'épreuve E6 <span className="text-foreground font-medium">"Cybersécurité des services informatiques"</span> (coefficient 4) 
              évalue la capacité du candidat à présenter son parcours de professionnalisation et à démontrer 
              sa compréhension des enjeux de cybersécurité.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 rounded-lg bg-secondary/30">
                <p className="text-2xl font-bold text-accent">Coefficient 4</p>
                <p className="text-sm text-muted-foreground">Poids dans l'examen</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary/30">
                <p className="text-2xl font-bold text-accent">40 min</p>
                <p className="text-sm text-muted-foreground">Durée de l'oral</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary/30">
                <p className="text-2xl font-bold text-accent">Portfolio</p>
                <p className="text-sm text-muted-foreground">Support de présentation</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formation */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <GraduationCap size={24} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Formation</h3>
              </div>
              <div className="space-y-0">
                {parcours.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="timeline-item"
                  >
                    <div className="gradient-card rounded-xl p-6 border border-border/30">
                      <span className="text-primary text-sm font-medium">{item.period}</span>
                      <h4 className="text-lg font-semibold text-foreground mt-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm mt-1">{item.organization}</p>
                      <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stages */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Briefcase size={24} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Expériences professionnelles</h3>
              </div>
              <div className="space-y-6">
                {stages.map((stage, index) => (
                  <motion.div
                    key={stage.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="gradient-card rounded-xl p-6 border border-border/30"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="text-accent text-sm font-medium">{stage.period}</span>
                        <h4 className="text-lg font-semibold text-foreground mt-1">{stage.title}</h4>
                        <p className="text-muted-foreground text-sm flex items-center gap-2 mt-1">
                          <Building2 size={14} />
                          {stage.organization}
                        </p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium">
                        {stage.duration}
                      </span>
                    </div>
                    <h5 className="text-foreground font-medium text-sm mb-2">Missions réalisées :</h5>
                    <ul className="space-y-2">
                      {stage.missions.map((mission) => (
                        <li key={mission} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          {mission}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <div className="flex items-center gap-3 mb-8 justify-center">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
              <Award size={24} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
          </div>
          <div className="flex justify-center">
            <div className="gradient-card rounded-xl p-8 border border-border/30 text-center max-w-md">
              <FileText size={48} className="text-muted-foreground mx-auto mb-4 opacity-50" />
              <p className="text-muted-foreground">
                Certifications en cours de préparation...
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EpreuveE6Section;
