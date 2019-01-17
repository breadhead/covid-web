import { mapDoctors } from '../mapDoctors'

describe('mapDoctors', () => {
  test('should map correctly ', () => {
    const doctors = [
      {
        login: 'adsad@adsasdasdasd.asdasd',
        fullName: 'super doctor',
        description: 'super description',
      },
      {
        login: 'doctorr11@doctor.doctor',
        fullName: 'алексей',
        description: 'норм',
      },
    ]
    expect(mapDoctors(doctors)).toEqual([
      { id: 0, value: 'super doctor' },
      { id: 1, value: 'алексей' },
    ])
  })
})
