import { describe, expect, it } from "vitest";
import { SupportEscalation, UsageDrop } from "../domain/account-signal";
import { PlanIntervention, RetentionRiskVisitor } from "./plan-intervention";

describe("PlanIntervention", () => {
  it("recommends executive outreach for combined high-risk signals", () => {
    const plan = new PlanIntervention(new RetentionRiskVisitor()).execute("acct-1", [new UsageDrop(80), new SupportEscalation(2)]);
    expect(plan).toEqual({ accountId: "acct-1", risk: 78, action: "executive-outreach" });
  });
});
