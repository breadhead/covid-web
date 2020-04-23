import { FormComponentType } from '@front/features/common/form/FormConstructor'
import { InputType } from '@front/ui/Input'
import * as yup from 'yup'

const standardInputGroup = (name, title, className, level = 2) => {
  return {
    type: FormComponentType.FieldGroup,
    title,
    level,
    className,
    children: [
      {
        type: FormComponentType.Input,
        label: {
          text: 'На сколько суток хватит',
        },
        props: {
          name: `${name}DaysRemaining`,
          validate: yup.number(),
        },
      },
      {
        type: FormComponentType.Toggle,
        label: {
          text: 'Прогнозируете проблемы с поставкой?',
        },
        props: {
          name: `${name}ShortageExpected`,
        },
      },
    ],
  }
}


export const formConfig = (styles) => ({
  steps: [
    {
      type: FormComponentType.FieldGroup,
      title: 'Средства индивидуальной защиты',
      className: styles.step,
      level: 1,
      children: [
        standardInputGroup('disposableSuits', 'Одноразовые костюмы', styles.rowInputGroup),
        standardInputGroup('disposableRobes', 'Одноразовые халаты', styles.rowInputGroup),
        standardInputGroup('glasses', 'Очки', styles.rowInputGroup),
        standardInputGroup('regularMasks', 'Маски обычные', styles.rowInputGroup),
        standardInputGroup('respiratorsFFP2', 'Респираторы FFP2', styles.rowInputGroup),
        standardInputGroup('respiratorsFFP3', 'Респираторы FFP3', styles.rowInputGroup),
        standardInputGroup('shoeCovers', 'Бахилы (высокие, хирургические)', styles.rowInputGroup),
        standardInputGroup('disposableGloves', 'Одноразовые перчатки', styles.rowInputGroup),
        standardInputGroup('antiseptics', 'Антисептики', styles.rowInputGroup),
      ],
    },
    {
      type: FormComponentType.FieldGroup,
      title: 'Оксигенотерапия и респираторная терапия',
      className: styles.step,
      level: 1,
      children: [
        standardInputGroup('videoLaryngoscopes', 'Видеоларингоскопы', styles.rowInputGroup),
        standardInputGroup('oxygenConcentrators', 'Кислородные концентраторы', styles.rowInputGroup),
        standardInputGroup('regularNasalCannula', 'Обычная носовая канюля', styles.rowInputGroup),
        standardInputGroup('oxygenMask', 'Кислородная лицевая маска с мешком (non-rebreather)', styles.rowInputGroup),
        standardInputGroup('oxygenMoisturizers', 'Увлажнители кислорода', styles.rowInputGroup),
        standardInputGroup('nebulizersCompressors', 'Небулайзеры-компрессоры', styles.rowInputGroup),
        standardInputGroup('nebulizerAttachments', 'Небулайзерные насадки', styles.rowInputGroup),
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
              type: FormComponentType.Input,
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
              label: {
                text: 'Прогнозируете проблемы с поставкой?',
              },
              props: {
                name: `workingCPAP/BIPAPShortageExpected`,
              },
            },
          ],
        },
        standardInputGroup('masksForCPAP/BIPAP', 'Маски для аппараторв НИВЛ CPAP/BIPAP (однопатрубочных)', styles.rowInputGroup),
        {
          type: FormComponentType.FieldGroup,
          title: 'Рабочих аппаратов ИВЛ',
          level: 2,
          className: styles.rowInputGroup,
          children: [
            {
              type: FormComponentType.Input,
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
              label: {
                text: 'Свитчер: Обеспечены/Нет',
              },
              props: {
                name: `ambuBagsSwitcher`,
              },
            },
            {
              type: FormComponentType.Toggle,
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
              type: FormComponentType.Input,
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
              label: {
                text: 'Свитчер: Есть/Нет',
              },
              props: {
                name: `highPressureOxygenConcentratorsSwitcher`,
              },
            },
            {
              type: FormComponentType.Toggle,
              label: {
                text: 'Прогнозируете проблемы с поставкой?',
              },
              props: {
                name: `highPressureOxygenConcentratorsShortageExpected`,
              },
            },
          ],
        },
        standardInputGroup('punctureTracheostomy', 'Пункционнные трахеостомы', styles.rowInputGroup),
        standardInputGroup('tracheostomyTube', 'Трахеостомические трубки', styles.rowInputGroup),
        standardInputGroup('closedTBDsystems', 'Закрытые системы для санации ТБД', styles.rowInputGroup),
        standardInputGroup('TBDcatheter', 'Обычные катетеры для санации ТБД', styles.rowInputGroup),
        standardInputGroup('disposableBreathingCircuits', 'Одноразовые дыхательные контуры', styles.rowInputGroup),
        standardInputGroup('virusBacterialFilters', 'Вирусно-бактериальные фильтры', styles.rowInputGroup),
        standardInputGroup('heatMoistureExchangers', 'Тепловлагообменники', styles.rowInputGroup),
        standardInputGroup('breathingCircuitConnectors', 'Уголковые коннекторы между контуром и эндотрахеальной трубкой', styles.rowInputGroup),
        standardInputGroup('endotrachealTubes', 'Эндотрахеальные трубки разных диаметров', styles.rowInputGroup),
        standardInputGroup('intubationStylets', 'Проводники для интубации', styles.rowInputGroup),
        {
          type: FormComponentType.FieldGroup,
          title: 'Гелевые подушки подлобные подгрудные для вентиляции в прон-позиции',
          level: 2,
          className: styles.rowInputGroup,
          children: [
            {
              type: FormComponentType.Input,
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
        standardInputGroup('IVBags', 'Капельницы', styles.rowInputGroup),
        standardInputGroup('peripheralVenousCatheters', 'Периферические венозные катетеры', styles.rowInputGroup),
        standardInputGroup('centralVenousCatheters', 'Центральные венозные катетеры', styles.rowInputGroup),
        standardInputGroup('threeWayStopcocks', 'Трехходовые краники', styles.rowInputGroup),
        {
          type: FormComponentType.FieldGroup,
          title: 'Инфузоматы шприцевые',
          level: 2,
          className: styles.rowInputGroup,
          children: [
            {
              type: FormComponentType.Input,
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
              label: {
                text: 'Прогнозируете проблемы с поставкой?',
              },
              props: {
                name: `syringeInfusionPumpsShortageExpected`,
              },
            },
          ],
        },
        standardInputGroup('peristalticInfusionPumps', 'Инфузоматы перистальтические', styles.rowInputGroup),
        standardInputGroup('infusionSyringes', 'Шприцы для инфузоматов (50 мл)', styles.rowInputGroup),
        standardInputGroup('infusionLines', 'Инфузионные линии', styles.rowInputGroup),
        standardInputGroup('infusionBags', 'Капельницы для инфузоматов', styles.rowInputGroup),
      ],
    },
    {
      type: FormComponentType.FieldGroup,
      title: 'Мониторинг',
      className: styles.step,
      level: 1,
      children: [
        standardInputGroup('portablePulseOximeters', 'Пульсоксиметры (портативные)', styles.rowInputGroup),
        standardInputGroup('pulseOximeters', 'Пульсоксиметры-мониторы', styles.rowInputGroup),
        standardInputGroup('capnographs', 'Капнографы', styles.rowInputGroup),
        standardInputGroup('simpleMonitors', 'Простые мониторы (ниАД, ЭКГ, SpO2)', styles.rowInputGroup),
        standardInputGroup('bloodGasAnalyzer', 'Анализаторы газов крови', styles.rowInputGroup),
      ],
    },
    {
      type: FormComponentType.FieldGroup,
      title: 'Питание',
      className: styles.step,
      level: 1,
      children: [
        standardInputGroup('enteralInfusionSystems', 'Системы для инфузии энтерального питания', styles.rowInputGroup),
        standardInputGroup('nasogastricTubes', 'Назогастральные/дуоденальные зонды для питания', styles.rowInputGroup),
        standardInputGroup('peristalticEnteralInfusionPumps', 'Инфузоматы перистальтические для энтерального питания', styles.rowInputGroup),
      ],
    },
    {
      type: FormComponentType.FieldGroup,
      title: 'Другое',
      className: styles.step,
      level: 1,
      children: [
        standardInputGroup('bandages', 'Бинты', styles.rowInputGroup),
        standardInputGroup('bandAids', 'Пластыри', styles.rowInputGroup),
        standardInputGroup('stickers', 'Наклейки', styles.rowInputGroup),
        standardInputGroup('foleyCatheters', 'Катетеры Фолея', styles.rowInputGroup),
        standardInputGroup('urineBags', 'Мочеприемники', styles.rowInputGroup),
      ],
    },
    {
      type: FormComponentType.FieldGroup,
      title: 'Оставьте контактные данные, чтобы мы могли с вами связаться для консультации и возможного оказания помощи',
      className: styles.step,
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
