import { useState } from "react";

interface AuditAgent {
  name: string;
  benefit: string;
  estimatedRoi: string;
}

interface AuditResult {
  auditTitle: string;
  potentialSavings: string;
  suggestedAgents: AuditAgent[];
  optimizationTip: string;
}

export function useAudit() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const runAudit = async (businessDesc: string): Promise<AuditResult | null> => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/audit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ businessDesc }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to generate audit");
      }

      const data: AuditResult = await response.json();
      return data;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An error occurred";
      setError(errorMessage);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { runAudit, loading, error };
}

// Example usage in a component:
// const { runAudit, loading, error } = useAudit();
// const result = await runAudit("My e-commerce business sells handmade goods");