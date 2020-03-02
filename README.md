# Por quê ?

API construída em NodeJs e express para o calculo do frete e prazo de entrega consultado a API dos correios.

# Próxima funcionalidade

Integração ao PayPal

# Rotas

> *URL Base*: http://localhost:3335

## Correios

> http://localhost:3335/shipping

- Calcular valor e prazo de entrega do frete

| ENDPOINT | METHOD   | PARAMS | URL PARAMS | SUCCESS RESPONSE                                                                                | ERROR RESPONSE                                                                                                                                                                                |
|--------------|----------|--------|------------|-------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| /shipping      | ``POST`` | -      | -          | __Code__: 200 <br/> __Content__:` {erro: "0", price: "30,00", days: "1"}` | __Code__: 400 <br/>   __Content__: ` { error:  ' Validation fails '  }`  <br/><br/>                   or <br/><br/> __Code__: 400 <br/> __Content__: ` {error: 'Try again later'}`  |
|              |          |        |            |                                                                                                 |                                                                                                                                                                                               |
|              |          |        |            |                                                                                                 |                                                                                                                                                                                               |
