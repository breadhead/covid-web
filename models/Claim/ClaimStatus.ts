enum ClaimStatus {
  Draft = 'Черновик',
  Closed = 'Закрыта',
  QuotaAllocation = 'Распределение квоты',
  QuestionnaireWaiting = 'Ожидание анкеты',
  QuestionnaireValidation = 'Проверка анкеты',
  AtTheDoctor = 'У врача',
  AnswerValidation = 'Проверка ответа эксперта',
  DeliveredToCustomer = 'Передано заказчику',
  Denied = 'Отказ',
  QueueForQuota = 'В очереди на квоту',
}

export default ClaimStatus
