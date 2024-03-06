import IND_01_mortalidade_materna from './IND_01_mortalidade_materna'
import IND_02_cancer_colo_utero from './IND_02_cancer_colo_utero'
import IND_03_cancer_mama from './IND_03_cancer_mama'
import IND_04_feminicidio from './IND_04_feminicidio'
import IND_06_GRAVIDEZ_ADOLESCENCIA from './IND_06_gravidez_adolescencia'
import IND_07_DOMESTICO_CUIDADO from './IND_07_domestico_e_cuidado'
import IND_08_MULHERES_POLITICA from './IND_08_mulheres_politica'
import IND_09_ESCOLARIZACAO from './IND_09_escolarizacao'
import IND_10_vagas_em_creches from './IND_10_vagas_em_creches'
import IND_11_grau_escolaridade from './IND_11_grau_escolaridade'
import IND_12_violencia from './IND_12_violencia'
import IND_13_taxa_desemprego from './IND_13_taxa_desemprego'
import IND_15_assedio_no_transporte from './IND_15_assedio_no_transporte'
import IND_16_desigualdade_salarial from './IND_16_desigualdade_salarial'

export const INDICATORS = [
  IND_01_mortalidade_materna,
  IND_02_cancer_colo_utero,
  IND_03_cancer_mama,
  IND_04_feminicidio,
  IND_06_GRAVIDEZ_ADOLESCENCIA,
  IND_07_DOMESTICO_CUIDADO,
  IND_08_MULHERES_POLITICA,
  IND_09_ESCOLARIZACAO,
  IND_10_vagas_em_creches,
  IND_11_grau_escolaridade,
  IND_12_violencia,
  IND_13_taxa_desemprego,
  IND_15_assedio_no_transporte,
  IND_16_desigualdade_salarial,
].map((ind) => ({
  ...ind,
  id: ind.label,
}))
