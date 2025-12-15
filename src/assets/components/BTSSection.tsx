import { motion } from 'framer-motion';
import { Server, Code, Shield, Network, Database, Monitor } from 'lucide-react';

const BTSSection = () => {
  return (
    <section id="btssio" className="py-20 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Le BTS SIO</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Le Brevet de Technicien Supérieur aux Services Informatiques aux Organisations
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="gradient-card rounded-2xl p-8 border border-border/30">
            <p className="text-muted-foreground leading-relaxed text-center">
              Le <span className="text-foreground font-semibold">BTS SIO</span> forme des professionnels capables de répondre aux besoins 
              informatiques des organisations en proposant des solutions adaptées. Cette formation de niveau Bac+2 
              se décline en deux spécialités : <span className="text-primary font-semibold">SISR</span> et <span className="text-accent font-semibold">SLAM</span>.
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* SISR Card - My specialty */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="skill-card relative overflow-hidden"
          >
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold">
                Ma spécialité
              </span>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                <Server size={32} className="text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Option SISR</h3>
                <p className="text-primary text-sm font-medium">Solutions d'Infrastructure, Systèmes et Réseaux</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Cette option forme des professionnels capables d'installer, configurer et maintenir les équipements 
              et services informatiques. Le technicien SISR assure la <span className="text-foreground">disponibilité</span>, 
              la <span className="text-foreground">sécurité</span> et l'<span className="text-foreground">intégrité</span> des 
              systèmes et réseaux de l'organisation.
            </p>
            
            <h4 className="text-foreground font-semibold mb-3">Compétences acquises :</h4>
            <ul className="space-y-2 mb-6">
              {[
                'Administration des systèmes (Windows Server, Linux)',
                'Configuration et maintenance des réseaux',
                'Mise en place de la sécurité informatique',
                'Virtualisation et cloud computing',
                'Supervision et monitoring des infrastructures',
                'Gestion des sauvegardes et de la haute disponibilité',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {['Windows Server', 'Linux', 'Cisco', 'VMware', 'Active Directory', 'DNS/DHCP', 'VPN', 'Firewall'].map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* SLAM Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="skill-card"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center">
                <Code size={32} className="text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Option SLAM</h3>
                <p className="text-accent text-sm font-medium">Solutions Logicielles et Applications Métiers</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Cette option forme des développeurs capables de concevoir, développer et maintenir des solutions 
              logicielles. Le technicien SLAM participe à la création d'applications répondant aux besoins 
              spécifiques des organisations.
            </p>
            
            <h4 className="text-foreground font-semibold mb-3">Compétences acquises :</h4>
            <ul className="space-y-2 mb-6">
              {[
                'Développement d\'applications web et mobiles',
                'Conception et gestion de bases de données',
                'Programmation orientée objet',
                'Intégration et déploiement continu',
                'Tests et maintenance des applications',
                'Analyse des besoins utilisateurs',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {['PHP', 'JavaScript', 'Python', 'SQL', 'React', 'HTML/CSS', 'Git', 'API REST'].map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Common Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-bold text-foreground text-center mb-8">Compétences transversales</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Cybersécurité', desc: 'Protection des données et des systèmes' },
              { icon: Network, title: 'Réseaux', desc: 'Configuration et maintenance' },
              { icon: Database, title: 'Bases de données', desc: 'Conception et administration' },
              { icon: Monitor, title: 'Support', desc: 'Assistance aux utilisateurs' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-card/30 border border-border/20 hover-lift"
              >
                <item.icon size={32} className="text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BTSSection;
