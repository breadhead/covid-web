import { StepPointerType } from '@app/features/common/progressBar'

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
