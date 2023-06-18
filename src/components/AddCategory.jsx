import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    //Validamos el inputValue si tiene 1 o 0 caracteres no ingresa nada
    if (inputValue.trim().length <= 1) return;
    //Se ingresa valores de 2 o mas caracteres
    //Se utiliza un callback para insertar un nuevo valor manteniendo los
    //anteriores valores de la lista

    //setCategories((categories) => [inputValue, ...categories]);
    //Se limpia el inputValue
    setInputValue("");
    onNewCategory(inputValue.trim());
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
