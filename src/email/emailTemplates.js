/**
 * FreshLeads.llc - Transactional & Lead Workflow Email Templates
 * Domain: FreshLeads.llc
 * Contact: info@freshleads.llc
 */

export const emailTemplates = {
  /**
   * Template 1: High Priority Alert to FreshLeads.llc Sales Team
   * Sent when a roofing contractor requests territory access
   */
  adminTerritoryInquiry: (data) => ({
    subject: `🔥 [NEW ROOFER INQUIRY] ${data.companyName || 'Roofing Contractor'} - Target: ${data.zipOrCounty || 'Pending Territory'}`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #07080B; color: #F1F5F9; margin: 0; padding: 20px; }
    .card { background-color: #13161F; border: 1px solid #202636; border-radius: 12px; max-width: 600px; margin: 0 auto; overflow: hidden; }
    .header { background: linear-gradient(135deg, #181C28 0%, #0D0F14 100%); border-bottom: 2px solid #FF5C00; padding: 24px; }
    .logo { color: #FFFFFF; font-size: 22px; font-weight: 800; letter-spacing: -0.5px; }
    .logo span { color: #FF5C00; }
    .badge { display: inline-block; background: rgba(255, 92, 0, 0.15); border: 1px solid #FF5C00; color: #FF5C00; padding: 4px 10px; border-radius: 20px; font-size: 12px; font-weight: 700; margin-top: 8px; }
    .body { padding: 24px; }
    .field { margin-bottom: 16px; }
    .label { font-size: 12px; text-transform: uppercase; color: #94A3B8; font-weight: 600; margin-bottom: 4px; }
    .value { font-size: 16px; color: #FFFFFF; font-weight: 500; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
    .footer { background: #0D0F14; padding: 16px 24px; font-size: 12px; color: #64748B; border-top: 1px solid #202636; text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <div class="logo">FRESH<span>LEADS</span>.LLC</div>
      <div class="badge">NEW TERRITORY AVAILABILITY REQUEST</div>
    </div>
    <div class="body">
      <div class="grid">
        <div class="field">
          <div class="label">Contractor Name</div>
          <div class="value">${data.contactName || 'N/A'}</div>
        </div>
        <div class="field">
          <div class="label">Company Name</div>
          <div class="value">${data.companyName || 'N/A'}</div>
        </div>
      </div>
      <div class="grid">
        <div class="field">
          <div class="label">Email Address</div>
          <div class="value"><a href="mailto:${data.email}" style="color: #FF5C00; text-decoration: none;">${data.email || 'N/A'}</a></div>
        </div>
        <div class="field">
          <div class="label">Phone Number</div>
          <div class="value"><a href="tel:${data.phone}" style="color: #FF5C00; text-decoration: none;">${data.phone || 'N/A'}</a></div>
        </div>
      </div>
      <div class="field">
        <div class="label">Target Market / County / Zip</div>
        <div class="value" style="font-weight: 700; color: #FF7A29;">${data.zipOrCounty || 'Not Specified'}</div>
      </div>
      <div class="grid">
        <div class="field">
          <div class="label">Monthly Desired Volume</div>
          <div class="value">${data.leadVolume || '25 appointments / mo'}</div>
        </div>
        <div class="field">
          <div class="label">Current Crew Capacity</div>
          <div class="value">${data.capacity || 'Ready to scale immediately'}</div>
        </div>
      </div>
      ${data.notes ? `
      <div class="field" style="margin-top: 12px; padding: 12px; background: #0D0F14; border-radius: 8px; border: 1px solid #202636;">
        <div class="label">Roofer Notes</div>
        <div class="value" style="font-size: 14px; color: #CBD5E1;">${data.notes}</div>
      </div>` : ''}
    </div>
    <div class="footer">
      Automated dispatch from FreshLeads.llc Territory Engine • Received ${new Date().toLocaleString()}
    </div>
  </div>
</body>
</html>
`
  }),

  /**
   * Template 2: Roofer Auto-Responder & Welcome Confirmation
   * Sent immediately to the roofer when they submit the territory form
   */
  rooferWelcomeConfirmation: (data) => ({
    subject: `⚡ [FreshLeads.llc] Territory Request Received: ${data.zipOrCounty || 'Your Market'}`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #07080B; color: #F1F5F9; margin: 0; padding: 20px; }
    .card { background-color: #13161F; border: 1px solid #202636; border-radius: 12px; max-width: 600px; margin: 0 auto; overflow: hidden; }
    .header { background: linear-gradient(135deg, #181C28 0%, #0D0F14 100%); border-bottom: 2px solid #FF5C00; padding: 28px 24px; text-align: center; }
    .logo { color: #FFFFFF; font-size: 24px; font-weight: 900; letter-spacing: -0.5px; }
    .logo span { color: #FF5C00; }
    .title { font-size: 18px; color: #FFFFFF; font-weight: 700; margin-top: 8px; }
    .body { padding: 28px 24px; line-height: 1.6; font-size: 15px; color: #CBD5E1; }
    .highlight-box { background: #0D0F14; border: 1px solid #2C3449; border-left: 4px solid #FF5C00; padding: 16px; border-radius: 6px; margin: 20px 0; }
    .pill { display: inline-block; background: rgba(16, 185, 129, 0.15); border: 1px solid #10B981; color: #10B981; padding: 2px 8px; border-radius: 4px; font-size: 12px; font-weight: 700; }
    .bullet { display: flex; align-items: flex-start; margin-bottom: 12px; }
    .check { color: #FF5C00; font-weight: bold; margin-right: 8px; }
    .button { display: inline-block; background: #FF5C00; color: #FFFFFF !important; font-weight: 700; padding: 14px 28px; border-radius: 8px; text-decoration: none; margin: 20px 0; font-size: 15px; }
    .footer { background: #0D0F14; padding: 20px; font-size: 12px; color: #64748B; border-top: 1px solid #202636; text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <div class="logo">FRESH<span>LEADS</span>.LLC</div>
      <div class="title">We Received Your Territory Request</div>
    </div>
    <div class="body">
      <p>Hey ${data.contactName ? data.contactName.split(' ')[0] : 'there'},</p>
      <p>Thank you for reaching out to <strong>FreshLeads.llc</strong>. We are currently analyzing storm radar dates and setter availability in your requested territory (<strong>${data.zipOrCounty || 'your target zone'}</strong>).</p>
      
      <div class="highlight-box">
        <strong style="color: #FFFFFF; display: block; margin-bottom: 6px;">The FreshLeads Standard:</strong>
        <div style="font-size: 14px; color: #94A3B8;">
          All leads you receive are <strong>100% exclusive</strong> to your roofing company. Every appointment is pre-set, confirmed with the homeowner, backed by full call audio, and strictly sourced from storm dates within the legal statute of limitations.
        </div>
      </div>

      <p><strong style="color: #FFFFFF;">What Happens Next:</strong></p>
      <div class="bullet">
        <span class="check">✓</span>
        <div><strong>Territory Lock Check:</strong> We verify our existing roofer partners to ensure no conflict of interest in your county.</div>
      </div>
      <div class="bullet">
        <span class="check">✓</span>
        <div><strong>Storm Date Audit:</strong> We check NOAA hail & high-wind swath history within the actionable statute of limitations.</div>
      </div>
      <div class="bullet">
        <span class="check">✓</span>
        <div><strong>Discovery & Audio Sample Review:</strong> A representative will contact you at <strong>${data.phone || 'your phone number'}</strong> to review sample call recordings and onboard your setters.</div>
      </div>

      <div style="text-align: center;">
        <a href="https://freshleads.llc" class="button">Visit FreshLeads.llc</a>
      </div>

      <p style="font-size: 13px; color: #94A3B8; margin-top: 24px;">
        Remember: We've helped over 30+ roofers completely transform their business model. The one secret they all have in common? <strong>Staying consistent.</strong>
      </p>
    </div>
    <div class="footer">
      © ${new Date().getFullYear()} FreshLeads.llc • Exclusive Roofing Appointments • info@freshleads.llc
    </div>
  </div>
</body>
</html>
`
  }),

  /**
   * Template 3: Homeowner Inspection Dispatch Template
   * The standardized template used by FreshLeads to deliver pre-set leads to roofer clients
   */
  leadDispatchHandoff: (lead) => ({
    subject: `🚨 [CONFIRMED APPOINTMENT] ${lead.homeownerName} - ${lead.appointmentTime} - ${lead.city}, ${lead.state}`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #07080B; color: #F1F5F9; margin: 0; padding: 20px; }
    .card { background-color: #13161F; border: 1px solid #202636; border-radius: 12px; max-width: 650px; margin: 0 auto; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
    .header { background: linear-gradient(135deg, #181C28 0%, #0D0F14 100%); border-bottom: 3px solid #FF5C00; padding: 24px; }
    .top-bar { display: flex; justify-content: space-between; align-items: center; }
    .logo { color: #FFFFFF; font-size: 20px; font-weight: 900; }
    .logo span { color: #FF5C00; }
    .status-tag { background: #10B981; color: #07080B; font-weight: 800; font-size: 11px; padding: 4px 8px; border-radius: 4px; text-transform: uppercase; }
    .hero-time { margin-top: 16px; background: rgba(255, 92, 0, 0.1); border: 1px solid rgba(255, 92, 0, 0.3); border-radius: 8px; padding: 14px; text-align: center; }
    .time-title { font-size: 12px; text-transform: uppercase; color: #FF7A29; font-weight: 700; letter-spacing: 0.5px; }
    .time-slot { font-size: 22px; color: #FFFFFF; font-weight: 800; margin-top: 4px; }
    .section { padding: 24px; border-bottom: 1px solid #202636; }
    .sec-title { font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #94A3B8; font-weight: 700; margin-bottom: 16px; display: flex; align-items: center; }
    .sec-title span { color: #FF5C00; margin-right: 6px; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    .field-box { background: #0D0F14; border: 1px solid #202636; border-radius: 8px; padding: 12px; }
    .f-label { font-size: 11px; text-transform: uppercase; color: #64748B; font-weight: 600; margin-bottom: 4px; }
    .f-val { font-size: 15px; color: #FFFFFF; font-weight: 600; }
    .audio-box { background: #181C28; border: 1px solid #FF5C00; border-radius: 10px; padding: 18px; text-align: center; margin: 16px 0; }
    .audio-btn { display: inline-block; background: #FF5C00; color: #FFFFFF !important; font-weight: 800; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-size: 14px; }
    .notes-box { background: #0D0F14; border-radius: 8px; padding: 14px; font-size: 14px; color: #E2E8F0; line-height: 1.5; }
    .guarantee-banner { background: rgba(16, 185, 129, 0.08); border: 1px solid #10B981; border-radius: 8px; padding: 14px; font-size: 13px; color: #CBD5E1; margin: 20px 0; display: flex; align-items: center; }
    .footer { background: #0D0F14; padding: 18px; text-align: center; font-size: 12px; color: #64748B; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <div class="top-bar">
        <div class="logo">FRESH<span>LEADS</span>.LLC</div>
        <div class="status-tag">CONFIRMED APPOINTMENT</div>
      </div>
      <div class="hero-time">
        <div class="time-title">Confirmed Inspection Date & Time</div>
        <div class="time-slot">${lead.appointmentTime || 'Tomorrow at 2:00 PM'}</div>
      </div>
    </div>

    <!-- Homeowner & Property Details -->
    <div class="section">
      <div class="sec-title"><span>■</span> Homeowner & Property Information</div>
      <div class="grid">
        <div class="field-box">
          <div class="f-label">Homeowner Name</div>
          <div class="f-val">${lead.homeownerName || 'David & Sarah Jenkins'}</div>
        </div>
        <div class="field-box">
          <div class="f-label">Phone Number</div>
          <div class="f-val"><a href="tel:${lead.phone}" style="color: #FF5C00; text-decoration: none;">${lead.phone || '(555) 349-8821'}</a></div>
        </div>
      </div>
      <div class="field-box" style="margin-top: 12px;">
        <div class="f-label">Inspection Address</div>
        <div class="f-val">${lead.address || '742 Evergreen Terrace, Springfield'}</div>
      </div>
    </div>

    <!-- Insurance & Storm Intel -->
    <div class="section">
      <div class="sec-title"><span>■</span> Insurance & Storm Data Verification</div>
      <div class="grid">
        <div class="field-box">
          <div class="f-label">Active Insurance Carrier</div>
          <div class="f-val" style="color: #10B981;">${lead.carrier || 'State Farm (Confirmed Active)'}</div>
        </div>
        <div class="field-box">
          <div class="f-label">Verified Storm Date (Statute Active)</div>
          <div class="f-val">${lead.stormDate || 'May 14, 2024'}</div>
        </div>
      </div>
      <div class="grid" style="margin-top: 12px;">
        <div class="field-box">
          <div class="f-label">Storm Severity / Hail Size</div>
          <div class="f-val">${lead.hailSize || '2.00" - 2.25" Hail Radar Match'}</div>
        </div>
        <div class="field-box">
          <div class="f-label">Roof Type / Approx Age</div>
          <div class="f-val">${lead.roofType || 'Architectural Shingle (12 yrs)'}</div>
        </div>
      </div>
    </div>

    <!-- Call Recording Audio Handoff -->
    <div class="section">
      <div class="sec-title"><span>■</span> Setter Call Recording & Transcript</div>
      <div class="audio-box">
        <div style="font-weight: 700; color: #FFFFFF; margin-bottom: 6px;">Setter Confirmed Call Audio File (Recording #FL-${lead.id || '9842'})</div>
        <div style="font-size: 13px; color: #94A3B8; margin-bottom: 14px;">Listen to homeowner confirmation, property notes, and carrier verification before dispatching:</div>
        <a href="${lead.audioUrl || 'https://freshleads.llc/recordings/' + (lead.id || '9842')}" class="audio-btn">▶ PLAY RECORDING IN FRESHLEADS PORTAL</a>
      </div>
      <div class="f-label">Setter Notes:</div>
      <div class="notes-box">
        "${lead.setterNotes || 'Homeowner confirmed severe hail hit the neighborhood. Mentioned neighbors already got full replacements approved. Insured with State Farm for 8 years, has zero prior claims. Husband will be present for the walkthrough.'}"
      </div>
    </div>

    <!-- Guarantee & Replacement Policy -->
    <div class="section" style="border-bottom: none;">
      <div class="guarantee-banner">
        <div>
          <strong style="color: #10B981; display: block;">🛡️ FreshLeads 100% Replacement Guarantee:</strong>
          If this lead is a no-show, uninsured, or outside statute of limitations, click here to get it replaced immediately at zero charge.
        </div>
      </div>
    </div>

    <div class="footer">
      Dispatched by FreshLeads.llc • Lead ID: FL-${lead.id || '9842'} • Exclusively Assigned to Your Roofing Team
    </div>
  </div>
</body>
</html>
`
  })
};
