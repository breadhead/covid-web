import ClaimStatus from '@app/models/Claim/ClaimStatus'

const inavtiveStatuses = [ClaimStatus.Closed, ClaimStatus.ClosedWithoutAnswer]

export default (status: ClaimStatus) => !inavtiveStatuses.includes(status)
