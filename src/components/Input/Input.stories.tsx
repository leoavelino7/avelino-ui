import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Input } from "./Input"

export default {
  title: "Components/Input",
  component: Input
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = args => <Input {...args} />

export const Simple = Template.bind({})

export const CPFMask = Template.bind({})
CPFMask.args = {
  mask: "cpf"
}

export const CNPJMask = Template.bind({})
CNPJMask.args = {
  mask: "cnpj"
}

export const CPFOrCNPJMask = Template.bind({})
CPFOrCNPJMask.args = {
  mask: "cpfOrCnpj"
}

export const CEPMask = Template.bind({})
CEPMask.args = {
  mask: "cep"
}

export const CurrencyMask = Template.bind({})
CurrencyMask.args = {
  mask: "currency",
  prefix: "R$"
}

export const PercentageMask = Template.bind({})
PercentageMask.args = {
  mask: "percentage",
  suffix: "%"
}
