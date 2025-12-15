import { motion } from 'framer-motion';
import { Server, Network, Shield, Settings, FolderOpen, ExternalLink } from 'lucide-react';

const situationsPro = [
  {
    icon: Server,
    title: 'Mise en place d\'un serveur Active Directory',
    context: 'Dans le cadre de la gestion d\'une infrastructure réseau d\'entreprise',
    description: 'Installation et configuration d\'un contrôleur de domaine Windows Server avec Active Directory. Création d\'unités organisationnelles, de groupes et d\'utilisateurs. Mise en place de stratégies de groupe (GPO).',
    competences: ['Administration Windows Server', 'Active Directory', 'GPO', 'DNS'],
    type: 'Infrastructure',
  },
  {
    icon: Network,
    title: 'Configuration d\'un réseau d\'entreprise',
    context: 'Projet de mise en place d\'une infrastructure réseau sécurisée',
    description: 'Configuration de switchs et routeurs Cisco. Mise en place de VLANs pour segmenter le réseau. Configuration du routage inter-VLAN et des services DHCP.',
    competences: ['Cisco IOS', 'VLAN', 'Routage', 'DHCP'],
    type: 'Réseau',
  },
  {
    icon: Shield,
    title: 'Sécurisation d\'une infrastructure',
    context: 'Renforcement de la sécurité du système d\'information',
    description: 'Mise en place d\'un pare-feu pfSense. Configuration des règles de filtrage. Déploiement d\'un VPN pour les accès distants sécurisés. Mise en œuvre d\'une politique de sauvegarde.',
    competences: ['pfSense', 'VPN', 'Firewall', 'Sauvegarde'],
    type: 'Sécurité',
  },
  {
    icon: Settings,
    title: 'Virtualisation avec VMware/Proxmox',
    context: 'Optimisation des ressources informatiques',
    description: 'Déploiement d\'un environnement de virtualisation. Création et gestion de machines virtuelles. Configuration de la haute disponibilité et des snapshots.',
    competences: ['VMware ESXi', 'Proxmox', 'Virtualisation', 'Haute disponibilité'],
    type: 'Virtualisation',
  },
];

const EpreuveE5Section = () => {
  return (
    <section id="epreuve-e5" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <FolderOpen size={18} />
            <span className="text-sm font-medium">Épreuve E5</span>
          </div>
          <h2 className="section-title">Situations Professionnelles</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            L'épreuve E5 évalue les compétences techniques acquises à travers des situations professionnelles 
            réalisées en entreprise et en centre de formation.
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
            <h3 className="text-xl font-bold text-foreground mb-4">Qu'est-ce que l'épreuve E5 ?</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              L'épreuve E5 <span className="text-foreground font-medium">"Administration des systèmes et des réseaux"</span> (pour SISR) 
              est une épreuve pratique coefficient 4. Elle permet d'évaluer les compétences du candidat 
              à travers des réalisations professionnelles effectuées en entreprise ou en centre de formation.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 rounded-lg bg-secondary/30">
                <p className="text-2xl font-bold text-primary">Coefficient 4</p>
                <p className="text-sm text-muted-foreground">Poids dans l'examen</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary/30">
                <p className="text-2xl font-bold text-primary">40 min</p>
                <p className="text-sm text-muted-foreground">Durée de l'oral</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary/30">
                <p className="text-2xl font-bold text-primary">2 situations</p>
                <p className="text-sm text-muted-foreground">Minimum requises</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Situations professionnelles */}
        <div className="grid md:grid-cols-2 gap-8">
          {situationsPro.map((situation, index) => (
            <motion.div
              key={situation.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="skill-card group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <situation.icon size={28} className="text-primary" />
                </div>
                <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium">
                  {situation.type}
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {situation.title}
              </h3>
              <p className="text-primary/80 text-sm mb-3 italic">{situation.context}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {situation.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {situation.competences.map((comp) => (
                  <span
                    key={comp}
                    className="px-3 py-1 rounded-full bg-secondary/50 text-foreground/80 text-xs"
                  >
                    {comp}
                  </span>
                ))}
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
              >
                <ExternalLink size={16} />
                Voir la documentation
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EpreuveE5Section;
