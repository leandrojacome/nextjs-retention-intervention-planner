import { PlanIntervention, RetentionRiskVisitor } from "../application/plan-intervention";
import { SupportEscalation, UsageDrop } from "../domain/account-signal";

export default function Home() {
  const plans = [
    new PlanIntervention(new RetentionRiskVisitor()).execute("Northstar Health", [new UsageDrop(80), new SupportEscalation(2)]),
    new PlanIntervention(new RetentionRiskVisitor()).execute("Atlas Retail", [new UsageDrop(20), new SupportEscalation(1)]),
  ];
  return <main><p className="eyebrow">Customer success intelligence</p><h1>Retention interventions</h1><section>{plans.map((plan) => <article key={plan.accountId}><div><h2>{plan.accountId}</h2><p>{plan.action}</p></div><strong>{plan.risk}<small>/100</small></strong></article>)}</section></main>;
}
