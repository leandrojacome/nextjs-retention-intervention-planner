# ADR-001: Keep account signals explicit

## Status
Accepted.

## Decision
Model each signal as a typed domain object and calculate risk through a Visitor.

## Consequences
Risk composition remains explainable and independently testable. Adding signal types requires updating visitors and evaluation evidence.
