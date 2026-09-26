import { NextRequest, NextResponse } from "next/server";
import { PlanIntervention, RetentionRiskVisitor } from "../../../application/plan-intervention";
import { SupportEscalation, UsageDrop } from "../../../domain/account-signal";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const plan = new PlanIntervention(new RetentionRiskVisitor()).execute(body.accountId, [new UsageDrop(body.usageDropPercent), new SupportEscalation(body.openSupportCases)]);
  return NextResponse.json(plan);
}
