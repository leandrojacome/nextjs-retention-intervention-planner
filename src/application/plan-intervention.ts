import { AccountSignal, SignalVisitor, SupportEscalation, UsageDrop } from "../domain/account-signal";

export class RetentionRiskVisitor implements SignalVisitor<number> {
  visitUsage(signal: UsageDrop): number { return Math.min(Math.max(signal.percent, 0), 100) * 0.6; }
  visitSupport(signal: SupportEscalation): number { return Math.min(signal.openCases * 15, 60); }
}

export class PlanIntervention {
  constructor(private readonly visitor: SignalVisitor<number>) {}
  execute(accountId: string, signals: AccountSignal[]) {
    const risk = Math.min(Math.round(signals.reduce((sum, signal) => sum + signal.accept(this.visitor), 0)), 100);
    return { accountId, risk, action: risk >= 70 ? "executive-outreach" : risk >= 40 ? "success-review" : "monitor" };
  }
}
