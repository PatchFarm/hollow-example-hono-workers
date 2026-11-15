import { describe, expect, it } from "vitest";
import app from "../src/index.js";

describe("app", () => {
  it("says hello", async () => {
    const res = await app.request("/");
    expect(res.status).toBe(200);
    expect(await res.text()).toContain("Hono example");
  });

  it("reports health", async () => {
    const res = await app.request("/health");
    expect(await res.json()).toEqual({ status: "ok" });
  });
});
