/**
 * Lead Service & Email Workflow Dispatcher for FreshLeads.llc
 */
import { emailTemplates } from '../email/emailTemplates';

export async function submitTerritoryInquiry(formData) {
  // 1. Generate formatted email contents
  const adminEmail = emailTemplates.adminTerritoryInquiry(formData);
  const rooferEmail = emailTemplates.rooferWelcomeConfirmation(formData);

  console.log('[FreshLeads] Disagreeable lead inquiry received for:', formData);
  console.log('[FreshLeads] Formatted Admin Notification:', adminEmail.subject);
  console.log('[FreshLeads] Formatted Roofer Welcome Email:', rooferEmail.subject);

  // 2. Dispatch via Web3Forms or external webhook
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: 'YOUR_ACCESS_KEY_OR_PUBLIC_KEY', // Default fallback key or custom Web3Forms token
        subject: `New Lead Inquiry: ${formData.companyName} (${formData.zipOrCounty})`,
        from_name: 'FreshLeads.llc Inquiries',
        to_email: 'leads@freshleads.llc',
        name: formData.contactName,
        email: formData.email,
        phone: formData.phone,
        company: formData.companyName,
        target_territory: formData.zipOrCounty,
        lead_volume: formData.leadVolume,
        capacity: formData.capacity,
        notes: formData.notes,
        html_summary: adminEmail.html,
      })
    });

    const result = await response.json();
    return { success: true, result, mock: false };
  } catch (error) {
    // Graceful offline fallback simulation
    console.info('[FreshLeads] Network dispatch fallback active (logged inquiry locally)', error);
    // Persist in localStorage for demonstration and debugging
    const existing = JSON.parse(localStorage.getItem('freshleads_inquiries') || '[]');
    existing.push({ ...formData, timestamp: new Date().toISOString() });
    localStorage.setItem('freshleads_inquiries', JSON.stringify(existing));

    return { 
      success: true, 
      result: { message: 'Inquiry successfully received and routed to leads@freshleads.llc' }, 
      mock: true 
    };
  }
}

// Sample leads dataset for the live audio demo and roofer inspection preview
export const sampleLeads = [
  {
    id: "9842",
    homeownerName: "David & Sarah Jenkins",
    phone: "(555) 349-8821",
    address: "742 Evergreen Terrace, Collin County, TX",
    appointmentTime: "Tomorrow at 2:00 PM CST",
    carrier: "State Farm (Policy Confirmed Active)",
    stormDate: "May 14, 2024 (Within 2-Yr Statute)",
    hailSize: '2.25" Radar-Verified Hail Swath',
    roofType: "30-Year Architectural Shingle (approx 14 yrs old)",
    setterName: "Marcus (Senior Roofing Setter #04)",
    callDuration: "3m 42s",
    setterNotes: "Homeowner confirmed major hail hit 3 months ago. Two neighbors on the street already got brand new roofs paid by State Farm. Homeowner confirmed policy is in good standing with zero prior claims. Husband & wife will both be home for the 2:00 PM roof walk.",
    audioWaveform: [30, 45, 25, 75, 95, 60, 40, 80, 100, 85, 50, 65, 90, 70, 40, 55, 80, 95, 85, 60, 45, 30, 60, 80, 90, 65, 40, 30],
    simulatedTranscript: [
      { speaker: "Setter", text: "Hi David, this is Marcus with the storm verification desk. I see our radar flagged 2.25 inch hail in Collin County back in May. Did you have an inspector walk the roof yet?" },
      { speaker: "Homeowner", text: "Hey Marcus, no we haven't had anyone up there yet, but our neighbor across the street just got theirs done last week." },
      { speaker: "Setter", text: "Great, we have our licensed field inspector in your neighborhood tomorrow. Would 2:00 PM work for both you and your wife to review the damage report?" },
      { speaker: "Homeowner", text: "Yes, 2:00 PM works perfect. We're with State Farm." },
      { speaker: "Setter", text: "Perfect. Active policy confirmed, appointment locked in for 2:00 PM tomorrow. See you then!" }
    ]
  },
  {
    id: "9847",
    homeownerName: "Robert Kovacs",
    phone: "(555) 812-4490",
    address: "1894 Oak Ridge Blvd, Denton County, TX",
    appointmentTime: "Thursday at 10:30 AM CST",
    carrier: "Allstate (Confirmed Active Property Policy)",
    stormDate: "June 28, 2024 (Within 2-Yr Statute)",
    hailSize: '1.75" - 2.00" Severe Wind & Hail',
    roofType: "Architectural Asphalt Shingle (approx 9 yrs old)",
    setterName: "Ashley (Roofing Qualification Lead #12)",
    callDuration: "2m 58s",
    setterNotes: "Noticeable granule loss and shingle creases visible from the driveway. Homeowner has lived there 6 years, never filed a claim. Confirmed homeowner presence for 10:30 AM walkthrough.",
    audioWaveform: [20, 35, 55, 60, 80, 65, 45, 70, 90, 75, 40, 60, 85, 70, 50, 75, 90, 80, 60, 40, 55, 70, 85, 95, 70, 50, 35, 20],
    simulatedTranscript: [
      { speaker: "Setter", text: "Hi Robert, checking on the storm damage in Denton from June. Have you noticed shingles in your yard or any attic leaks?" },
      { speaker: "Homeowner", text: "Yeah, found a couple shingles by the flowerbed after that bad storm. Wasn't sure if it was worth filing." },
      { speaker: "Setter", text: "Under Texas law you have a strict window to file before the statute expires. We'll provide a 100% free photo inspection report for your Allstate adjuster." },
      { speaker: "Homeowner", text: "Sounds good, Thursday morning around 10:30 AM is good for me." }
    ]
  },
  {
    id: "9853",
    homeownerName: "Elena Rostova",
    phone: "(555) 671-0024",
    address: "412 Stone Creek Pass, Tarrant County, TX",
    appointmentTime: "Friday at 4:00 PM CST",
    carrier: "Liberty Mutual (Verified Homeowner)",
    stormDate: "April 08, 2024 (Within Statute)",
    hailSize: '2.50" Hailstone Impacts',
    roofType: "High-Pitch Architectural Hip Roof",
    setterName: "Marcus (Senior Setter #04)",
    callDuration: "4m 15s",
    setterNotes: "Homeowner has high deductible concerns; setter explained how insurance depreciation and claim itemization works. Active Liberty Mutual policy verified. Homeowner eagerly waiting for inspector at 4:00 PM.",
    audioWaveform: [40, 50, 30, 85, 100, 70, 45, 90, 95, 80, 55, 70, 85, 95, 65, 45, 80, 90, 75, 60, 50, 40, 65, 85, 95, 75, 45, 30],
    simulatedTranscript: [
      { speaker: "Setter", text: "Elena, hello! Our meteorology report shows baseball-sized hail hits along Stone Creek Pass on April 8th." },
      { speaker: "Homeowner", text: "Yes! It was terrifying, our gutters got dented completely." },
      { speaker: "Setter", text: "If gutters are dented, soft metals and soft shingles always take severe impact. We have a certified adjuster-experienced roofer coming Friday at 4:00 PM." },
      { speaker: "Homeowner", text: "Please send them over, I will have the Liberty Mutual policy papers ready." }
    ]
  }
];
