import { StepPointerModel, StepPointerType } from '../molecule/StepPointer'
import { managerSteps } from '../steps'

const defineType = (index: number, current: number) => {
  if (index === current) {
    return StepPointerType.Full
  }

  return StepPointerType.Stroked
}

const defineHref = (index: number, id?: string) => {
  if (!id) {
    return undefined
  }

  return [
    `/manager/new-claim/${id}`,
    `/manager/claim/${id}/situation`,
    `/manager/claim/${id}/questions`,
  ][index]
}

export function getManagerSteps(id: string, current: number) {
  return managerSteps.map(
    (name, index): StepPointerModel => {
      const href = defineHref(index, id)
      return {
        title: name,
        type: defineType(index, current),
        disabled: false,
        href,
      }
    },
  )
}
