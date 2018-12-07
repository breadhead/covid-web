import { mapQuotasToOptions } from '../mapQuotasToOptions'

test('should map stripped quotas to options', () => {
  expect(
    mapQuotasToOptions([
      { id: 'asd', count: '342', name: 'asdnmam' },
      { id: 'asdzxcz', count: '42', name: 'cvxcv' },
      { id: 'zxffw', count: '2', name: 'sadasz' },
    ]),
  ).toEqual([
    { value: 'asd', name: 'asdnmam' },
    { value: 'asdzxcz', name: 'cvxcv' },
    { value: 'zxffw', name: 'sadasz' },
  ])
})
