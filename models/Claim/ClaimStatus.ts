enum ClaimStatus {
  Draft = 'Черновик',
  Closed = 'Закрыта',
  QuotaAllocation = 'Распределение квоты',
  QuestionnaireWaiting = 'Ожидание анкеты',
  QuestionnaireValidation = 'Проверка анкеты',
  AtTheDoctor = 'У врача',
  AnswerWaiting = 'Ожидание ответа',
  DeliveredToCustomer = 'Передано заказчику',
}

export default ClaimStatus
