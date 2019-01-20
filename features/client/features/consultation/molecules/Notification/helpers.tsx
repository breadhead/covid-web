import { NON_BREAKING_SPACE } from '@app/lib/config'
import ClaimStatus from '@app/models/Claim/ClaimStatus'
import { ListedClaim } from '@app/models/Claim/ListedClaim'
import moment from 'moment'
import formatDate from '../../../claims/helpers/formatDate'
import { NotifiationButtonType } from '../NotificationButton'

moment.locale('ru')
const claimDeadlineDate = moment()
  .add(3, 'days')
  .format()
const formattedClaimDeadlineDate = formatDate(new Date(claimDeadlineDate))

export const getNotificationsText = (info: ListedClaim) => {
  const { email } = info
  return {
    [ClaimStatus.QuotaAllocation]: {
      id: '1',
      image: '/static/images/waiting-letter.png',
      title: 'Дождитесь ответа нашего сотрудника',
      text: `Мы получили вашу заявку. Как только у${NON_BREAKING_SPACE}нас появятся средства на${NON_BREAKING_SPACE}консультацию, вы сможете продолжить заполнение анкеты. Мы${NON_BREAKING_SPACE}сообщим вам об${NON_BREAKING_SPACE}этом в${NON_BREAKING_SPACE}письме на${NON_BREAKING_SPACE}адрес ${email}`,
    },
    [ClaimStatus.QuestionnaireWaiting]: {
      id: '2',
      image: '/static/images/continue-filling.png',
      title: `Вам нужно заполнить свои медицинские данные и${NON_BREAKING_SPACE}вопросы эксперту`,
      text: `Пожалуйста, постарайтесь заполнить анкету до${NON_BREAKING_SPACE}${formattedClaimDeadlineDate}.`,
      button: NotifiationButtonType.QuestionnaireWaiting,
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
      button: NotifiationButtonType.DeliveredToCustomer,
    },
    [ClaimStatus.Closed]: {
      id: '5',
      image: '/static/images/consultation-done-success.png',
      title: 'Ваша консультация завершена',
      button: NotifiationButtonType.Closed,
    },
    [ClaimStatus.Denied]: {
      id: '6',
      image: '/static/images/consultation-canceled.png',
      title: 'Ваша заявка отклонена',
      text: `К сожалению, мы${NON_BREAKING_SPACE}отклонили вашу заявку. Это может быть связано с${NON_BREAKING_SPACE}тем, что вы${NON_BREAKING_SPACE}слишком долго не${NON_BREAKING_SPACE}заходили в${NON_BREAKING_SPACE}личный кабинет и${NON_BREAKING_SPACE}не${NON_BREAKING_SPACE}заполняли анкету — мы были вынуждены передать средства на${NON_BREAKING_SPACE}вашу консультацию другому человеку. Кроме этого, возможно ваш вопрос не${NON_BREAKING_SPACE}был связан с${NON_BREAKING_SPACE}онкологией.
    Если у вас есть вопросы, напишите в `,
      button: NotifiationButtonType.Denied,
      link: {
        label: 'форму обратной связи',
        href: '/contacts#feedback-form',
      },
    },
    [ClaimStatus.QueueForQuota]: {
      id: '7',
      image: '/static/images/queue.png',
      title: `Ваша заявка в${NON_BREAKING_SPACE}очереди на${NON_BREAKING_SPACE}бесплатную консультацию`,
      text: `Вы сможете заполнить анкету, когда Фонд профилактики рака найдет необходимые средства. Мы${NON_BREAKING_SPACE}стараемся сделать всё возможное, чтобы помочь каждому как можно скорее.
      Мы сообщим вам о${NON_BREAKING_SPACE}получении средств на${NON_BREAKING_SPACE}вашу консультацию по${NON_BREAKING_SPACE}почте ${email}.`,
    },
  }
}
