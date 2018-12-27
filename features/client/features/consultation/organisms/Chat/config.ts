import { NON_BREAKING_SPACE } from '@app/lib/config'

export const MockMessages = [
  {
    id: '1',
    author: 'Куратор',
    content: `Для того, чтобы говорить о возможности проведения операции, мне надо видеть все имеющиеся медицинские 
    документы, обязательно результаты последних КТ (МРТ), без этого сказать ничего не могу. Вполне возможно, что 
    ситуация изменилась, новообразования увеличились в размерах и проведение операции стало не возможным.`,
    date: '12:13',
  },
  {
    id: '2',
    author: '',
    content: `Месяц назад заведующий проктологическим отделением был готов взять на операцию маму если маммологи 
    готовы были решить вопрос с операцией. У мамы (70 лет) обнаружены 2 опухоли, С20- злокачественное 
    новообразование прямой кишки 9-10 см, местно-распространенный процесс, лимфаденопатия 3 ст ( на 5-6 см 
    по передней стенке достигается нижний край опухоли малоподвижной`,
    date: '12:15',
  },
  {
    id: '3',
    author: 'Эксперт',
    content: `Подскажите, как поступить в данном случае, ведь 2 врача и 2 разных мнения, мы настроились на операцию, 
    действительно данная опухоль неоперабельна в этом случае? Имеет ли смысл настаивать на операции молочной 
    железы отдельно?`,
    date: '12:16',
  },
  {
    id: '4',
    content: `Загрузил актуальные результаты МРТ`,
    date: '12:16',
  },
  {
    id: '5',
    author: 'Куратор',
    content: `Для того, чтобы говорить о возможности проведения операции, мне надо видеть все имеющиеся медицинские 
    документы, обязательно результаты последних КТ (МРТ), без этого сказать ничего не могу. Вполне возможно, что 
    ситуация изменилась, новообразования увеличились в размерах и проведение операции стало не возможным.`,
    date: '12:13',
  },
  {
    id: '6',
    author: '',
    content: `Месяц назад заведующий проктологическим отделением был готов взять на операцию маму если маммологи 
    готовы были решить вопрос с операцией. У мамы (70 лет) обнаружены 2 опухоли, С20- злокачественное 
    новообразование прямой кишки 9-10 см, местно-распространенный процесс, лимфаденопатия 3 ст ( на 5-6 см 
    по передней стенке достигается нижний край опухоли малоподвижной`,
    date: '12:15',
  },
  {
    id: '7',
    author: 'Эксперт',
    content: `Подскажите, как поступить в данном случае, ведь 2 врача и 2 разных мнения, мы настроились на операцию, 
    действительно данная опухоль неоперабельна в этом случае? Имеет ли смысл настаивать на операции молочной 
    железы отдельно?`,
    date: '12:16',
  },
  {
    id: '8',
    content: `Загрузил актуальные результаты МРТ`,
    date: '12:16',
  },
]

export const EmptyWindowText = `Здесь появятся сообщения, если куратору вашей заявки или специалисту потребуется
${NON_BREAKING_SPACE}задать вам вопрос`
