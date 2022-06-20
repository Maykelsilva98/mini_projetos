import prompt from "prompt";

prompt.start();

const arrProp = []
while (true){
    const property = await prompt.get(['Propriedade'])
    if (property.Propriedade.toLocaleLowerCase() != 'sair'){
        arrProp.push(property.Propriedade)
    } else{
        break
    }
}

arrProp.sort()

arrProp.forEach((x) => {console.log(x)})
