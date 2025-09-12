import {
  SiPython, SiTypescript, SiReact, SiFastapi, SiNodedotjs,
  SiSpringboot, SiPytorch, SiGit, SiDocker, SiMysql, SiKubernetes, SiLinux
} from 'react-icons/si'
import {FaAws,FaJava} from 'react-icons/fa'
import { VscSymbolMisc } from 'react-icons/vsc'
import { FaBrain } from 'react-icons/fa'
import { BsCodeSlash, BsTools } from 'react-icons/bs'
import { JSX } from 'react'

export type SkillItem = {
  name: string
  logo: JSX.Element
}

// Define a type for a skill group
export type SkillGroup = {
  groupName: string
  groupLogo: JSX.Element
  items: SkillItem[]
}

export const skills: SkillGroup[] = [
  {
    groupName: 'Languages',
    groupLogo: <BsCodeSlash size={24} />,
    items: [
      { name: 'Python', logo: <SiPython /> },
      { name: 'TypeScript', logo: <SiTypescript /> },
      { name: 'Java', logo: <FaJava /> },
      { name: 'SQL', logo: <SiMysql /> } 
    ]
  },
  {
    groupName: 'Frameworks',
    groupLogo: <SiReact size={24} />,
    items: [
      { name: 'React', logo: <SiReact /> },
      { name: 'FastAPI', logo: <SiFastapi /> },
      { name: 'Node.js', logo: <SiNodedotjs /> },
      { name: 'Spring Boot', logo: <SiSpringboot /> }
    ]
  },
  {
    groupName: 'ML & Data',
    groupLogo: <FaBrain size={24} />,
    items: [
      { name: 'PyTorch', logo: <SiPytorch /> },
      { name: 'Ray', logo: <VscSymbolMisc /> },
      { name: 'Flower (Federated)', logo: <VscSymbolMisc /> },
      { name: 'NLP Toolkits', logo: <VscSymbolMisc /> }
    ]
  },
  {
    groupName: 'Tools & DevOps',
    groupLogo: <BsTools size={24} />,
    items: [
      { name: 'Git', logo: <SiGit /> },
      { name: 'Docker', logo: <SiDocker /> },
      { name: 'AWS', logo: <FaAws /> },
      { name: 'Kubernetes', logo: <SiKubernetes /> },
      { name: 'Linux', logo: <SiLinux /> }
    ]
  }
]