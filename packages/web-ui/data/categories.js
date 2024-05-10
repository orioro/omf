export const CATEGORIES = [
  {
    id: 'cuidado',
    color: 'var(--salmao-bg)',
    label: 'Cuidado e Assistência',
  },
  {
    id: 'educacao',
    color: 'var(--roxo-bg)',
    label: 'Educação',
  },
  {
    id: 'infraestrutura_urbana',
    color: 'var(--mostarda)',
    label: 'Infraestrutura Urbana',
  },
  {
    id: 'politica',
    color: 'var(--salmao-light)',
    label: 'Política e Vida Pública',
  },
  {
    id: 'saude',
    color: 'var(--verde)',
    label: 'Saúde',
  },
  {
    id: 'trabalho',
    color: 'var(--mostarda)',
    label: 'Trabalho e Renda',
  },
  {
    id: 'violencia',
    color: 'var(--salmao)',
    label: 'Violência',
  },
  {
    id: 'moradia',
    color: 'var(--salmao-light)',
    label: 'Moradia',
  },
]

export const CATEGORIES_BY_ID = CATEGORIES.reduce(
  (acc, cat) => ({
    ...acc,
    [cat.id]: cat,
  }),
  {}
)
