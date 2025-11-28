import { render, screen, act } from "@testing-library/react";
import SplashPage from "./splashPage";
import { vi } from "vitest";

describe("SplashPage", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("calls onFinish after animation completes", () => {
    const onFinish = vi.fn();
    render(<SplashPage onFinish={onFinish} />);

    expect(screen.getByAltText("Aircraft")).toBeInTheDocument();
    act(() => {
      vi.advanceTimersByTime(4000);
    });

    expect(onFinish).toHaveBeenCalled();
  });
});
