import { Input } from "./components"

const App = () => {
  return (
    <div>
      <Input mask="cpf" placeholder="cpf" />
      <Input mask="cnpj" placeholder="cnpj" />
      <Input mask="cpfOrCnpj" placeholder="cpfOrCnpj" />
      <Input mask="currency" placeholder="currency" />
      <Input mask="currency" prefix="R$" placeholder="currency - prefix" />
      <Input mask="cep" placeholder="cep" />
      <Input mask="percentage" placeholder="percent" suffix="%" />
    </div>
  )
}

export default App
