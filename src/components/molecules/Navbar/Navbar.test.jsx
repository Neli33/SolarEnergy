import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";

describe("Navbar", () => {
  test("se o componente é renderizado corretamente: com logo e 3 botões/links", () => {
    render(<Navbar />, { wrapper: BrowserRouter });

    const logo = screen.getByRole("img", { name: /Solar Energy logo/i });
    expect(logo).toBeInTheDocument();

    const dashboardButton = screen.getByRole("button", { name: /Dashboard/i });
    expect(dashboardButton).toBeInTheDocument();

    const unidadeConsumidoraButton = screen.getByRole("button", {
      name: /Unidade Consumidora/i,
    });
    expect(unidadeConsumidoraButton).toBeInTheDocument();

    const cadastroEnergiaButton = screen.getByRole("button", {
      name: /Cadastro de Energia Gerada/i,
    });
    expect(cadastroEnergiaButton).toBeInTheDocument();

    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(3);
  });

  test("se o botão da rota default inicia selecionado e os demais não selecionados", () => {
    render(<Navbar />, { wrapper: BrowserRouter });

    const dashboardButton = screen.getByRole("button", { name: /Dashboard/i });

    const unidadeConsumidoraButton = screen.getByRole("button", {
      name: /Unidade Consumidora/i,
    });

    const cadastroEnergiaButton = screen.getByRole("button", {
      name: /Cadastro de Energia Gerada/i,
    });

    expect(dashboardButton).toHaveClass("selected");
    expect(unidadeConsumidoraButton).not.toHaveClass("selected");
  });

  test("se a página é alterada corretamente quando clica em algum botão", () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);

    render(<Navbar />, { wrapper: BrowserRouter });

    const unidadeConsumidoraButton = screen.getByRole("button", {
      name: /Unidade Consumidora/i,
    });

    userEvent.click(unidadeConsumidoraButton);

    expect(navigate).toHaveBeenCalledWith("/unidades");
  });

  test("se a página é alterada para a default quando clica no logo", () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);

    render(<Navbar />, { wrapper: BrowserRouter });

    const logo = screen.getByRole("img", { name: /Solar Energy logo/i });

    userEvent.click(logo);

    expect(navigate).toHaveBeenCalledWith("/");
  });
});
