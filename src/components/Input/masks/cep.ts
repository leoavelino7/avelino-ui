import { applyRegex, Pattern } from "../libs/apply-regex"
import { FnMaskOption } from "./types"

const patterns: Pattern[] = [
  { from: /\D/, to: "", flag: "g" },
  { from: /^(\d{5})(\d)/, to: "$1-$2" }
]

export const cep: FnMaskOption = event => {
  event.currentTarget.maxLength = 9

  const value = event.currentTarget.value

  event.currentTarget.value = applyRegex(value, patterns)

  return event
}
