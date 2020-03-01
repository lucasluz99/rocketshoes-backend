const soap = require("soap");
const Yup = require("yup");
class Correios{
 
 async calcShipping(req,res){
    const schema = Yup.object().shape({
      zip: Yup.string().length(8).required()
    })

    if(! await schema.isValid(req.body)){
      return res.status(400).json({error: 'Validation fails'})
    }

    
    const { zip } = req.body;

    
    soap.createClient("http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx?wsdl",(err,client) => {
      if(err){
        res.status(400).json({error: 'Try again later'})
      }
      client.CalcPrecoPrazo({
        nCdEmpresa: '',
        sDsSenha: '',
        nCdServico: '04014',
        sCepOrigem: '40296320',
        sCepDestino: zip,
        nVlPeso: '0.5',
        nCdFormato: 1,
        nVlComprimento: 30,
        nVlAltura: 15,
        nVlLargura:15,
        nVlDiametro:15,
        sCdMaoPropria: "S",
        nVlValorDeclarado: 0,
        sCdAvisoRecebimento: "N"
      },(error,data) => {
        if(error){
          res.status(400).json({error: 'Try again later'})
        }

       return res.status(200).json(data);
      })
    })
  }
}

module.exports = new Correios();