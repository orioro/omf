import IND_01_mortalidade_materna from './IND_01_mortalidade_materna'
import IND_02_cancer_colo_utero from './IND_02_cancer_colo_utero'
import IND_03_cancer_mama from './IND_03_cancer_mama'
import IND_04_feminicidio from './IND_04_feminicidio'
import IND_06_GRAVIDEZ_ADOLESCENCIA from './IND_06_gravidez_adolescencia'
import IND_07_DOMESTICO_CUIDADO from './IND_07_domestico_e_cuidado'
import IND_08_MULHERES_POLITICA from './IND_08_mulheres_politica'
import IND_09_ESCOLARIZACAO from './IND_09_escolarizacao'

export const INDICATORS = [
  IND_01_mortalidade_materna,
  IND_02_cancer_colo_utero,
  IND_03_cancer_mama,
  IND_04_feminicidio,
  IND_06_GRAVIDEZ_ADOLESCENCIA,
  IND_07_DOMESTICO_CUIDADO,
  IND_08_MULHERES_POLITICA,
  IND_09_ESCOLARIZACAO,
].map((ind) => ({
  ...ind,
  id: ind.label,
}))
