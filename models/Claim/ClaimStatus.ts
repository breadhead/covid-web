enum ClaimStatus {
  Draft = 'Черновик',
  Closed = 'Закрыта успешно',
  QuotaAllocation = 'Распределение квоты',
  QuestionnaireWaiting = 'Ожидание анкеты',
  QuestionnaireValidation = 'Проверка анкеты',
  AtTheDoctor = 'У врача',
  AnswerValidation = 'Проверка ответа эксперта',
  DeliveredToCustomer = 'Передано заказчику',
  Denied = 'Закрыта неуспешно',
  QueueForQuota = 'В очереди на квоту',
  ClosedWithoutAnswer = 'Не требует ответа эксперта',
}

export default ClaimStatus
