import { StoryEnum } from './StoryEnum'

export interface StoryUpdateStatusRequest {
  id: string
  status: StoryEnum
}
