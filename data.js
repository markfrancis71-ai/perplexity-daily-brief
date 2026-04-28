const EMBEDDED_CALENDAR = {
  "events": [
    {"title":"Architecture Huddle","start":"9:00 AM","end":"10:00 AM","start_iso":"2026-04-28T09:00:00-05:00","end_iso":"2026-04-28T10:00:00-05:00","description":"Recurring weekly EA huddle","location":""},
    {"title":"Review Meeting on BPM platform Tech Recommendation","start":"10:00 AM","end":"10:45 AM","start_iso":"2026-04-28T10:00:00-05:00","end_iso":"2026-04-28T10:45:00-05:00","description":"BPM platform tech recommendation review","location":""},
    {"title":"Monthly: Dialogue with Deepak","start":"11:00 AM","end":"11:50 AM","start_iso":"2026-04-28T11:00:00-05:00","end_iso":"2026-04-28T11:50:00-05:00","description":"","location":""},
    {"title":"Monthly: Architecture Sync with Deepak Srinivasan","start":"11:00 AM","end":"11:25 AM","start_iso":"2026-04-28T11:00:00-05:00","end_iso":"2026-04-28T11:25:00-05:00","description":"","location":""},
    {"title":"Doctor's appointment","start":"11:30 AM","end":"12:00 PM","start_iso":"2026-04-28T11:30:00-05:00","end_iso":"2026-04-28T12:00:00-05:00","description":"Personal","location":""},
    {"title":"Bi-weekly 1:1 w/James Karras","start":"2:30 PM","end":"2:55 PM","start_iso":"2026-04-28T14:30:00-05:00","end_iso":"2026-04-28T14:55:00-05:00","description":"Meeting Prep: two way texting security issues, goal setting","location":""},
    {"title":"Bi-weekly: Tech BoD","start":"3:05 PM","end":"4:00 PM","start_iso":"2026-04-28T15:05:00-05:00","end_iso":"2026-04-28T16:00:00-05:00","description":"Meeting prep: highlights and cross cutting themes from the last two weeks","location":""}
]
,
  "advice": "Tight 11:00 AM stack: Dialogue with Deepak (11:00-11:50) and the separate Architecture Sync with Deepak Srinivasan (11:00-11:25) are scheduled at the same time, then doctor's appointment at 11:30 AM cuts in. Confirm whether the two Deepak meetings are truly separate or one was carried twice. Doctor's appointment at 11:30 AM is the immovable -- treat it as such and ask the Deepak meetings to flex. The 10:00 AM BPM Tech Recommendation review lands while you have the ServiceNow takeaways from yesterday fresh -- ServiceNow's 'horizontal platform' framing belongs in this conversation. James Karras 1:1 at 2:30 PM has prep on two-way texting security (yesterday's Rick sync covered NYDFS/MFA/PII concerns). Tech BoD at 3:05 PM needs cross-cutting themes from the last two weeks -- ServiceNow $5M-$10M cap, claims Day-in-the-Life debate, Markdown publishing lab, and Microsoft Teams migration impact. Open task overdue: 'Confirm Reward Spot entries' due tomorrow.",
  "generated": "2026-04-28T06:31:00-05:00"
}
;
const EMBEDDED_TASKS = [
  {
    "id": "Y29uZmlybVJld2FyZFNwb3RfMDQyOQ",
    "title": "Confirm Reward Spot entries went in for the team",
    "notes": "Carry-over from 4/24 deadline check",
    "due": "2026-04-29T00:00:00.000Z",
    "status": "needsAction"
  }
]
;
const EMBEDDED_PREP = {
  "success": true,
  "preps": [
    {
      "title": "Bi-weekly 1:1 w/James Karras",
      "time": "2:30 PM CDT",
      "instruction": "two way texting security issues, goal setting",
      "sections": [
        {
          "heading": "Two-Way SMS Security (from Rick 4/27 sync)",
          "items": [
            "New CISO Dan is taking a much harder line on security than predecessor -- legal and security mandating MFA for any inbound data via SMS.",
            "NYDFS 2025 ruling could set the industry standard for 2025-2026 stricter PII handling.",
            "Even using a member's name in a text could be considered a PII breach -- adjusters currently rely on manual judgment.",
            "Hi Marley lacks robust outbound DLP, putting security burden on the carrier.",
            "Octa to Entra ID migration is mandatory and will require significant refactoring for non-member account creation.",
            "RCS (Rich Communication Services) is the longer-term secure path; Twilio/AWS Connect demos showed integration but auth is the missing link."
          ]
        },
        {
          "heading": "Two-Way SMS Talking Points for James",
          "items": [
            "Plan to set up Corey Newsom outreach (per yesterday's Justin sync) -- propose James be on that loop.",
            "How does this affect James' DNS / Digital Claims roadmap? CCOM retirement timeline may need to slip.",
            "Audit current SMS data points before Dan's hard line takes effect -- need a working list of 'violations' under new policy."
          ]
        },
        {
          "heading": "Goal Setting",
          "items": [
            "Mark has a 'red exclamation mark' in Workday (per Praveena 4/27) -- finalize formal goals replacing generic IVA language with specific project 'big rocks'.",
            "Big rocks under consideration: ServiceNow consumption model decision, Adjuster 2.0 / Claims notification redesign, Architecture-as-Code rollout, AI governance memo, EI platform POC milestones, SMS security migration.",
            "Friday absence noted (per Praveena) -- 15-min blocks needed with Mike and Jonathan to clear goal-setting backlog before then."
          ]
        }
      ]
    },
    {
      "title": "Bi-weekly: Tech BoD",
      "time": "3:05 PM CDT",
      "instruction": "highlights and cross cutting themes from the last two weeks",
      "sections": [
        {
          "heading": "Highlights from the Past Two Weeks",
          "items": [
            "ServiceNow 6-week Claims Payment POC closed successfully (4/27) using real Kafka stream data; integration with GuideWire and SAP demonstrated; GenAI for case summarization validated.",
            "ServiceNow consumption model concerns aired: cost trajectory $20M -> $38M for claims, potentially $100M enterprise-wide; cap target $5M-$10M.",
            "Decision pending on whether ServiceNow replaces Celonis (process mining) and Aris (BPM) -- the 'consolidation savings' that could justify the price tag.",
            "Adjuster 2.0 / Claims notification reset: shift from 500+ activity types toward iOS-style alert/badge model. 73 activities retired, 200+ target by year-end.",
            "Two-way SMS pilot threatened by new CISO security stance and potential NYDFS rules -- could blow up Hi Marley plan.",
            "Architecture three-tier framework (Business, Architecture, Specification) milestone reached; pressure-testing with Jonathan Stewart and Mike Lester."
          ]
        },
        {
          "heading": "Cross-Cutting Themes",
          "items": [
            "Run vs. Innovation cost separation: Dan pushing testing costs from 10% to 7.5% of code spend; other LoBs asking for the framework.",
            "Microsoft Teams migration tooling shift causing 'swirl' -- inventorying automated Slack notifications now.",
            "Claims design churn: business leaders acting as designers, leading to 'firing-offence' levels of rework -- need scope-freeze discipline.",
            "AI strategy maturing along three pillars: Automated FNOL, Loss Prevention via IOT/telematics, Adjuster Co-pilot via Pro Navigator.",
            "Career advancements (formerly 'promotions') execute this weekend; ED recruitment in final stages."
          ]
        },
        {
          "heading": "Asks / Decisions Needed",
          "items": [
            "Endorsement on the ServiceNow $5M-$10M cap negotiation framing.",
            "Awareness on the SMS security blocker so it doesn't surface as a surprise at Tech BoD.",
            "Visibility into the Tier 1 Project List from Dan -- ask Ryan or Andy Kenneth for access."
          ]
        }
      ]
    }
  ],
  "generated": "2026-04-28T06:32:00-05:00"
}
;
