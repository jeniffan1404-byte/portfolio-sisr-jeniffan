import { motion } from 'framer-motion';
import { Rss, ExternalLink, Shield, Cloud, Cpu, BookOpen } from 'lucide-react';

const veilles = [
  {
    icon: Shield,
    title: 'Cybersécurité',
    description: 'Veille sur les dernières menaces, vulnérabilités et solutions de sécurité informatique. Suivi des actualités liées aux ransomwares, phishing, et bonnes pratiques de protection des données.',
    sources: ['ANSSI', 'CERT-FR', 'Zataz', 'The Hacker News'],
    articles: [
      { title: 'Article en cours de rédaction...', date: '2024' }
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud Computing',
    description: 'Évolution des services cloud (AWS, Azure, GCP) et leurs impacts sur les infrastructures. Nouvelles tendances en matière de virtualisation, conteneurisation avec Docker et Kubernetes.',
    sources: ['AWS Blog', 'Microsoft Azure', 'Google Cloud', 'Docker'],
    articles: [
      { title: 'Article en cours de rédaction...', date: '2024' }
    ],
  },
  {
    icon: Cpu,
    title: 'Infrastructure & Réseaux',
    description: 'Suivi des innovations en matière d\'infrastructure réseau, nouvelles normes WiFi, 5G, et évolution des équipements réseau professionnels.',
    sources: ['Cisco Blogs', 'NetworkWorld', 'Le Monde Informatique'],
    articles: [
      { title: 'Article en cours de rédaction...', date: '2024' }
    ],
  },
];

const outils = [
  { name: 'Feedly', description: 'Agrégateur de flux RSS' },
  { name: 'Google Alerts', description: 'Alertes par mots-clés' },
  { name: 'LinkedIn', description: 'Réseau professionnel' },
  { name: 'Twitter/X', description: 'Actualités en temps réel' },
];

const VeilleSection = () => {
  return (
    <section id="veille" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Rss size={18} />
            <span className="text-sm font-medium">Veille Technologique</span>
          </div>
          <h2 className="section-title">Ma Veille Technologique</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            La veille technologique est essentielle pour rester informé des évolutions du secteur IT. 
            Voici les domaines que je surveille régulièrement.
          </p>
        </motion.div>

        {/* Qu'est-ce que la veille */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="gradient-card rounded-2xl p-8 border border-border/30">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen size={24} className="text-primary" />
              <h3 className="text-xl font-bold text-foreground">Pourquoi la veille technologique ?</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Dans le domaine de l'informatique, les technologies évoluent rapidement. La veille technologique 
              permet de <span className="text-foreground">rester compétitif</span>, d'<span className="text-foreground">anticiper les évolutions</span> 
              et de <span className="text-foreground">prendre des décisions éclairées</span>. Elle fait partie intégrante du 
              métier de technicien en informatique.
            </p>
          </div>
        </motion.div>

        {/* Domaines de veille */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {veilles.map((veille, index) => (
            <motion.div
              key={veille.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="skill-card group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                <veille.icon size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{veille.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {veille.description}
              </p>
              
              <div className="mb-4">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Sources principales</p>
                <div className="flex flex-wrap gap-2">
                  {veille.sources.map((source) => (
                    <span
                      key={source}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary/50 text-foreground/80 text-xs"
                    >
                      {source}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border/30">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Articles</p>
                {veille.articles.map((article) => (
                  <a
                    key={article.title}
                    href="#"
                    className="flex items-center justify-between text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span>{article.title}</span>
                    <ExternalLink size={14} />
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Outils de veille */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold text-foreground text-center mb-8">Mes outils de veille</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {outils.map((outil, index) => (
              <motion.div
                key={outil.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
              >
                <p className="font-semibold text-foreground">{outil.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{outil.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VeilleSection;
