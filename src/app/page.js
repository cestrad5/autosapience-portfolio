import { getRecentRepos } from '@/lib/github';
import { 
  Terminal, 
  Settings, 
  Database, 
  ExternalLink,
  Mail,
  Code2,
  Cpu,
  ArrowRight
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const metadata = {
  title: 'Camilo Estrada | Product Engineer & B2B Automator',
  description: 'Portafolio de Camilo Estrada - AutoSapience',
};

export default async function Home() {
  const repos = await getRecentRepos();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500/30">
      
      {/* HEADER / NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Cpu className="text-emerald-400" size={24} />
            <span className="text-xl font-bold tracking-tight text-white">Auto<span className="text-emerald-400">Sapience</span></span>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/cestrad5" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/camiloestradadeveloper" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:tucorreo@ejemplo.com" className="text-slate-400 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-20 space-y-32">
        
        {/* HERO SECTION */}
        <section className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-sm text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for new opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
            Product Engineer & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              B2B Automator.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed">
            I build intelligent automation engines and custom software solutions for traditional businesses, bridging the gap between operations and technology.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#casos" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 px-6 py-3 rounded-lg font-semibold transition-all">
              Ver Casos de Estudio
              <ArrowRight size={18} />
            </a>
            <a href="https://www.linkedin.com/in/camiloestradadeveloper" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold transition-all border border-slate-700">
              Contactar en LinkedIn
            </a>
          </div>
        </section>

        {/* CASOS DE ESTUDIO (ESTÁTICOS) */}
        <section id="casos" className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Database className="text-emerald-400" /> 
              Casos de Estudio
            </h2>
            <p className="text-slate-400 max-w-2xl">
              Soluciones de software construidas para resolver problemas operativos reales en Pymes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Caso 1 */}
            <div className="group bg-slate-900/50 border border-slate-800 rounded-xl p-8 hover:border-emerald-500/50 transition-colors">
              <div className="h-12 w-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-6">
                <Settings className="text-emerald-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Bonetto B2B Ecosystem</h3>
              <p className="text-slate-400 mb-6 line-clamp-3">
                Digitalización completa del proceso de cotización y despacho para una fábrica de muebles. Reducción del tiempo de cotización a segundos usando automatización.
              </p>
              <div className="flex gap-2 mb-8">
                <span className="px-2 py-1 text-xs font-medium bg-slate-800 text-slate-300 rounded">React</span>
                <span className="px-2 py-1 text-xs font-medium bg-slate-800 text-slate-300 rounded">Node.js</span>
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-emerald-400 font-medium group-hover:underline">
                Leer el caso completo <ArrowRight size={16} />
              </a>
            </div>

            {/* Caso 2 */}
            <div className="group bg-slate-900/50 border border-slate-800 rounded-xl p-8 hover:border-cyan-500/50 transition-colors">
              <div className="h-12 w-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-6">
                <Terminal className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Livestock Management SaaS</h3>
              <p className="text-slate-400 mb-6 line-clamp-3">
                Plataforma integral para la gestión ganadera. Trazabilidad de animales, control de pesajes, sanidad y reportes estadísticos para fincas modernas.
              </p>
              <div className="flex gap-2 mb-8">
                <span className="px-2 py-1 text-xs font-medium bg-slate-800 text-slate-300 rounded">Next.js</span>
                <span className="px-2 py-1 text-xs font-medium bg-slate-800 text-slate-300 rounded">PostgreSQL</span>
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-cyan-400 font-medium group-hover:underline">
                Leer el caso completo <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* LABORATÓRIO DE CÓDIGO (GITHUB DINÁMICO) */}
        <section className="space-y-12 relative">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Code2 className="text-emerald-400" /> 
              Laboratorio de Código
            </h2>
            <p className="text-slate-400 max-w-2xl">
              Experimentos, herramientas y repositorios recientes extraídos automáticamente en tiempo real desde mi GitHub.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.length > 0 ? (
              repos.map((repo) => (
                <a 
                  key={repo.id} 
                  href={repo.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col bg-slate-900 border border-slate-800 rounded-xl p-6 hover:bg-slate-800 hover:-translate-y-1 transition-all"
                >
                  <div className="flex justify-between items-start mb-4">
                    <FaGithub className="text-slate-400" size={24} />
                    <ExternalLink className="text-slate-600" size={18} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 truncate" title={repo.name}>
                    {repo.name}
                  </h3>
                  <p className="text-sm text-slate-400 mb-6 flex-grow line-clamp-2">
                    {repo.description || "Sin descripción disponible."}
                  </p>
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-800">
                    <span className="text-xs font-medium px-2 py-1 bg-slate-800 text-slate-300 rounded-md">
                      {repo.language || "Code"}
                    </span>
                    <span className="text-xs text-slate-500">
                      Actualizado: {new Date(repo.updated_at).toLocaleDateString()}
                    </span>
                  </div>
                </a>
              ))
            ) : (
              <div className="col-span-full p-8 border border-dashed border-slate-700 rounded-xl text-center">
                <p className="text-slate-400">No se pudieron cargar los repositorios en este momento.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-12 mt-20">
        <div className="max-w-6xl mx-auto px-6 text-center text-slate-500">
          <p>© {new Date().getFullYear()} Camilo Estrada. Diseñado e implementado con Next.js y Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
