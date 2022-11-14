export const isUndefined = (value: any): value is undefined => {
  return value === undefined
}

export const isEmptyOrNull = (value: any) => {
  if (value === null) return true

  if (String(value).trim() === "") return true

  return false
}
