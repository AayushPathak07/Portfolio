import { IconType } from 'react-icons';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaDocker, 
  FaAws, 
  FaGitAlt,
  FaDatabase,
  FaServer,
  FaJava,
  FaCode
} from 'react-icons/fa';
import {
  SiPwa, // For PWA
  SiJavascript, // For JavaScript
  SiTypescript, 
  SiPostgresql, 
  SiMongodb, 
  SiRedis, 
  SiKubernetes,
  SiFastapi,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiGo,
  SiRust,
  SiGraphql,
  SiElasticsearch,
  SiApachekafka,
  SiNginx,
  SiTerraform,
  SiJenkins,
  SiPrometheus,
  SiGrafana
} from 'react-icons/si';

export interface Technology {
  name: string;
  icon: IconType;
  color: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools';
}

export const technologies: Technology[] = [
  // Frontend Technologies
  { name: 'React', icon: FaReact, color: 'text-blue-500', category: 'frontend' },
  { name: 'PWA', icon: SiPwa, color: 'text-purple-500', category: 'frontend' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500', category: 'frontend' },
  { name: 'Web APIs', icon: FaCode, color: 'text-blue-400', category: 'frontend' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600', category: 'frontend' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-900', category: 'frontend' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500', category: 'frontend' },

  // Backend Technologies
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600', category: 'backend' },
  { name: 'Python', icon: FaPython, color: 'text-blue-600', category: 'backend' },
  { name: 'FastAPI', icon: SiFastapi, color: 'text-teal-500', category: 'backend' },
  { name: 'Express.js', icon: SiExpress, color: 'text-gray-700', category: 'backend' },
  { name: 'Go', icon: SiGo, color: 'text-cyan-600', category: 'backend' },
  { name: 'Rust', icon: SiRust, color: 'text-orange-600', category: 'backend' },
  { name: 'Java', icon: FaJava, color: 'text-red-600', category: 'backend' },
  { name: 'GraphQL', icon: SiGraphql, color: 'text-pink-500', category: 'backend' },

  // Database Technologies
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-700', category: 'database' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-700', category: 'database' },
  { name: 'Redis', icon: SiRedis, color: 'text-red-600', category: 'database' },
  { name: 'SQL', icon: FaDatabase, color: 'text-orange-600', category: 'database' },
  { name: 'Elasticsearch', icon: SiElasticsearch, color: 'text-yellow-600', category: 'database' },

  // DevOps Technologies
  { name: 'Docker', icon: FaDocker, color: 'text-blue-500', category: 'devops' },
  { name: 'Kubernetes', icon: SiKubernetes, color: 'text-blue-600', category: 'devops' },
  { name: 'AWS', icon: FaAws, color: 'text-orange-500', category: 'devops' },
  { name: 'Terraform', icon: SiTerraform, color: 'text-purple-600', category: 'devops' },
  { name: 'Jenkins', icon: SiJenkins, color: 'text-blue-700', category: 'devops' },
  { name: 'Nginx', icon: SiNginx, color: 'text-green-600', category: 'devops' },
  { name: 'Apache Kafka', icon: SiApachekafka, color: 'text-gray-800', category: 'devops' },

  // Tools
  { name: 'Git', icon: FaGitAlt, color: 'text-orange-600', category: 'tools' },
  { name: 'Prometheus', icon: SiPrometheus, color: 'text-orange-500', category: 'tools' },
  { name: 'Grafana', icon: SiGrafana, color: 'text-orange-600', category: 'tools' }
];

export const getTechnologyByName = (name: string): Technology | undefined => {
  return technologies.find(tech => tech.name.toLowerCase() === name.toLowerCase());
};

export const getTechnologiesByCategory = (category: Technology['category']): Technology[] => {
  return technologies.filter(tech => tech.category === category);
};

export const getTechnologiesByNames = (names: string[]): Technology[] => {
  return names.map(name => getTechnologyByName(name)).filter(Boolean) as Technology[];
};