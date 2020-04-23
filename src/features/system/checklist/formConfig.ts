import * as yup from 'yup';

import { FormComponentType } from '@front/features/common/form/FormConstructor';
import { InputType } from '@front/ui/Input';

import cx from 'classnames';

const standardInputGroup = (name, title, styles, level = 2) => {
  return {
    type: FormComponentType.FieldGroup,
    title,
    level,
    className: styles.rowInputGroup,
    children: [
      {
        type: FormComponentType.Number,
        className: styles.small,
        label: {
          text: 'На сколько суток хватит?',
        },
        props: {
          name: `${name}DaysRemaining`,
          validate: yup.number(),
        },
      },
      {
        type: FormComponentType.Toggle,
        className: cx(styles.small, styles.thumblr),
        label: {
          text: 'Прогнозируете проблемы с поставкой?',
        },
        props: {
          name: `${name}ShortageExpected`,
        },
      },
    ],
  };
};

export const formConfig = (styles) => ({
  steps: [
    {
      type: FormComponentType.FieldGroup,
      title: 'Средства индивидуальной защиты',
      className: styles.step,
      level: 1,
      children: [
        standardInputGroup(
          'disposableSuits',
          'Одноразовые костюмы',
          styles,
          
        ),
        standardInputGroup(
          'disposableRobes',
          'Одноразовые халаты',
          styles,
        ),
        standardInputGroup('glasses', 'Очки', styles),
        standardInputGroup(
          'regularMasks',
          'Маски обычные',
          styles,
        ),
        standardInputGroup(
          'respiratorsFFP2',
          'Респираторы FFP2',
          styles,
        ),
        standardInputGroup(
          'respiratorsFFP3',
          'Респираторы FFP3',
          styles,
        ),
        standardInputGroup(
          'shoeCovers',
          'Бахилы (высокие, хирургические)',
          styles,
        ),
        standardInputGroup(
          'disposableGloves',
          'Одноразовые перчатки',
          styles,
        ),
        standardInputGroup('antiseptics', 'Антисептики', styles),
      ],
    },
    {
      type: FormComponentType.FieldGroup,
      title: 'Оксигенотерапия и респираторная терапия',
      className: styles.step,
      level: 1,
      children: [
        standardInputGroup(
          'videoLaryngoscopes',
          'Видеоларингоскопы',
          styles,
        ),
        standardInputGroup(
          'oxygenConcentrators',
          'Кислородные концентраторы',
          styles,
        ),
        standardInputGroup(
          'regularNasalCannula',
          'Обычная носовая канюля',
          styles,
        ),
        standardInputGroup(
          'oxygenMask',
          'Кислородная лицевая маска с мешком (non-rebreather)',
          styles,
        ),
        standardInputGroup(
          'oxygenMoisturizers',
          'Увлажнители кислорода',
          styles,
        ),
        standardInputGroup(
          'nebulizersCompressors',
          'Небулайзеры-компрессоры',
          styles,
        ),
        standardInputGroup(
          'nebulizerAttachments',
          'Небулайзерные насадки',
          styles,
        ),
      ],
    },
    {
      type: FormComponentType.FieldGroup,
      title: 'Вентиляция легких',
      className: styles.step,
      level: 1,
      children: [
        {
          type: FormComponentType.FieldGroup,
          title: 'Рабочих аппаратов НИВЛ CPAP/BIPAP',
          level: 2,
          className: styles.rowInputGroup,
          children: [
            {
              type: FormComponentType.Number,
              className: cx(styles.small),
              label: {
                text: 'Количество аппаратов',
              },
              props: {
                name: `workingCPAP/BIPAPCount`,
                validate: yup.number(),
              },
            },
            {
              type: FormComponentType.Toggle,
              className: cx(styles.small, styles.thumblr),
              label: {
                text: 'Прогнозируете проблемы с поставкой?',
              },
              props: {
                name: `workingCPAP/BIPAPShortageExpected`,
              },
            },
          ],
        },
        standardInputGroup(
          'masksForCPAP/BIPAP',
          'Маски для аппараторв НИВЛ CPAP/BIPAP (однопатрубочных)',
          styles,
        ),
        {
          type: FormComponentType.FieldGroup,
          title: 'Рабочих аппаратов ИВЛ',
          level: 2,
          className: styles.rowInputGroup,
          children: [
            {
              type: FormComponentType.Number,
              className: styles.small,
              label: {
                text: 'Количество аппаратов',
              },
              props: {
                name: `workingVentilators`,
                validate: yup.number(),
              },
            },
            {
              type: FormComponentType.Toggle,
              className: cx(styles.small, styles.thumblr),
              label: {
                text: 'Прогнозируете проблемы с поставкой?',
              },
              props: {
                name: `workingVentilatorsShortageExpected`,
              },
            },
          ],
        },
        {
          type: FormComponentType.FieldGroup,
          title: 'Мешки Амбу',
          level: 2,
          className: styles.rowInputGroup,
          children: [
            {
              type: FormComponentType.Toggle,
              className: cx(styles.small),
              label: {
                text: 'Обеспечены?',
              },
              props: {
                name: `ambuBagsSwitcher`,
              },
            },
            {
              type: FormComponentType.Toggle,
              className: cx(styles.small, styles.thumblr),
              label: {
                text: 'Прогнозируете проблемы с поставкой?',
              },
              props: {
                name: `ambuBagsShortageExpected`,
              },
            },
          ],
        },
        {
          type: FormComponentType.FieldGroup,
          title: 'Компрессоры сжатого воздуха',
          level: 2,
          className: styles.rowInputGroup,
          children: [
            {
              type: FormComponentType.Number,
              className: cx(styles.small),
              label: {
                text: 'Количество обеспеченных коек',
              },
              props: {
                name: `airCompressorBedsCount`,
                validate: yup.number(),
              },
            },
            {
              type: FormComponentType.Toggle,
              className: cx(styles.small, styles.thumblr),
              label: {
                text: 'Прогнозируете проблемы с поставкой?',
              },
              props: {
                name: `airCompressorShortageExpected`,
              },
            },
          ],
        },
        {
          type: FormComponentType.FieldGroup,
          title: 'Концентраторы кислорода высокого давления',
          level: 2,
          className: styles.rowInputGroup,
          children: [
            {
              type: FormComponentType.Toggle,
              className: cx(styles.small),
              label: {
                text: 'Есть в наличии?',
              },
              props: {
                name: `highPressureOxygenConcentratorsSwitcher`,
              },
            },
            {
              type: FormComponentType.Toggle,
              className: cx(styles.small, styles.thumblr),
              label: {
                text: 'Прогнозируете проблемы с поставкой?',
              },
              props: {
                name: `highPressureOxygenConcentratorsShortageExpected`,
              },
            },
          ],
        },
        standardInputGroup(
          'punctureTracheostomy',
          'Пункционнные трахеостомы',
          styles,
        ),
        standardInputGroup(
          'tracheostomyTube',
          'Трахеостомические трубки',
          styles,
        ),
        standardInputGroup(
          'closedTBDsystems',
          'Закрытые системы для санации ТБД',
          styles,
        ),
        standardInputGroup(
          'TBDcatheter',
          'Обычные катетеры для санации ТБД',
          styles,
        ),
        standardInputGroup(
          'disposableBreathingCircuits',
          'Одноразовые дыхательные контуры',
          styles,
        ),
        standardInputGroup(
          'virusBacterialFilters',
          'Вирусно-бактериальные фильтры',
          styles,
        ),
        standardInputGroup(
          'heatMoistureExchangers',
          'Тепловлагообменники',
          styles,
        ),
        standardInputGroup(
          'breathingCircuitConnectors',
          'Уголковые коннекторы между контуром и эндотрахеальной трубкой',
          styles,
        ),
        standardInputGroup(
          'endotrachealTubes',
          'Эндотрахеальные трубки разных диаметров',
          styles,
        ),
        standardInputGroup(
          'intubationStylets',
          'Проводники для интубации',
          styles,
        ),
        {
          type: FormComponentType.FieldGroup,
          title:
            'Гелевые подушки подлобные подгрудные для вентиляции в прон-позиции',
          level: 2,
          className: styles.rowInputGroup,
          children: [
            {
              type: FormComponentType.Number,
              className: cx(styles.small),
              label: {
                text: 'Количество обеспеченных коек',
              },
              props: {
                name: `heliumPillowsBedCount`,
                validate: yup.number(),
              },
            },
            {
              type: FormComponentType.Toggle,
              className: cx(styles.small, styles.thumblr),
              label: {
                text: 'Прогнозируете проблемы с поставкой?',
              },
              props: {
                name: `heliumPillowsShortageExpected`,
              },
            },
          ],
        },
      ],
    },
    {
      type: FormComponentType.FieldGroup,
      title: 'Инфузионная терапия',
      className: styles.step,
      level: 1,
      children: [
        standardInputGroup('IVBags', 'Капельницы', styles),
        standardInputGroup(
          'peripheralVenousCatheters',
          'Периферические венозные катетеры',
          styles,
        ),
        standardInputGroup(
          'centralVenousCatheters',
          'Центральные венозные катетеры',
          styles,
        ),
        standardInputGroup(
          'threeWayStopcocks',
          'Трехходовые краники',
          styles,
        ),
        {
          type: FormComponentType.FieldGroup,
          title: 'Инфузоматы шприцевые',
          level: 2,
          className: styles.rowInputGroup,
          children: [
            {
              type: FormComponentType.Number,
              className: cx(styles.small),
              label: {
                text: 'Количество обеспеченных коек',
              },
              props: {
                name: `syringeInfusionPumpsBedCount`,
                validate: yup.number(),
              },
            },
            {
              type: FormComponentType.Toggle,
              className: cx(styles.small, styles.thumblr),
              label: {
                text: 'Прогнозируете проблемы с поставкой?',
              },
              props: {
                name: `syringeInfusionPumpsShortageExpected`,
              },
            },
          ],
        },
        standardInputGroup(
          'peristalticInfusionPumps',
          'Инфузоматы перистальтические',
          styles,
        ),
        standardInputGroup(
          'infusionSyringes',
          'Шприцы для инфузоматов (50 мл)',
          styles,
        ),
        standardInputGroup(
          'infusionLines',
          'Инфузионные линии',
          styles,
        ),
        standardInputGroup(
          'infusionBags',
          'Капельницы для инфузоматов',
          styles,
        ),
      ],
    },
    {
      type: FormComponentType.FieldGroup,
      title: 'Мониторинг',
      className: styles.step,
      level: 1,
      children: [
        standardInputGroup(
          'portablePulseOximeters',
          'Пульсоксиметры (портативные)',
          styles,
        ),
        standardInputGroup(
          'pulseOximeters',
          'Пульсоксиметры-мониторы',
          styles,
        ),
        standardInputGroup('capnographs', 'Капнографы', styles),
        standardInputGroup(
          'simpleMonitors',
          'Простые мониторы (ниАД, ЭКГ, SpO2)',
          styles,
        ),
        standardInputGroup(
          'bloodGasAnalyzer',
          'Анализаторы газов крови',
          styles,
        ),
      ],
    },
    {
      type: FormComponentType.FieldGroup,
      title: 'Питание',
      className: styles.step,
      level: 1,
      children: [
        standardInputGroup(
          'enteralInfusionSystems',
          'Системы для инфузии энтерального питания',
          styles,
        ),
        standardInputGroup(
          'nasogastricTubes',
          'Назогастральные/дуоденальные зонды для питания',
          styles,
        ),
        standardInputGroup(
          'peristalticEnteralInfusionPumps',
          'Инфузоматы перистальтические для энтерального питания',
          styles,
        ),
      ],
    },
    {
      type: FormComponentType.FieldGroup,
      title: 'Другое',
      className: styles.step,
      level: 1,
      children: [
        standardInputGroup('bandages', 'Бинты', styles),
        standardInputGroup('bandAids', 'Пластыри', styles),
        standardInputGroup('stickers', 'Наклейки', styles),
        standardInputGroup(
          'foleyCatheters',
          'Катетеры Фолея',
          styles,
        ),
        standardInputGroup('urineBags', 'Мочеприемники', styles),
      ],
    },
    {
      type: FormComponentType.FieldGroup,
      title:
        'Оставьте контактные данные, чтобы мы могли с вами связаться для консультации и возможного оказания помощи',
      className: cx(styles.step, styles.contacts),
      level: 1,
      children: [
        {
          type: FormComponentType.Input,
          required: true,
          label: {
            text: 'Город',
          },
          props: {
            name: 'city',
          },
        },
        {
          type: FormComponentType.Input,
          required: true,
          label: {
            text: 'Больница',
          },
          props: {
            name: 'hospital',
          },
        },
        {
          type: FormComponentType.Input,
          required: true,
          label: {
            text: 'ФИО контактного лица',
          },
          props: {
            name: 'name',
          },
        },
        {
          type: FormComponentType.Input,
          required: true,
          label: {
            text: 'Должность',
          },
          props: {
            name: 'position',
          },
        },
        {
          type: FormComponentType.PhoneInput,
          required: true,
          label: {
            text: 'Мобильный телефон',
          },
          props: {
            name: 'phone',
            placeholder: '+7',
          },
        },
        {
          type: FormComponentType.Input,
          required: true,
          label: {
            text: 'Почта',
          },
          props: {
            name: 'email',
            type: InputType.Email,
          },
        },
        {
          type: FormComponentType.TextArea,
          required: true,
          label: {
            text: 'Комментарий',
          },
          props: {
            name: 'comment',
          },
        },
      ],
    },
  ],
});
