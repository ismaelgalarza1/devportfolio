import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./app";
import { vi } from "vitest";

window.HTMLElement.prototype.scrollIntoView = vi.fn();

vi.mock("./components/splashPage", () => ({
  default: ({ onFinish }: { onFinish: () => void }) => {
    setTimeout(onFinish, 0);
    return null;
  },
}));

describe("App Navigation Tests", () => {
  it("renders home page immediately (splash skipped)", async () => {
    render(<App />);
    expect(
      await screen.findByText(/UAV Systems Engineer/i)
    ).toBeInTheDocument();
  });

  it("navigates to projects page when clicking the button", async () => {
    const user = userEvent.setup();
    render(<App />);

    const projectsButton = await screen.findByText("Projects");
    await user.click(projectsButton);

    expect(await screen.findByText("My Projects")).toBeInTheDocument();
  });

  it("navigates to contact page when clicking Hire Me", async () => {
    render(<App />);

    const hireMeButton = await screen.findByRole("button", {
      name: /hire me/i,
    });
    fireEvent.click(hireMeButton);

    expect(await screen.findByText("Get In Touch")).toBeInTheDocument();
  });
});
