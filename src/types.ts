export type ExperienceItem = {
  title: string
  org: string
  location?: string
  logo?: string
  start: string
  end?: string
  bullets?: string[]
}

export type EducationItem = {
  degree: string
  university: string
  location?: string
  logo?: string
  start: string
  end?: string
  bullets?: string[]
}

export type ProjectItem = {
title: string
description: string
tags: string[]
repo: string
}


export type PublicationItem = {
title: string
venue: string
year: number
authors: string
link?: string
}
