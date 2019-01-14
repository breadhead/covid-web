enum ClaimStatus {
  Draft = 'Черновик',
  Closed = 'Закрыта',
  QuotaAllocation = 'Распределение квоты',
  QuestionnaireWaiting = 'Ожидание анкеты',
  QuestionnaireValidation = 'Проверка анкеты',
  AnswerWaiting = 'Ожидание ответа',
  DeliveredToCustomer = 'Передано заказчику',
}

export default ClaimStatus
