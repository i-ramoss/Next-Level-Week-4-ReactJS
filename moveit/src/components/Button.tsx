interface ButtonProps {
  color: string;
}

export function Button(props: ButtonProps) {
  return (
    // o primeiro par de chaves indica que iremos colocar um código javascript
    // o segundo par de chaves indica que é um objeto no javascript
    // agora a cor de fundo de um botão já está adaptada de acordo com a propriedade color
    // que está sendo passada para o botão
    <button type="button" style={{ backgroundColor: props.color }}>
      {props.color}
    </button>
  );
};