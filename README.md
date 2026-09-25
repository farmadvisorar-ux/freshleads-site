# FreshLeads.llc ⚡ Exclusive Pre-Set Roofing Inspection Appointments

A modern, high-converting web platform for **FreshLeads.llc**, delivering exclusive pre-set roofing inspection appointments backed by call recordings, insurance verification, statute-of-limitations storm targeting, and a 100% replacement guarantee.

🌐 **Production Domain**: [https://freshleads.llc](https://freshleads.llc)  
📧 **Official Inquiries**: `leads@freshleads.llc`

---

## 🚀 Key Features

1. **Pre-Set Inspection Appointments**: Homeowners have confirmed an exact day and time window for your estimator to arrive and perform the roof walk.
2. **Full Call Audio Recordings**: Every setter call is recorded. Roofers can listen to the homeowner's voice, setter qualification, and carrier notes before driving out.
3. **Active Homeowner Insurance Verified**: Every home is pre-screened to ensure active property coverage with major carriers (State Farm, Allstate, Travelers, Liberty Mutual, etc.).
4. **Storm Dates Within Statute of Limitations**: Geofenced weather radar targeting (hail 1.5"+, 60mph+ wind) strictly within legal statutory claim filing deadlines.
5. **100% Replacement Guarantee Shield**: If any lead is a no-show, uninsured, or outside the storm perimeter, it is replaced immediately at zero cost.
6. **The Consistency Formula (30+ Roofers Scaled)**: Highlights how over 30+ roofing businesses transformed from feast-or-famine door knocking to systematic 7-figure predictable revenues.
7. **Interactive ROI & Revenue Calculator**: Dynamic estimation of monthly and annual pipeline based on weekly appointments and close rates.
8. **Interactive Territory Checker & Lead Intake**: Multi-step modal routing requests to the email workflow.

---

## 📧 Email Workflow Architecture

The platform includes standardized transactional and dispatch email templates located in `src/email/emailTemplates.js`:

1. **Admin Territory Inquiry Alert** (`adminTerritoryInquiry`):
   - Sent to `leads@freshleads.llc` when a roofing contractor requests territory lock.
   - Includes contractor name, phone, company, target county/zip, volume needed, and crew capacity.
2. **Roofer Welcome Auto-Responder** (`rooferWelcomeConfirmation`):
   - Sent immediately to the roofer confirming receipt and explaining the storm date audit and setter briefing process.
3. **Official Homeowner Inspection Dispatch** (`leadDispatchHandoff`):
   - Standardized template dispatched to roofer clients containing:
     - Homeowner Name, Address & Direct Phone
     - Confirmed Inspection Time Window
     - Active Insurance Carrier
     - Verified Storm Date & Hail/Wind Severity
     - Secure Setter Call Audio Recording Playback Link
     - Setter Notes & Pre-Walkthrough Context
     - 1-Click Lead Replacement Shield Button

---

## 🌐 Domain Configuration (`FreshLeads.llc`)

To point your custom domain `FreshLeads.llc` to this site:

### DNS Records:
| Type | Host / Name | Value / Target | Notes |
| :--- | :--- | :--- | :--- |
| **CNAME** | `www` | `<your-deployment-url>` (e.g. `farmadvisorar-ux.github.io` or Vercel/Netlify) | For `www.freshleads.llc` |
| **A** | `@` | Apex IP Addresses provided by host | For root `freshleads.llc` |

### Email DNS (for `@freshleads.llc`):
- **MX Records**: Point to your email host (Google Workspace, Zoho, Microsoft 365, or Resend).
- **TXT (SPF)**: `v=spf1 include:... ~all`
- **TXT (DKIM)**: As provided by your email provider.
- **TXT (DMARC)**: `v=DMARC1; p=quarantine; rua=mailto:dmarc@freshleads.llc`

---

## 🛠️ Local Development & Build

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🛡️ License & Copyright
© 2026 FreshLeads.llc. All rights reserved.
