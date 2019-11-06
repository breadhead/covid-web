import { StoryEnum } from '@app/models/Story/StoryEnum'

export interface ClientStoryData {
  claimId: string
  phone: string
  status: StoryEnum
}
