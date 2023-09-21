import { AlignCenter } from './AlignCenter'
import { ContainerFull } from './ContainerFull'
import { Screen } from './Screen'
import { Frame } from './Frame'
import { Capsule } from './Capsule'
import { Content } from './Content'
import { Part } from './Part'
import { Group } from './Group'

export { AlignCenter as center} from './AlignCenter'
export { ContainerFull as full} from './ContainerFull'
export { Screen as screen} from './Screen'
export { Frame as frame} from './Frame'
export { Capsule as capsule} from './Capsule'
export { Content as content} from './Content'

export const container = {
  full: ContainerFull,
  center: AlignCenter,
  screen: Screen,
  frame: Frame,
  capsule: Capsule,
  content: Content,
  section: Part,
  group: Group,
}