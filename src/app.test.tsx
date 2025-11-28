import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./app";
import { vi } from "vitest";

window.HTMLElement.prototype.scrollIntoView = vi.fn();

vi.mock("./components/splashPage", () => ({
  default: ({ onFinish }: { onFinish: () => void }) => {
    onFinish();
    return null;
  },
}));

describe("App Navigation Tests", () => {
  it("renders home page immediately (splash skipped)", () => {
    render(<App />);
    expect(screen.getByText(/UAV Systems Engineer/i)).toBeInTheDocument();
  });

  it("navigates to projects page when clicking the button", async () => {
    const user = userEvent.setup();
    render(<App />);

    const projectsButton = screen.getByText("Projects");
    await user.click(projectsButton);

    expect(await screen.findByText("My Projects")).toBeInTheDocument();
  });

  it("navigates to contact page when clicking Hire Me", async () => {
    render(<App />);

    const buttons = screen.getAllByRole("button");
    console.log(buttons.map((b) => b.textContent));
    const hireMeButton = screen.getByRole("button", { name: /hire me/i });
    fireEvent.click(hireMeButton);

    expect(await screen.findByText("Get In Touch")).toBeInTheDocument();
  });
});
