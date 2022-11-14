import { EventKeyUp, Mask } from "./types"

import { cnpj } from "./cnpj"
import { cpf } from "./cpf"
import { cpfOrCnpj } from "./cpfOrCnpj"
import { currency } from "./currency"
import { cep } from "./cep"
import { percentage } from "./percentage"

const maskMap: Record<Mask, (evenit: EventKeyUp) => EventKeyUp> = {
  cpf,
  cnpj,
  cpfOrCnpj,
  currency,
  cep,
  percentage
}

export const applyMask = (
  mask: Mask,
  event: React.KeyboardEvent<HTMLInputElement>
) => {
  if (mask in maskMap) {
    return maskMap[mask](event)
  }
  return event
}
