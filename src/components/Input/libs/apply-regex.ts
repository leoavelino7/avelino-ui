export type Pattern = {
  from: RegExp
  to: string
  flag?: string
}

export const applyRegex = (value: string, patterns: Pattern[]): string => {
  const _patterns = [...patterns]

  if (_patterns.length === 0) return value

  const pattern = _patterns.shift()

  if (!pattern) return value

  const regex = new RegExp(pattern.from, pattern.flag)

  return applyRegex(value.replace(regex, pattern.to), _patterns)
}
