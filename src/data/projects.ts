import type { ProjectItem } from '@/types'


export const projects: ProjectItem[] = [
{
title: 'Multi-Agent Two-Stage Retrieval',
description: 'Cascade retriever that combines BM25, Contriever, and SPLADE with LLM-based filtering.',
tags: ['IR', 'LLM', 'BEIR'],
repo: 'https://github.com/yourname/multistage-retrieval'
},
{
title: 'Nextcloud Cluster Automation',
description: 'Ansible roles for HA Nextcloud with F5, Redis, and Galera.',
tags: ['Ansible', 'Nextcloud', 'DevOps']
}
]