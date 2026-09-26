export interface SignalVisitor<T> { visitUsage(signal: UsageDrop): T; visitSupport(signal: SupportEscalation): T; }
export interface AccountSignal { accept<T>(visitor: SignalVisitor<T>): T; }
export class UsageDrop implements AccountSignal { constructor(readonly percent: number) {} accept<T>(visitor: SignalVisitor<T>): T { return visitor.visitUsage(this); } }
export class SupportEscalation implements AccountSignal { constructor(readonly openCases: number) {} accept<T>(visitor: SignalVisitor<T>): T { return visitor.visitSupport(this); } }
