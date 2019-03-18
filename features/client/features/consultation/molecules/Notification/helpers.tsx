import { NON_BREAKING_SPACE } from '@app/lib/config'
import ClaimStatus from '@app/models/Claim/ClaimStatus'
import { ListedClaim } from '@app/models/Claim/ListedClaim'
import { Notifiation } from '../NotificationButton'
import { getDeniedText } from './config'

interface NotificationLink {
  label: string
  href: string
}

interface NotificationText {
  id: string
  image: string
  title: string
  text: string
  link?: NotificationLink
  button?: Notifiation
}

type NotificationMap = { [key in ClaimStatus]: NotificationText }

export const getNotificationsText = (info: ListedClaim): NotificationText => {
  const { email, status, closeComment, number } = info
  return ({
    [ClaimStatus.QuotaAllocation]: {
      id: '1',
      image: '/static/images/waiting-letter.png',
      title: 'Дождитесь ответа нашего сотрудника',
      text: `Мы получили вашу заявку. Как только у${NON_BREAKING_SPACE}нас появятся средства на${NON_BREAKING_SPACE}консультацию, вы сможете продолжить заполнение анкеты. Мы${NON_BREAKING_SPACE}сообщим вам об${NON_BREAKING_SPACE}этом в${NON_BREAKING_SPACE}письме на${NON_BREAKING_SPACE}адрес ${email}`,
    },
    [ClaimStatus.QuestionnaireWaiting]: {
      id: '2',
      image: '/static/images/continue-filling.png',
      title: `Черновик`,
      button: Notifiation.QuestionnaireWaiting,
    },
    [ClaimStatus.QuestionnaireValidation]: {
      id: '3',
      image: '/static/images/expert-answered.png',
      title: `Ваша анкета принята на${NON_BREAKING_SPACE}консультацию`,
      text: `Мы будем сообщать вам о${NON_BREAKING_SPACE}ходе консультации по${NON_BREAKING_SPACE}электронной почте ${email}. Вы можете закрыть эту страницу и${NON_BREAKING_SPACE}дождаться нашего письма. В${NON_BREAKING_SPACE}среднем срок консультации — 3${NON_BREAKING_SPACE}рабочих дня.`,
    },
    [ClaimStatus.DeliveredToCustomer]: {
      id: '4',
      image: '/static/images/expert-answering.png',
      title: `Эксперт ответил на${NON_BREAKING_SPACE}ваши вопросы`,
      text: `Если вы хотите что-то уточнить или оставить отзыв, напишите в${NON_BREAKING_SPACE}чат в${NON_BREAKING_SPACE}правой части страницы.`,
      button: Notifiation.DeliveredToCustomer,
    },
    [ClaimStatus.Closed]: {
      id: '5',
      image: '/static/images/consultation-done-success.png',
      title: 'Ваша консультация завершена',
      button: Notifiation.Closed,
    },
    [ClaimStatus.Denied]: {
      id: '6',
      image: '/static/images/consultation-canceled.png',
      title: 'Ваша заявка отклонена',
      text: `${getDeniedText(closeComment)}.
    Если у вас есть вопросы, напишите в${NON_BREAKING_SPACE}`,
      button: Notifiation.Denied,
      link: {
        label: 'форму обратной связи',
        href: `/contacts?claimNumber=${number}#feedback-form`,
      },
    },
    [ClaimStatus.QueueForQuota]: {
      id: '7',
      image: '/static/images/queue.png',
      title: `Ваша заявка в${NON_BREAKING_SPACE}очереди на${NON_BREAKING_SPACE}бесплатную консультацию`,
      text: `Вы сможете заполнить анкету, когда Фонд профилактики рака найдет необходимые средства. Мы${NON_BREAKING_SPACE}стараемся сделать всё возможное, чтобы помочь каждому как можно скорее.
      Мы сообщим вам о${NON_BREAKING_SPACE}получении средств на${NON_BREAKING_SPACE}вашу консультацию по${NON_BREAKING_SPACE}почте ${email}.`,
    },
    [ClaimStatus.AtTheDoctor]: {
      id: '8',
      image: '/static/images/expert-answered.png',
      title: `Ваша анкета принята на${NON_BREAKING_SPACE}консультацию`,
      text: `Мы будем сообщать вам о${NON_BREAKING_SPACE}ходе консультации по${NON_BREAKING_SPACE}электронной почте ${email}. Вы можете закрыть эту страницу и${NON_BREAKING_SPACE}дождаться нашего письма. В${NON_BREAKING_SPACE}среднем срок консультации — 3${NON_BREAKING_SPACE}рабочих дня.`,
    },
    [ClaimStatus.AnswerValidation]: {
      id: '9',
      image: '/static/images/expert-answered.png',
      title: `Ваша анкета принята на${NON_BREAKING_SPACE}консультацию`,
      text: `Мы будем сообщать вам о${NON_BREAKING_SPACE}ходе консультации по${NON_BREAKING_SPACE}электронной почте ${email}. Вы можете закрыть эту страницу и${NON_BREAKING_SPACE}дождаться нашего письма. В${NON_BREAKING_SPACE}среднем срок консультации — 3${NON_BREAKING_SPACE}рабочих дня.`,
    },
    [ClaimStatus.ClosedWithoutAnswer]: {
      id: '10',
      image: '/static/images/expert-answered.png',
      title: `Ваша консультация завершена`,
      button: Notifiation.Closed,
    },
  } as NotificationMap)[status]
}
