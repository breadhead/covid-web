import { StepPointerModel, StepPointerType } from '../molecule/StepPointer'
import { clientSteps } from '../steps'

export function getClientSteps(id: string, current: number) {
  return clientSteps.map(
    (name, index): StepPointerModel => {
      const href = defineHref(index, id)
      return {
        title: name,
        type: defineType(index, current),
        disabled: defineDisabled(index, current),
        href,
      }
    },
  )
}

const defineType = (index: number, current: number) => {
  if (index < current) {
    return StepPointerType.Success
  }
  if (index === current) {
    return StepPointerType.Full
  }

  return StepPointerType.Empty
}

const defineHref = (index: number, id?: string) => {
  if (!id) {
    return undefined
  }

  return [
    `/client/new-claim/${id}`,
    `/client/claim/${id}/situation`,
    `/client/claim/${id}/questions`,
  ][index]
}

const defineDisabled = (index: number, current: number) => index > current
