import { FnMaskOption } from "./types"

import { cnpj } from "./cnpj"
import { cpf } from "./cpf"

export const cpfOrCnpj: FnMaskOption = (event, applyAttributes = true) => {
  if (applyAttributes) {
    event.currentTarget.minLength = 14
    event.currentTarget.maxLength = 18
  }

  const value = event.currentTarget.value

  if (value.length <= 14) return cpf(event, false)

  return cnpj(event, false)
}
