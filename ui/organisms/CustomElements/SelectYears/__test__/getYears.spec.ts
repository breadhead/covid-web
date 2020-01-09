import { getYears } from '../years'

const curYear = new Date().getFullYear()

test('year shouldbe valid', () => {
  expect(getYears(3)).toEqual([
    { key: `${curYear}`, label: `${curYear}` },
    { key: `${curYear - 1}`, label: `${curYear - 1}` },
    { key: `${curYear - 2}`, label: `${curYear - 2}` },
  ])
})
