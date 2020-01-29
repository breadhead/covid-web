import { DontUnderstandEnum } from '../../../features/client/features/consultation/DontUnderstandEnum'

export interface UpdateDontUnderstandRequest {
  id: string
  status: DontUnderstandEnum
}
