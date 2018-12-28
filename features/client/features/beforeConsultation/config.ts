import { StepPointerType } from '@app/features/client/features/progressBar/molecule/StepPointer'
import { NON_BREAKING_SPACE } from '@app/lib/config'

export const progressBarSteps = [
  {
    title: 'Заполните заявку',
    type: StepPointerType.Success,
    disabled: true,
  },
  {
    title: 'Опишите ситуацию',
    type: StepPointerType.Empty,
    disabled: true,
  },
  {
    title: 'Задайте вопросы',
    type: StepPointerType.Empty,
    disabled: true,
  },
]

export const statements = [
  {
    id: '1',
    text: `Низкий риск не означает, что рак не разовьется — это означает,${NON_BREAKING_SPACE}
    что вероятность развития рака на данный момент ниже, чем в популяции, но она не равна нулю.`,
  },
  {
    id: '2',
    text: `Высокий риск не означает, что рак непременно разовьется — это означает,${NON_BREAKING_SPACE}
    что Вам необходимо принять радикальные меры для снижения риска.`,
  },
  {
    id: '3',
    text: `Тест не пригоден, если верно хотя бы одно из следующих утверждений.`,
  },
  {
    id: '4',
    text: `Низкий риск не означает, что рак не разовьется — это означает,${NON_BREAKING_SPACE}
    что вероятность развития рака на данный момент ниже, чем в популяции, но она не равна нулю.`,
  },
  {
    id: '5',
    text: `Высокий риск не означает, что рак непременно разовьется — это означает,${NON_BREAKING_SPACE}
    что Вам необходимо принять радикальные меры для снижения риска.`,
  },
  {
    id: '6',
    text: `Тест не пригоден, если верно хотя бы одно из следующих утверждений.`,
  },
  {
    id: '7',
    text: `Низкий риск не означает, что рак не разовьется — это означает,${NON_BREAKING_SPACE}
    что вероятность развития рака на данный момент ниже, чем в популяции, но она не равна нулю.`,
  },
  {
    id: '8',
    text: `Высокий риск не означает, что рак непременно разовьется — это означает,${NON_BREAKING_SPACE}
    что Вам необходимо принять радикальные меры для снижения риска.`,
  },
  {
    id: '9',
    text: `Тест не пригоден, если верно хотя бы одно из следующих утверждений.`,
  },
  {
    id: '10',
    text: `Тест не пригоден, если верно хотя бы одно из следующих утверждений.`,
  },
]
