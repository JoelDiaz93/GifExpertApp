import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("pruebas en <AddCategory/>", () => {
  test("Debe de cambiar el valor de la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: "Nezuko" } });

    expect(input.value).toBe("Nezuko");
  });

  test("Debe de llamar onNewCategory si el input tiene un valor", () => {
    const inputValue = "Nezuko";
    //Elaboramos una funcion similar a onNewCategory con jest.fn()
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    //Para validar la accion anterior colocar un console.log en el onSubmit
    //despues de ingresar el valor en el input y ejecutar onSubmit
    //El input debe quedar vacio
    expect(input.value).toBe("");
    //Verificamos que se llame a la funcion onNewCategory
    expect(onNewCategory).toHaveBeenCalled();
    //Verificamos que se llame solo una vez onNewCategory
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    //Verificamos que contenga el valor de inputValue
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test('No debe llamar el onNewCategory si el input esta vacio', () => { 
    
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);
    const form = screen.getByRole("form");
    fireEvent.submit(form);
    expect(onNewCategory).toHaveBeenCalledTimes(0);
    //Verificamos que no se llame a onNewCategory
    expect(onNewCategory).not.toHaveBeenCalled();
   })
});
