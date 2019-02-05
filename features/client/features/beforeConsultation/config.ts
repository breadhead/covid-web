import { StepPointerType } from '@app/features/common/progressBar'
import { NON_BREAKING_HYPHEN, NON_BREAKING_SPACE } from '@app/lib/config'

export const progressBarSteps = [
  {
    title: 'Заполните заявку',
    type: StepPointerType.Empty,
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
    text: `Консультация в${NON_BREAKING_SPACE}сервисе Фонда профилактики рака “Просто${NON_BREAKING_SPACE}спросить” (далее Сервис)  не${NON_BREAKING_SPACE}является медицинской услугой, эксперты Сервиса не${NON_BREAKING_SPACE}ставят диагноз и${NON_BREAKING_SPACE}не${NON_BREAKING_SPACE}назначают лечение — это возможно только при личном посещении врача и${NON_BREAKING_SPACE}только в${NON_BREAKING_SPACE}медицинском учреждении. Эксперты Сервиса предоставляют только справочную информацию по${NON_BREAKING_SPACE}заболеванию, методам лечения, побочным эффектам, осложнениям и${NON_BREAKING_SPACE}т.д.`,
  },
  {
    id: '2',
    text: `Результатом консультации является понимание того, какие действия необходимо принять в${NON_BREAKING_SPACE}той или иной ситуации, а${NON_BREAKING_SPACE}также варианты медицинских учреждений и${NON_BREAKING_SPACE}имена конкретных специалистов, к${NON_BREAKING_SPACE}которым можно обратиться за${NON_BREAKING_SPACE}помощью.`,
  },
  {
    id: '3',
    text: `Если вы${NON_BREAKING_SPACE}заполняете анкету не${NON_BREAKING_SPACE}за себя а${NON_BREAKING_SPACE}за кого-то из${NON_BREAKING_SPACE}близких, обратите внимание, что нам нужны данные именно того лица, для которого вы${NON_BREAKING_SPACE}спрашиваете.`,
  },
  {
    id: '4',
    text: `Сервис работает на${NON_BREAKING_SPACE}благотворительные пожертвования и${NON_BREAKING_SPACE}бесплатен для вас. Вы заполняете анкету, после чего задаете вопросы эксперту. На${NON_BREAKING_SPACE}подготовку ответа экспертом уходит около трех рабочих дней.`,
  },
  {
    id: '5',
    text: `Анкету можно заполнить в${NON_BREAKING_SPACE}несколько заходов. Черновик анкеты сохраняется.`,
  },
  {
    id: '6',
    text: `Если вы${NON_BREAKING_SPACE}задаете свой вопрос как участник корпоративной программы, укажите в${NON_BREAKING_SPACE}анкете название компании, отдела и${NON_BREAKING_SPACE}кодовое слово, которое вам сообщил работодатель.`,
  },
  {
    id: '7',
    text: `Не${NON_BREAKING_SPACE}волнуйтесь, заполняйте анкету своими словами. Если${NON_BREAKING_SPACE}что${NON_BREAKING_HYPHEN}то нужно будет уточнить, мы с${NON_BREAKING_SPACE}вами свяжемся и${NON_BREAKING_SPACE}спросим.`,
  },
]
