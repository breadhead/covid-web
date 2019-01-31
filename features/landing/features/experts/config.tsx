import { ASTERISK, NON_BREAKING_SPACE } from '@app/lib/config'

export const experts = [
  {
    id: '1',
    photo: '/static/images/experts/Berkut.jpg',
    name: 'Беркут Мария Владимировна',
    specialization: 'Хирургический онколог, уролог',
    info: [
      'Место работы: Отделение онкоурологии и общей онкологии НМИЦ онкологии им. Н.Н. Петрова',
      'Сфера деятельности: диагностика и лечение злокачественных и доброкачественных образований мочевыводящих путей, мужских половых органов, реконструктивно пластическая хирургия везико-вагинальных и ректо-везикальных свищей.',
      'Членство в профессиональных сообществах: Член Европейской и Американской Ассоциации Урологов, Европейское общество медицинской онкологии',
      'Хирургический стаж: с 2015 года',
      'Публикации: 26 самостоятельных публикаций',
      'Патент № 2675695 от 24.12.2018г: «Способ лечения рака предстательной железы высокого и очень высокого риска»',
    ],
  },
  {
    id: '2',
    photo: '/static/images/experts/Gavrilyukov.jpg',
    name: 'Гаврилюков Артем Викторович',
    specialization: 'Онкоколопроктолог, хирург',
    info: [
      'Место работы: отделение онкоколопроктологии Московской городской онкологической больницы №62.',
      'Сфера деятельности: диагностика и лечение доброкачественных и злокачественных новообразований толстой и прямой кишки, тонкой кишки.',
      'Членство в профессиональных сообществах: Европейское общество медицинских онкологов (European Society for Medical Oncology – ESMO), Европейское общество хирургов-гастроэнтерологов (European Digestive Surgery – EDS), Международный клуб специалистов по колоректальному раку (International Colorectal Cancer Club).',
      'Научная деятельность: более 15 публикаций тезисов и статей в отечественной и зарубежной литературе, выступления на российских и зарубежных конференциях.',
    ],
  },
  {
    id: '3',
    photo: '/static/images/experts/Zaiceva.jpg',
    name: 'Зайцева Юлия Александровна',
    specialization: 'Онколог-химиотерапевт',
    info: [
      'Место работы: Клиническая больница №2 “Медси”, онкологическое отделение',
      'Сфера деятельности: диагностика и лекарственное лечение всех видов злокачественных опухолей* (химиотерапия, таргетная терапия, иммунотерапия, гормонотерапия)',
      ' *кроме гематологических злокачественных заболеваний',
      'Членство в профессиональных сообществах: Член Европейского общества медицинской онкологии (ESMO), Член Американского общества клинической онкологии (ASCO), Член Российского общества клинической онкологии (RUSSCO)</li>',
      'Стаж работы: с 2016 г.',
    ],
  },
  {
    id: '4',
    photo: '/static/images/experts/Korobejnikova.jpg',
    name: 'Коробейникова Екатерина Александровна',
    specialization: 'Онколог-химиотерапевт',
    info: [
      `Место работы: АО «Европейский Медицинский Центр» отделение онкологии и гематологии, Москва
    Сфера деятельности: диагностика и лекарственное лечение всех видов злокачественных опухолей${ASTERISK} (химиотерапия, таргетная терапия, иммунотерапия, гормонотерапия), в том числе по международным протоколам`,
      `${ASTERISK}кроме гематологических злокачественных заболеваний`,
      `Членство в профессиональных организациях: 
    - Член профессионального Российского общества химиотерапевтов (RUSSCO).
    - Член Европейского общества медицинской онкологии (ESMO).
    Стаж работы: с${NON_BREAKING_SPACE}2016 года]`,
    ],
  },
  // {
  //   id: '5',
  //   photo: '/static/images/experts/Kotov.jpg',
  //   name: 'Андрей Розов',
  //   specialization: 'Онколог',
  //   description:
  //     'Онколог, онкодерматолог\nВрач высшей категории, кандидант медицинских наук, стаж 12 лет',
  //   info: `Дифференцирует характер кожных новообразований. Лечит доброкачественные и${NON_BREAKING_SPACE}злокачественные опухоли кожи и${NON_BREAKING_SPACE}внутренних органов. Специализируется на${NON_BREAKING_SPACE}терапии опухолевых поражений молочной железы – аденом, фибром, фиброаденом, внутрипротоковых папиллом, рака. Подбирает лучевую и${NON_BREAKING_SPACE}химиотерапию при установленных онкологических процессах.`,
  // },
  {
    id: '6',
    photo: '/static/images/experts/Stepanova.jpg',
    name: 'Степанова Мария Леонидовна',
    specialization: 'Онколог - химиотерапевт',
    info: [
      `Клинический Научно-практический центр современных видов медицинской помощи (онкологический), г. СПб.`,
      `Сфера деятельности: диагностика и лечение злокачественных опухолей (химиотерапия, таргетная терапия, иммунотерапия, гормонотерапия). 
    Членство в профессиональных сообществах: ESMO, RUSSCO. Стаж работы с 2015 года`,
    ],
  },
  {
    id: '7',
    photo: '/static/images/experts/Menzulin.jpg',
    name: 'Мензулин Руслан Сергеевич',
    specialization: 'Хирург-онколог',
    info: [
      'Место работы: Федеральный научный клинический центр ФМБА России; ОАО “Клиники Чайка”',
      'Сфера деятельности: диагностика и лечение злокачественных и доброкачественных образований органов грудной клетки, брюшной полости, малого таза.',
      'Членство в профессиональных сообществах: Член Европейского общества медицинской онкологии, Европейского общества хирургии ЖКТ',
      'Хирургический стаж: с 2017 год',
    ],
  },
  {
    id: '8',
    photo: '/static/images/experts/Petrachkov.jpg',
    name: 'Петрачков Александр Олегович',
    specialization: 'Хирург-онколог',
    info: [
      `Место работы: СПБГУ клиника высоких медицинских технологий им.Н.И.Пирогова, Онкологический центр комбинированных методов лечения.`,
      `Сфера деятельности: Диагностика и лечение рака молочной железы, онкологическая и реконструктивная хирургия молочной железы. 
    Членство в профессиональных сообществах: ESMO, RUSSCO. Стаж с${NON_BREAKING_SPACE}2016 года`,
    ],
  },
  // {
  //   id: '9',
  //   photo: '/static/images/experts/Lopushanskaya.jpg',
  //   name: 'Владимир Свистунов',
  //   specialization: 'Онколог',
  //   description:
  //     'Онколог, онкодерматолог\nВрач высшей категории, кандидант медицинских наук, стаж 12 лет',
  //   info: `Дифференцирует характер кожных новообразований. Лечит доброкачественные и${NON_BREAKING_SPACE}злокачественные опухоли кожи и${NON_BREAKING_SPACE}внутренних органов. Специализируется на${NON_BREAKING_SPACE}терапии опухолевых поражений молочной железы – аденом, фибром, фиброаденом, внутрипротоковых папиллом, рака. Подбирает лучевую и${NON_BREAKING_SPACE}химиотерапию при установленных онкологических процессах.`,
  // },
  {
    id: '10',
    photo: '/static/images/experts/Korobejnikova.jpg',
    name: 'Павлов Ростислав Владимирович',
    specialization: 'Хирург-онколог',
    info: [
      `СПБГУ клиника высоких медицинских технологий им.Н.И.Пирогова, Онкологический центр комбинированных методов лечения.`,
      `Сфера деятельности: Диагностика и лечение рака желудка, колоректального рака, гепатопакреатобилиарной системы.`,
      `Членство в профессиональных сообществах: ESMO, RUSSCO, ASCO. Стаж с 2015 года`,
    ],
  },
]
