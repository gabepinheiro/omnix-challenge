export type CEPProps = {
  bairro: string
  cep: string
  complemento: string
  ddd: string
  gia: string
  ibge: string
  localidade: string
  logradouro: string
  siafi: string
  uf: string
}

export const getCEP = (cep: string) => {
  return fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then<CEPProps>(result => result)
    .catch(() => new Error('CEP não encontrado'))
}
