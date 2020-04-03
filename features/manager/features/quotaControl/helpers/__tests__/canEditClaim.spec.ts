import ClaimStatus from '@app/models/Claim/ClaimStatus'
import { Role } from '@app/models/Users/User'
import { canEditClaim, Position } from '../canEditClaim'

describe('canEditClaim works', () => {
  test('should return false if role is doctor and button is in header', () => {
    expect(
      canEditClaim(ClaimStatus.AtTheDoctor, [Role.Doctor], Position.Header),
    ).toBe(false)
  })
  test('should return true if role is doctor and manager', () => {
    expect(
      canEditClaim(
        ClaimStatus.AtTheDoctor,
        [Role.Doctor, Role.CaseManager],
        Position.Footer,
      ),
    ).toBe(true)
  })
  test('should return true if role is manager and status is at the doctor', () => {
    expect(
      canEditClaim(
        ClaimStatus.AtTheDoctor,
        [Role.CaseManager],
        Position.Footer,
      ),
    ).toBe(true)
  })
  test('should return false if role is manager and status is at the doctor', () => {
    expect(canEditClaim(ClaimStatus.Closed, [Role.CaseManager])).toBe(false)
  })
  test('should return false if role is manager and status is at the doctor', () => {
    expect(canEditClaim(ClaimStatus.Denied, [Role.CaseManager])).toBe(false)
  })
  test('should return false if role is manager and status is at the doctor', () => {
    expect(
      canEditClaim(ClaimStatus.DeliveredToCustomer, [Role.CaseManager]),
    ).toBe(false)
  })
})