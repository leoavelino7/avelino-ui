import { applyRegex, Pattern } from "../libs/apply-regex"
import { FnMaskOption } from "./types"

const patterns: Pattern[] = [
  { from: /\D/, to: "", flag: "g" },
  { from: /(\d{3})(\d)/, to: "$1.$2" },
  { from: /(\d{3})(\d)/, to: "$1.$2" },
  { from: /(\d{3})(\d{1,2})$/, to: "$1-$2" }
]

export const cpf: FnMaskOption = (event, applyAttributes = true) => {
  if (applyAttributes) event.currentTarget.maxLength = 14

  const value = event.currentTarget.value

  if (!value.match(/^(\d{3}).(\d{3})-(\d{2})$/)) {
    event.currentTarget.value = applyRegex(value, patterns)
  }

  return event
}
