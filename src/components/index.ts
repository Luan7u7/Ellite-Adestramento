import { Adornment } from './Adornment'
import { Card } from './Card'
import { AlignCenter } from './Containers/AlignCenter'
import { Modal } from './Modal'
import { ContainerFull } from './Containers/ContainerFull'
import { Form } from './Form'
import { Option } from './Option'
import { Screen } from './Screen'

export {Calendario} from './Calendario'
export {Card} from './Card'
export {Modal} from './Modal'
export {ContainerFull} from './Containers/ContainerFull'
export {Screen} from './Screen'
export {AlignCenter} from './Containers/AlignCenter'
export {Adornment} from './Adornment'
export {Form} from './Form'
export {Option} from './Option'
export {Charging} from './Charging'

//criar exportação padrão para todos os componentes, vai precisar revisar todas as importações!! 

export const Container = {
  Full: ContainerFull,
  Center: AlignCenter,
  Card: Card,
  Adornment: Adornment,
  Form: Form,
  Option: Option,
  Modal: Modal, 
  Screen: Screen,
}