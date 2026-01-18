import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/constants';

export const sendContactForm = async (formData: FormData): Promise<EmailJSResponseStatus> => {
  const formObject: { [key: string]: string } = {};
  formData.forEach((value, key) => {
    if (typeof value === 'string') {
      formObject[key] = value;
    }
  });

  if (!EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.templateIdAdmin || !EMAILJS_CONFIG.publicKey) {
    throw new Error('EmailJS configuration is missing. Please check your environment variables.');
  }

  try {
    const result = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateIdAdmin,
      formObject,
      EMAILJS_CONFIG.publicKey
    );

    if (result.status !== 200) {
      throw new Error(`EmailJS returned status: ${result.status}`);
    }

    return result;
  } catch (error) {
    console.error('EmailJS error:', error);
    throw new Error('Failed to send email. Please try again later.');
  }
};

// Mock AI Audit function (replace with actual implementation)
export const runAIAudit = async (businessDesc: string): Promise<{
  auditTitle: string;
  potentialSavings: string;
  suggestedAgents: Array<{
    name: string;
    benefit: string;
    estimatedRoi: string;
  }>;
  optimizationTip: string;
}> => {
  // This is a mock function. In production, integrate with your AI service
  await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API delay

  const suggestions = [
    {
      name: "Lead Qualification Agent",
      benefit: "Automates lead scoring and follow-up, reduces manual work by 80%",
      estimatedRoi: "40-60% time savings"
    },
    {
      name: "Customer Support Agent",
      benefit: "Handles 65% of routine inquiries instantly, 24/7 availability",
      estimatedRoi: "50-70% cost reduction"
    },
    {
      name: "Data Processing Agent",
      benefit: "Automates data entry and report generation with 99.5% accuracy",
      estimatedRoi: "60-80% efficiency gain"
    }
  ];

  return {
    auditTitle: "AI Automation Opportunity Report",
    potentialSavings: "40-70%",
    suggestedAgents: suggestions,
    optimizationTip: "Start with one high-impact process, measure results for 30 days, then scale to adjacent workflows. Automation ROI compounds over time."
  };
};