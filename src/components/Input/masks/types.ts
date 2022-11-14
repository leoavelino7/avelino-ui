export type Mask =
  | "cpf"
  | "cnpj"
  | "cpfOrCnpj"
  | "currency"
  | "cep"
  | "percentage"

export type EventKeyUp = React.KeyboardEvent<HTMLInputElement>

export type FnMaskOption = (
  event: EventKeyUp,
  applyAttributes?: boolean
) => EventKeyUp
