import { applyRegex, Pattern } from "../libs/apply-regex"
import { FnMaskOption } from "./types"

const patterns: Pattern[] = [
  { from: /\D/, to: "", flag: "g" },
  { from: /(\d{2})(\d)/, to: "$1.$2" },
  { from: /(\d{3})(\d)/, to: "$1.$2" },
  { from: /(\d{3})(\d)/, to: "$1/$2" },
  { from: /(\d{4})(\d{1,2})$/, to: "$1-$2" }
]

export const cnpj: FnMaskOption = (event, applyAttributes = true) => {
  if (applyAttributes) event.currentTarget.maxLength = 18

  const value = event.currentTarget.value
  if (
    !value.match(
      /^([0-9]{2}[\\.][0-9]{3}[\\.][0-9]{3}[\\/][0-9]{4}[-][0-9]{2})$/
    )
  ) {
    event.currentTarget.value = applyRegex(value, patterns)
  }

  return event
}
