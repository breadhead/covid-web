import * as yup from 'yup';
import cx from 'classnames';

import { FormComponentType } from '@front/features/common/form/FormConstructor';
import { InputType } from '@front/ui/Input';

enum standardInputType {
  daysRemaining = 'daysRemaining',
  count = 'count',
  supplied = 'supplied',
  bedsCount = 'bedsCount',
}

const standardInputGroup = (
  name,
  title,
  styles,
  type = standardInputType.daysRemaining,
  level = 2,
) => {
  let firstInput;

  switch (type) {
    case standardInputType.count:
      firstInput = {
        type: FormComponentType.Number,
        className: cx(styles.small),
        label: {
          text: 'Количество',
        },
        props: {
          name: `${name}Count`,
          validate: yup.number(),
        },
      };
      break;
    case standardInputType.daysRemaining:
      firstInput = {
        type: FormComponentType.Number,
        className: styles.small,
        label: {
          text: 'На сколько суток хватит?',
        },
        props: {
          name: `${name}DaysRemaining`,
          validate: yup.number(),
        },
      };
      break;
    case standardInputType.bedsCount:
      firstInput = {
        type: FormComponentType.Number,
        className: cx(styles.small),
        label: {
          text: 'Количество обеспеченных коек',
        },
        props: {
          name: `${name}BedsCount`,
          validate: yup.number(),
        },
      };
      break;
    case standardInputType.supplied:
      firstInput = {
        type: FormComponentType.Toggle,
        className: cx(styles.small),
        label: {
          text: 'Обеспечены?',
        },
        props: {
          name: `${name}`,
        },
      };
      break;
  }

  return {
    type: FormComponentType.FieldGroup,
    title,
    level,
    className: styles.rowInputGroup,
    children: [
      firstInput,
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
        standardInputGroup('disposableSuits', 'Одноразовые костюмы', styles),
        standardInputGroup('disposableRobes', 'Одноразовые халаты', styles),
        standardInputGroup('glasses', 'Очки', styles),
        standardInputGroup('regularMasks', 'Маски обычные', styles),
        standardInputGroup('respiratorsFFP2', 'Респираторы FFP2', styles),
        standardInputGroup('respiratorsFFP3', 'Респираторы FFP3', styles),
        standardInputGroup(
          'shoeCovers',
          'Бахилы (высокие, хирургические)',
          styles,
        ),
        standardInputGroup('disposableGloves', 'Одноразовые перчатки', styles),
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
          standardInputType.count,
        ),
        standardInputGroup(
          'oxygenConcentrators',
          'Кислородные концентраторы',
          styles,
          standardInputType.supplied,
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
          standardInputType.count,
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
        standardInputGroup(
          'ambuBags',
          'Мешки Амбу',
          styles,
          standardInputType.supplied,
        ),
        standardInputGroup(
          'airCompressor',
          'Компрессоры сжатого воздуха',
          styles,
          standardInputType.bedsCount,
        ),
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
        standardInputGroup(
          'heliumPillows',
          'Гелевые подушки подлобные подгрудные для вентиляции в прон-позиции',
          styles,
          standardInputType.bedsCount,
        ),
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
        standardInputGroup('threeWayStopcocks', 'Трехходовые краники', styles),
        standardInputGroup(
          'syringeInfusionPumps',
          'Инфузоматы шприцевые',
          styles,
          standardInputType.bedsCount,
        ),
        standardInputGroup(
          'peristalticInfusionPumps',
          'Инфузоматы перистальтические',
          styles,
          standardInputType.count,
        ),
        standardInputGroup(
          'infusionSyringes',
          'Шприцы для инфузоматов (50 мл)',
          styles,
        ),
        standardInputGroup('infusionLines', 'Инфузионные линии', styles),
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
        {
          type: FormComponentType.FieldGroup,
          title: 'Пульсоксиметры (портативные)',
          level: 2,
          className: styles.rowInputGroup,
          children: [
            {
              type: FormComponentType.Number,
              className: cx(styles.small),
              label: {
                text: 'Приблизительное количество',
              },
              props: {
                name: `portablePulseOximetersCount`,
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
                name: `portablePulseOximetersShortageExpected`,
              },
            },
          ],
        },
        {
          type: FormComponentType.FieldGroup,
          title: 'Пульсоксиметры-мониторы',
          level: 2,
          className: styles.rowInputGroup,
          children: [
            {
              type: FormComponentType.Number,
              className: cx(styles.small),
              label: {
                text: 'Приблизительное количество',
              },
              props: {
                name: `pulseOximetersCount`,
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
                name: `pulseOximetersShortageExpected`,
              },
            },
          ],
        },
        standardInputGroup(
          'capnographs',
          'Капнографы',
          styles,
          standardInputType.count,
        ),
        standardInputGroup(
          'simpleMonitors',
          'Простые мониторы (ниАД, ЭКГ, SpO2)',
          styles,
          standardInputType.count,
        ),
        standardInputGroup(
          'bloodGasAnalyzer',
          'Анализаторы газов крови',
          styles,
          standardInputType.count,
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
          standardInputType.count,
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
        standardInputGroup('foleyCatheters', 'Катетеры Фолея', styles),
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
