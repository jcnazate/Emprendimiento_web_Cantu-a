import React from 'react';
import {
  Link as LinkIcon,
  ClipboardList,
  Settings,
  Gift,
  Heart,
  Users,
  MessageCircle,
  Banknote,
  Tag,
  Flame
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import cantunaBg from '../img/Cantuña.jpg';

interface Section {
  id: string;
  title: string;
  icon: LucideIcon;
  content: string[];
}

const BusinessModelPage: React.FC = () => {
  const sections: Section[] = [
    {
      id: 'partners',
      title: '1. Socios Clave',
      icon: LinkIcon,
      content: [
        'Unity (motor de desarrollo)',
        'Blender (modelado 3D)',
        'Hyper3D (personajes 3D generados por IA)',
        'Mixamo (animaciones)',
        'Asset Store de Unity (assets gratuitos)',
        'Plataformas de recursos gratuitos (Kenney, OpenGameArt)',
        'Bibliotecas de audio de dominio público',
        'Equipo de desarrollo (programación, arte, sonido, narrativa)'
      ]
    },
    {
      id: 'activities',
      title: '2. Actividades Clave',
      icon: ClipboardList,
      content: [
        'Desarrollo del videojuego en Unity',
        'Implementación del Sistema Basado en Reglas (SBR)',
        'Generación procedural de niveles',
        'Optimización del rendimiento',
        'Modelado 3D de personajes y edificios',
        'Diseño visual estilo gótico-colonial',
        'Animación de personajes (Mixamo)',
        'Creación de música y efectos sonoros',
        'Pruebas, correcciones y balanceo del gameplay'
      ]
    },
    {
      id: 'resources',
      title: '3. Recursos Clave',
      icon: Settings,
      content: [
        'Software: Unity, Blender, Hyper3D, LMMS',
        'Modelos 3D, texturas y assets gratuitos',
        'Sistema Basado en Reglas para IA adaptativa',
        'Conocimientos técnicos del equipo',
        'Música folclórica (San Juanito) adaptada',
        'Personajes: Cantuña, Diablo, Diablillos',
        'Power-ups (Antorcha, Cruz, Fantasma)'
      ]
    },
    {
      id: 'value',
      title: '4. Propuesta de Valor',
      icon: Gift,
      content: [
        'Videojuego endless runner 3D inspirado en la leyenda ecuatoriana El Pacto de Cantuña.',
        'Combina cultura indígena + mitología + gameplay moderno.',
        'Dificultad adaptativa con SBR que responde al jugador.',
        'Ambientación fiel del Quito colonial con estética gótico-barroca.',
        'Jugabilidad fluida, accesible y altamente rejugable.',
        'Recreación interactiva de una leyenda ecuatoriana.'
      ]
    },
    {
      id: 'relationships',
      title: '5. Relación con Clientes',
      icon: Heart,
      content: [
        'Experiencia accesible e intuitiva.',
        'Tutorial integrado.',
        'Curva de dificultad progresiva.',
        'Feedback visual y sonoro inmersivo.',
        'Experiencia orientada al entretenimiento y aprendizaje cultural.'
      ]
    },
    {
      id: 'segments',
      title: '6. Segmentos de Clientes',
      icon: Users,
      content: [
        'Gamers casuales de juegos tipo runner.',
        'Jóvenes interesados en videojuegos 3D.',
        'Estudiantes que aprenden cultura ecuatoriana.',
        'Personas interesadas en leyendas y folclore.',
        'Público general que disfruta de retos cortos y rejugables.'
      ]
    },
    {
      id: 'channels',
      title: '7. Canales',
      icon: MessageCircle,
      content: [
        'Plataformas digitales futuras (Itch.io, WebGL, Play Store)',
        'Redes sociales del estudio',
        'Presentaciones académicas',
        'Portafolios de los autores',
        'Demostraciones y eventos educativos'
      ]
    },
    {
      id: 'costs',
      title: '8. Estructura de Costes',
      icon: Tag,
      content: [
        'Total gastado: $0 (trabajo con presupuesto cero)',
        'Uso de herramientas totalmente gratuitas',
        'Costo en horas de trabajo del equipo',
        'Modelado, animación, arte, programación sin gasto económico'
      ]
    },
    {
      id: 'revenue',
      title: '9. Fuentes de Ingresos',
      icon: Banknote,
      content: [
        'Proyecto académico sin ingresos actuales',
        'Posibles ingresos futuros:',
        'Publicación en plataformas digitales',
        'Versión extendida o remasterizada',
        'Merchandising cultural',
        'Presentaciones educativas y exhibiciones'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-volcanic-black relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="fixed inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url(${cantunaBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-20 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block p-4 rounded-full bg-black/50 border-2 border-lava-red mb-6 animate-pulse">
            <Flame className="w-12 h-12 text-gold" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold-gaming text-transparent bg-clip-text bg-gradient-to-r from-lava-red via-gold to-lava-red uppercase tracking-widest drop-shadow-lg">
            Modelo de Negocio
          </h1>
          <p className="mt-6 text-xl text-gray-300 font-gaming max-w-2xl mx-auto border-b-2 border-lava-red pb-4">
            El Pacto de Cantuña: Estrategia y Visión
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-lava-red via-gold to-lava-red opacity-50"></div>

          {sections.map((section, index) => (
            <div key={section.id} className={`mb-16 flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}>

              {/* Content Card */}
              <div className="w-full md:w-5/12 pl-12 md:pl-0 md:px-8">
                <div className="bg-black/60 backdrop-blur-sm border border-gray-800 p-6 rounded-xl hover:border-gold transition-all duration-300 transform hover:-translate-y-2 shadow-2xl group">
                  <div className="flex items-center mb-4 border-b border-gray-700 pb-2">
                    <div className="p-2 bg-lava-red/20 rounded-lg mr-3 group-hover:bg-gold/20 transition-colors">
                      <section.icon className="w-6 h-6 text-lava-red group-hover:text-gold transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold-gaming text-white group-hover:text-gold transition-colors">
                      {section.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {section.content.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-300 text-sm group-hover:text-white transition-colors">
                        <span className="text-lava-red mr-2 mt-1">♦</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Timeline Node */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-volcanic-black border-4 border-gold rounded-full z-10 shadow-[0_0_15px_rgba(255,215,0,0.5)] flex items-center justify-center">
                <div className="w-2 h-2 bg-lava-red rounded-full animate-ping"></div>
              </div>

              {/* Spacer for the other side */}
              <div className="w-full md:w-5/12 hidden md:block"></div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default BusinessModelPage;
