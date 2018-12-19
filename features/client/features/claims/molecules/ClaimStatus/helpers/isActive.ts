import ClaimStatus from '@app/models/Claim/ClaimStatus'

const inavtiveStatuses = [ClaimStatus.Closed]

export default (status: ClaimStatus) => !inavtiveStatuses.includes(status)
