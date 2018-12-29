import ClaimTarget from '@app/models/Claim/ClaimTarget'
import { Question } from '@app/models/Claim/QuestionsClaim'

interface QuestionsMap {
  [key: string]: Question[]
}

export const themeNamesMap = {
  heredity: 'Профилактика / наследственность',
  diagnostics: 'Диагностика / подтверждение диагноза / подозрение на рак',
  treatment: 'Лечение / осложнения / впервые установленный диагноз',
  anesthesia: 'Паллиативная помощь / улучшение качества жизни / обезболивание',
  rehab: 'Реабилитация',
  others: 'Другое',
}

const themesAndQuestions: QuestionsMap = {
  [themeNamesMap.heredity]: [
    {
      label: 'Вопросы к эксперту',
      list: [
        'Какие действия необходимо предпринять в ближайшее время?',
        'Какие обследования необходимо проходить регулярно?',
        'Как часто необходимо проходить обследования?',
        'Какие противопоказания у обследований?',
        'У какого врача нужно наблюдаться?',
        'Существуют ли препараты или процедуры для профилактики?',
        'Каким образом можно снизить риск возникновения рака?',
        'Нужна ли генетическая диагностика?',
      ],
    },
  ],
  [themeNamesMap.diagnostics]: [
    {
      label: 'Вопросы к эксперту',
      list: [
        'Какие действия необходимо предпринять в ближайшее время?',
        'Какие обследования необходимо пройти?',
        'Как часто необходимо проходить обследования?',
        'Какие противопоказания у обследований?',
        'Как подготовиться к обследованиям?',
        'У какого врача нужно наблюдаться?',
        'Как подтверждается диагноз?',
        'Что делать, если диагноз подтвердится?',
        'Что можно сделать дополнительно, чтобы повысить точность диагностики?',
        'Что означают заключения?',
        'Нужна ли генетическая диагностика?',
      ],
    },
  ],
  [themeNamesMap.treatment]: [
    {
      label: 'Общие вопросы',
      list: [
        'Какие действия необходимо предпринять в ближайшее время?',
        'Каков диагноз? (тип опухоли)',
        'Имеется ли распространеие опухоли за пределы органа?',
        'Какая стадия опухолевого процесса и что это значит?',
        'Какие методы лечения доступны в данной ситуации?',
        'Необходимо ли пройти дополнительные обследования перед началом лечения?',
        'К каким специалистам мне дополнительно необходимо обратиться?',
      ],
    },
    {
      label: 'Перед лечением',
      list: [
        'Какая цель данного лечения?',
        'Как подготовиться к лечению?',
        'Как долго проходит лечение?',
        'Какие риски и побочные эффекты у данного лечения? Как их снизить или избежать?',
        'Влияет ли данное лечение на половую жизнь? Возможно ли иметь детей при таком лечении?',
        'Необходимо ли изменить рацион питания?',
        'Как понять, успешно ли лечение?',
      ],
    },
    {
      label: 'После лечения',
      list: [
        'Необходима ли диета после лечения?',
        'Как данное лечение может отразиться на повседневной жизни?',
        'Какие обследования нужно проходить после лечения?',
        'Каковы шансы, что опухоль может вернуться? (рецидив)',
        'Что делать, если случится рецидив?',
      ],
    },
  ],
  [themeNamesMap.anesthesia]: [
    {
      label: 'Вопросы эксперту',
      list: [
        'Какие действия необходимо предпринять в ближайшее время?',
        'Как справится с симптомами?',
        'Как улучшить качество жизни?',
        'Где и как получить необходимые препараты?',
        'Какие специалисты занимаются паллиативной помощью?',
        'Какое лечение на дому можно получить?',
        'Какое лечение можно получить в специализированных учреждениях?',
      ],
    },
  ],
  [themeNamesMap.rehab]: [
    {
      label: 'Вопросы эксперту',
      list: [
        'Какие действия необходимо предпринять в ближайшее время?',
        'Нужны ли специальные процедуры / препараты?',
        'Необходима ли специальная диета?',
        'Какие существуют ограничения в повседневной жизни?',
        'Как справится с симптомами?',
      ],
    },
  ],
  [themeNamesMap.others]: [],
}

export const themes = Object.values(themeNamesMap)
export const getThemeQuestions = (theme: string) => themesAndQuestions[theme]

const targetQuestions: QuestionsMap = {
  [ClaimTarget.Found]: [
    {
      label: 'Для подопечных Фонда',
      list: [
        'Какие действия необходимо предпринять в ближайшее время?',
        'Необходимы ли запрашиваемые подопечным процедуры?',
        'Возможно ли получить необходимую помощь бесплатно?',
        'Где возможно получить необходимую помощь?',
        'Нужны ли специальные процедуры / препараты?',
      ],
    },
  ],
}

export const getTargetQuestions = (target: string) => targetQuestions[target]

export const localizations = [
  'Опухоли головы и шеи',
  'Опухоли лёгкого, средостения',
  'Опухоли желудочно-кишечного тракта',
  'Опухоли молочной железы',
  'Опухоли женской половой системы',
  'Опухоли мочевыводящей системы',
  'Опухоли мужской половой системы',
  'Опухоли головного, спинного мозга',
  'Опухоли кожи, костей и мягких тканей',
  'Заболевания крови, лимфомы',
  'Метастазы рака неизвестной локализации',
]
