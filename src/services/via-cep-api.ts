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
    .then<CEPProps>(result => {
      if (result.erro) {
        return {
          error: true,
          message: 'CEP não encontrado',
        }
      }

      return result
    })
    .catch(error => ({ error: true, message: error.message }))
}
