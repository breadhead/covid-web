import { getYears } from '../years'

test('year shouldbe valid', () => {
  expect(getYears(3)).toEqual([
    { key: '2019', label: '2019' },
    { key: '2018', label: '2018' },
    { key: '2017', label: '2017' },
  ])
})
