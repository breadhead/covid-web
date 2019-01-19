import { NON_BREAKING_SPACE } from '@app/lib/config'
import ClaimStatus from '@app/models/Claim/ClaimStatus'
import { ListedClaim } from '@app/models/Claim/ListedClaim'
import moment from 'moment'
import formatDate from '../../../claims/helpers/formatDate'

moment.locale('ru')
const claimDeadlineDate = moment()
  .add(3, 'days')
  .format()
const formattedClaimDeadlineDate = formatDate(new Date(claimDeadlineDate))

export const getNotificationsText = (info: ListedClaim) => {
  const {
    id,
    number,
    createdAt,
    expireAt,
    status,
    newMessage,
    email,
    target,
  } = info
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
      button: 'Заполнить',
    },
    [ClaimStatus.QuestionnaireValidation]: {
      id: '3',
      image: '/static/images/expert-answered.png',
      title: 'Ваша анкета принята на консультацию',
      text:
        'Мы будем сообщать вам о ходе консультации по электронной почте mymail@gmail.com. Вы можете закрыть эту страницу и дождаться нашего письма. В среднем срок консультации — 3 рабочих дня.',
    },
    [ClaimStatus.DeliveredToCustomer]: {
      id: '4',
      image: '/static/images/expert-answering.png',
      title: 'Эксперт ответил на ваши вопросы',
      text: `Если вы хотите что-то уточнить или оставить отзыв, напишите в чат в правой части страницы.`,
      button: 'Посмотреть ответы эксперта',
    },
    [ClaimStatus.Closed]: {
      id: '5',
      image: '/static/images/consultation-done-success.png',
      title: 'Ваша консультация завершена',
      button: 'Посмотреть ответы специалиста',
    },
    [ClaimStatus.Denied]: {
      id: '6',
      image: '/static/images/expert-answering.png',
      title: 'Ваша заявка отклонена',
      text: `К сожалению, мы отклонили вашу заявку. Это может быть связано с тем, что вы слишком долго не заходили в личный кабинет и не заполняли анкету — мы были вынуждены передать средства на вашу консультацию другому человеку. Кроме этого, возможно ваш вопрос не был связан с онкологией.
    Если у вас есть вопросы, напишите в форму обратной связи.
    (по клику на ссылку “форму обратной связи” открывается страница контакты и подкручивается до формы. В саму форму подставляется номер заявки)`,
      button: '',
    },
    [ClaimStatus.QueueForQuota]: {
      id: '7',
      image: '/static/images/queue.png',
      title: 'Ваша заявка в очереди на бесплатную консультацию',
      text: `Вы сможете заполнить анкету, когда Фонд профилактики рака найдет необходимые средства. Мы стараемся сделать все возможное, чтобы помочь каждому как можно скорее.
      Мы сообщим вам о получении средств на вашу консультацию по почте ${email}.`,
      button: '',
    },
  }
}
