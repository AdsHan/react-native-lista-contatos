{/* 
    Deixa a primeira letra de uma palavra em maísuculo

    Exemplo: palavra -> Palavra
*/}

const capitalizePrimeiraLetra = string => {
    return string[0].toUpperCase() + string.slice(1);
}

export default capitalizePrimeiraLetra