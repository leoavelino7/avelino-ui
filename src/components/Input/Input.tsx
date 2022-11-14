import { FC, InputHTMLAttributes } from "react"
import classnames from "classnames"

import { isEmptyOrNull, isUndefined } from "../../libs"

import { applyMask } from "./masks"
import { Mask } from "./masks/types"

type TextFixProps = Partial<{
  text: string
  className: HTMLSpanElement["className"]
}>

const TextFix: FC<TextFixProps> = ({ text, className = "" }) =>
  !isUndefined(text) ? <span className={className}>{text}</span> : null

export type InputProps = InputHTMLAttributes<HTMLInputElement> &
  Partial<{
    mask: Mask
    prefix: string
    suffix: string
  }>

export const Input: FC<InputProps> = ({ mask, prefix, suffix, ...props }) => {
  const classNameInput = classnames(
    {
      "rounded-tr-md rounded-br-md": !isEmptyOrNull(prefix)
    },
    "outline-none rounded-md px-2 h-9"
  )

  const keyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (mask) applyMask(mask, event)
    props.onKeyUp?.(event)
  }

  return (
    <div className="flex w-fit rounded-md border focus-within:border-blue-400">
      <TextFix
        text={prefix}
        className="py-1 px-2 bg-gray-200 rounded-tl-md rounded-bl-md text-gray-600"
      />
      <input {...props} onKeyUp={keyUp} className={classNameInput} />
      <TextFix
        text={suffix}
        className="py-1 px-2 bg-gray-200 rounded-tr-md rounded-br-md text-gray-600"
      />
    </div>
  )
}

export default Input
