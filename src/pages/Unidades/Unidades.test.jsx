import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Unidades from "./Unidades";
import { BrowserRouter } from "react-router-dom";

function renderComponent() {
  render(<Unidades />, { wrapper: BrowserRouter });
}

describe("Unidade", () => {
  test("se o componente é renderizado corretamente: com título Unidades", async () => {
    renderComponent();
    const titulo = await screen.findByRole("heading", { name: "Unidades" });

    expect(titulo).toBeInTheDocument();
  });

  test("ao clicar no botão “Nova unidade” deve renderizar o cadastro de unidade", async () => {
    const user = userEvent.setup();
    renderComponent();

    const button = screen.getByRole("button", { name: "Nova Unidade" });
    await user.click(button);

    const titulo = screen.getByRole("heading", {
      name: "Cadastro de Unidade Geradora",
    });
    expect(titulo).toBeInTheDocument();
  });
});
