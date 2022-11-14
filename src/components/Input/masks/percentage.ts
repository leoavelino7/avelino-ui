import { applyRegex, Pattern } from "../libs/apply-regex"
import { FnMaskOption } from "./types"

const patterns: Pattern[] = [
  { from: /\D/, to: "", flag: "g" },
  { from: /(\d)(\d{2})$/, to: "$1,$2" },
  { from: /(?=(\d{3})+(\D))\B/, to: ".", flag: "g" }
]

export const percentage: FnMaskOption = event => {
  const value = event.currentTarget.value

  event.currentTarget.value = applyRegex(value, patterns)

  return event
}
