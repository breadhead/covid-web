enum ClaimStatus {
  Draft = 'Черновик',
  Closed = 'Закрыта',
  QuotaAllocation = 'Распределение квоты',
  QuestionnaireWaiting = 'Ожидание анкеты',
  QuestionnaireValidation = 'Проверка анкеты',
  DeliveredToCustomer = 'Передано заказчику',
}

export default ClaimStatus
