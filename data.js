const EMBEDDED_CALENDAR = {
  "events": [
    {"title":"Abe -- Adjuster 2.0 design sync (Frog input)","start":"7:30 AM","end":"8:00 AM","start_iso":"2026-04-27T07:30:00-05:00","end_iso":"2026-04-27T08:00:00-05:00","description":"Source: Gloria 4/23 -- close the loop on UI vs. prioritization debate.","location":""},
    {"title":"JN/Mark sync on AaC","start":"8:30 AM","end":"8:55 AM","start_iso":"2026-04-27T08:30:00-05:00","end_iso":"2026-04-27T08:55:00-05:00","description":"Zoom (USAA)","location":""},
    {"title":"Bi-weekly 1:1 w/Jonathan N","start":"9:00 AM","end":"9:25 AM","start_iso":"2026-04-27T09:00:00-05:00","end_iso":"2026-04-27T09:25:00-05:00","description":"Meeting prep: products and services, AaC","location":"EXEC SAT HO BO3W.E321"},
    {"title":"Bi-weekly 1:1 w/Jon","start":"9:30 AM","end":"9:55 AM","start_iso":"2026-04-27T09:30:00-05:00","end_iso":"2026-04-27T09:55:00-05:00","description":"Meeting prep: health stuff, Dan Griffiths","location":""},
    {"title":"Bi-weekly 1:1 w/Justin White","start":"11:00 AM","end":"11:25 AM","start_iso":"2026-04-27T11:00:00-05:00","end_iso":"2026-04-27T11:25:00-05:00","description":"Meeting Prep: claims research I've done over the weekend, Abe discussion","location":""},
    {"title":"P&C IT Stand Up","start":"1:00 PM","end":"1:25 PM","start_iso":"2026-04-27T13:00:00-05:00","end_iso":"2026-04-27T13:25:00-05:00","description":"Zoom (USAA)","location":""},
    {"title":"ServiceNow consumption model walkthrough","start":"3:00 PM","end":"3:50 PM","start_iso":"2026-04-27T15:00:00-05:00","end_iso":"2026-04-27T15:50:00-05:00","description":"Meeting prep: review sent emails for previous ServiceNow meetings and summaries","location":""},
    {"title":"School Schedule -- Zoom meetings after 4","start":"4:00 PM","end":"5:00 PM","start_iso":"2026-04-27T16:00:00-05:00","end_iso":"2026-04-27T17:00:00-05:00","description":"USAA","location":""},
    {"title":"USAA WAY initiative monthly","start":"5:00 PM","end":"5:05 PM","start_iso":"2026-04-27T17:00:00-05:00","end_iso":"2026-04-27T17:05:00-05:00","description":"USAA","location":""},
    {"title":"Weekly Highlights Submissions reminder","start":"5:00 PM","end":"5:25 PM","start_iso":"2026-04-27T17:00:00-05:00","end_iso":"2026-04-27T17:25:00-05:00","description":"End of Day Reminder","location":""}
  ],
  "advice": "Heavy morning back-to-back from 7:30 to ~9:55: Abe (Adjuster 2.0), JN/AaC, then 1:1s with Jonathan N and Jon stacked together. Build a 5-minute reset between each by ending early. 9:55-11:00 is your prep window before Justin White at 11:00 -- protect it for the weekend claims research recap and Abe debrief. The big event today is ServiceNow consumption model walkthrough at 3:00 PM -- this is where the $5M-$10M cap conversation lands. Block 2:00-3:00 PM for prep: pull out the ServiceNow rant doc and the 4/21 RFP sync notes. 5:00 PM stack (USAA WAY + Highlights reminder) overlaps the school zoom block -- handle Highlights tonight, it's due EOD Tuesday. Reminder: open task 'Send Gloria competitor AI research' is overdue from 4/25 -- close it today.",
  "generated": "2026-04-27T06:31:00-05:00"
}
;
const EMBEDDED_TASKS = [
  {
    "id": "dzZwRjMtTVpISHdlSGNZRw",
    "title": "Send Gloria research on competitor AI usage in claims",
    "notes": "Send Gloria research on competitor AI usage in claims",
    "due": "2026-04-25T00:00:00.000Z",
    "status": "needsAction",
    "webViewLink": "https://tasks.google.com/task/w6pF3-MZHHweHcYG?sa=6"
  }
]
;
const EMBEDDED_PREP = {
  "success": true,
  "preps": [
    {
      "title": "Bi-weekly 1:1 w/Jonathan N",
      "time": "9:00 AM CDT",
      "instruction": "products and services, AaC",
      "sections": [
        {
          "heading": "Products & Services (Phase 2)",
          "items": [
            "Service-by-service rationalization sessions kicking off Friday this week (per Deepak 4/22). Goal: define value, inputs, outputs.",
            "Jira capacity model -- map architect time against the defined service chunks (Q2 finish target: end of June).",
            "Status reports must show concrete deliverables, not consulting activities. Reinforce with Jonathan."
          ]
        },
        {
          "heading": "Architecture-as-Code (AaC) and EAMS",
          "items": [
            "Position EAMS / AaC as the execution mechanism for Dan Griffiths' simplification and OTOBOS mandate.",
            "Tie to EI platform direction (Kafka/Beam/Flowable/Celonis) -- same plumbing under both.",
            "Confirm with Jonathan whether his team has bandwidth for an AaC POC in Q2 or if it slips to Q3."
          ]
        }
      ]
    },
    {
      "title": "Bi-weekly 1:1 w/Jon",
      "time": "9:30 AM CDT",
      "instruction": "health stuff, Dan Griffiths",
      "sections": [
        {
          "heading": "Health stuff",
          "items": [
            "Personal item -- handle privately."
          ]
        },
        {
          "heading": "Dan Griffiths positioning",
          "items": [
            "Dan leans Federated/Co-located EA model. Frame Applied Architecture as compatible, not competing.",
            "Dan questioning ~80 architect headcount and 'bloat' -- Mark + Pravina building coverage heat map.",
            "MI3+ incident expectation: domain architects on the call, copy Mark + Pravina with 10-min attendance confirmations.",
            "Dan's 'Tier 1 Project List' -- ask Jon if Ryan or Andy Kenneth has visibility."
          ]
        }
      ]
    },
    {
      "title": "Bi-weekly 1:1 w/Justin White",
      "time": "11:00 AM CDT",
      "instruction": "claims research I've done over the weekend, Abe discussion",
      "sections": [
        {
          "heading": "Weekend Claims Research Recap",
          "items": [
            "Bring the synthesized notes from your weekend research session.",
            "Tie back to the Claims 26-30 roadmap (Ryan Loker 4/23): Guideware screen rework, Push to Debit, BPM onboarding, Service Power, Hi Marley two-way, Visual Voicemail, Gen AI use cases.",
            "Payment authority bottleneck (14+ approvals on a single payment) -- raise as a candidate Justin can champion."
          ]
        },
        {
          "heading": "Abe / Adjuster 2.0 Debrief",
          "items": [
            "Today's 7:30 AM Abe sync closes the loop on the UI vs. prioritization debate from Gloria 4/23.",
            "Outcome to share with Justin: did Frog input land? Is Adjuster 2.0 a UI rework or a notification-prioritization play?",
            "Justin is Acting Principal Architect for Claims -- he should own the next architecture decision record."
          ]
        },
        {
          "heading": "Coordination Items",
          "items": [
            "Khyber vs. Iris MDcom evaluation (from Steve Harrison intro 4/23) -- Justin should be in the loop.",
            "Quarterly sync cadence between Claims Ops and Architecture -- propose to Justin and confirm calendar.",
            "Prompt Engineering for Adjusters workshop -- Justin to co-host?"
          ]
        }
      ]
    },
    {
      "title": "ServiceNow consumption model walkthrough",
      "time": "3:00 PM CDT",
      "instruction": "review sent emails for previous ServiceNow meetings and summaries",
      "sections": [
        {
          "heading": "Active ServiceNow Position (from 4/21 RFP sync + Dan Weaver 4/22)",
          "items": [
            "Cost trajectory: Claims at $20M -> $38M, enterprise-wide potentially $100M+. Negotiation goal: cap at $5M-$10M or walk.",
            "Sourcing requires budget pre-approval for any project >$10M. RFP sync-up scheduled April 29 with Ramnik, Suhas, Jeff.",
            "Internal alternative: Experience Intelligence platform (Kafka + Beam + Flowable + Celonis) projects 4-5 week results vs ServiceNow's 8-week.",
            "Ramnik tasked Mark specifically with price-transparency negotiation and P&C fit validation."
          ]
        },
        {
          "heading": "Consumption Model Questions to Test",
          "items": [
            "Per-transaction pricing model: floor and ceiling, behavior when annual cap is hit (overage rates, soft vs hard caps).",
            "How does consumption count -- raw events, billable workflows, automation invocations, or seats?",
            "Integration cost with Guidewire (primary BPM for P&C) -- orchestration vs. pure exception management.",
            "Token / AI metering: are agentic features metered separately from base consumption?"
          ]
        },
        {
          "heading": "Talking Points",
          "items": [
            "Open with the 4-5 week internal POC outcome comparison if any data has come in.",
            "Probe for any volume tier discounts that could land USAA in the $5M-$10M corridor.",
            "Flag the Aurora/Dynamo signaling and Dan's 'Cloud First -> Fit for Purpose' shift -- ServiceNow needs to land on the Fit for Purpose side.",
            "Prepare to walk if the consumption model still trends toward $100M at full enterprise scope."
          ]
        }
      ]
    }
  ],
  "generated": "2026-04-27T06:32:00-05:00"
}
;
