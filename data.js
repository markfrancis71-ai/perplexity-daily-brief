const EMBEDDED_CALENDAR = {
  "events": [
    {"title":"TF Standup","start":"8:00 AM","end":"9:00 AM","start_iso":"2026-04-22T08:00:00-05:00","end_iso":"2026-04-22T09:00:00-05:00","description":"Meeting prep: what our architects are working on, Deepak's 3 asks","location":"CONF SAT HO Grace Hopper"},
    {"title":"Arch Forum Panel Review Meeting","start":"9:00 AM","end":"10:30 AM","start_iso":"2026-04-22T09:00:00-05:00","end_iso":"2026-04-22T10:30:00-05:00","description":"Zoom","location":""},
    {"title":"Weekly: Horizontal Platform WG","start":"9:30 AM","end":"10:00 AM","start_iso":"2026-04-22T09:30:00-05:00","end_iso":"2026-04-22T10:00:00-05:00","description":"Zoom","location":""},
    {"title":"Bi-weekly - 1:1 w/ Deepak","start":"10:30 AM","end":"10:55 AM","start_iso":"2026-04-22T10:30:00-05:00","end_iso":"2026-04-22T10:55:00-05:00","description":"Meeting Prep: EAMS, architecture as code, Dan Griffiths asks, products and services, TD backlog, tech acquisition workflows","location":""},
    {"title":"Synergy Studio Tech Decision","start":"11:00 AM","end":"11:30 AM","start_iso":"2026-04-22T11:00:00-05:00","end_iso":"2026-04-22T11:30:00-05:00","description":"Zoom","location":""},
    {"title":"EA Follow-up with Michael Lessor","start":"11:30 AM","end":"11:55 AM","start_iso":"2026-04-22T11:30:00-05:00","end_iso":"2026-04-22T11:55:00-05:00","description":"Meeting prep: review summary from last meeting with Michael Lessor","location":""},
    {"title":"Virtual lunch/skip level | Deepak with LoB Architects","start":"12:00 PM","end":"12:50 PM","start_iso":"2026-04-22T12:00:00-05:00","end_iso":"2026-04-22T12:50:00-05:00","description":"Zoom","location":""},
    {"title":"Dan/Mark Sync","start":"1:00 PM","end":"1:30 PM","start_iso":"2026-04-22T13:00:00-05:00","end_iso":"2026-04-22T13:30:00-05:00","description":"Meeting prep: review past meetings in the last two weeks regarding ServiceNow, ServiceNow RFP, JJ's claims friction dashboard, cto/se engagement","location":"Dan's office"},
    {"title":"CTXO Office Hours","start":"1:00 PM","end":"1:50 PM","start_iso":"2026-04-22T13:00:00-05:00","end_iso":"2026-04-22T13:50:00-05:00","description":"Zoom","location":""},
    {"title":"GenAI Program & Use Case Demos: Open Forum","start":"1:00 PM","end":"2:00 PM","start_iso":"2026-04-22T13:00:00-05:00","end_iso":"2026-04-22T14:00:00-05:00","description":"","location":""},
    {"title":"Bi-Monthly sync - EA + Keith Wechsler","start":"3:00 PM","end":"3:25 PM","start_iso":"2026-04-22T15:00:00-05:00","end_iso":"2026-04-22T15:25:00-05:00","description":"Zoom","location":""},
    {"title":"Monthly 1:1 w/ Abe Capetillo","start":"3:30 PM","end":"3:55 PM","start_iso":"2026-04-22T15:30:00-05:00","end_iso":"2026-04-22T15:55:00-05:00","description":"Zoom","location":""},
    {"title":"CTO Direct Staff | EA SLT Only","start":"4:00 PM","end":"4:30 PM","start_iso":"2026-04-22T16:00:00-05:00","end_iso":"2026-04-22T16:30:00-05:00","description":"Zoom","location":""},
    {"title":"One Way SMS for Marketing / business partners","start":"4:30 PM","end":"4:55 PM","start_iso":"2026-04-22T16:30:00-05:00","end_iso":"2026-04-22T16:55:00-05:00","description":"","location":""}
  ],
  "advice": "Packed 14-event day with three conflicts to resolve. 9:00-10:00 AM: Arch Forum Panel Review (9:00-10:30) overlaps with Horizontal Platform WG (9:30-10:00) -- decide which to attend live. 1:00 PM triple-stack: Dan/Mark Sync, CTXO Office Hours, and GenAI Demo Forum all collide -- Dan/Mark is the priority given Board tomorrow (Thursday). 4:00 PM: CTO Direct Staff overlaps with start of One Way SMS meeting. Bright spot: 2:00-3:00 PM is open -- use it as your Board dry-run window. Note: Board is tomorrow, Thursday April 23.",
  "generated": "2026-04-22T06:31:00-05:00"
}
;
const EMBEDDED_TASKS = []
;
const EMBEDDED_PREP = {
  "success": true,
  "preps": [
    {
      "title": "TF Standup",
      "time": "8:00 AM CDT",
      "instruction": "what our architects are working on, Deepak's 3 asks",
      "sections": [
        {
          "heading": "Architect Team Status (from EA leadership 4/21)",
          "items": [
            "Morale pressure is elevated -- EMGs are 'crushing' the team; watch for TPM data accuracy slippage.",
            "Reward Spot entries must be complete by April 24th -- push directors to finalize today.",
            "TD backlog: Jeremy Martin's TDSR needs to move to 'Ready for Final'; Mark to send backlog approvals to Jeff today.",
            "Jira/Dashboards access cleanup is in-flight via Alicia."
          ]
        },
        {
          "heading": "Deepak's 3 Asks (infer from yesterday's context)",
          "items": [
            "EA Value Proposition framing for Dan Griffiths -- Dan leans Federated/Co-located model; need 'Applied Architecture' positioning.",
            "Pulse Survey readiness -- brief the team on constructive framing.",
            "EAMS / architecture-as-code roadmap positioning for the Dan/Mark sync at 1:00 PM."
          ]
        }
      ]
    },
    {
      "title": "Bi-weekly 1:1 with Deepak",
      "time": "10:30 AM CDT",
      "instruction": "EAMS, architecture as code, Dan Griffiths asks, products and services, TD backlog, tech acquisition workflows",
      "sections": [
        {
          "heading": "EAMS / Architecture-as-Code",
          "items": [
            "Position as the execution mechanism for Dan Griffiths' simplification and OTOBOS mandate.",
            "Tie to EI (Experience Intelligence) platform direction -- Kafka/Beam/Flowable/Celonis stack.",
            "Propose a demo slot inside the upcoming Board/CTO touchpoint."
          ]
        },
        {
          "heading": "Dan Griffiths Asks",
          "items": [
            "Dan prefers a Federated/Co-located EA model (from European banking). Frame Applied Architecture as compatible, not competing.",
            "Microsoft Teams migration rumor -- flag as a watch item, not a decision.",
            "Centralized vs. federated AI governance still unresolved."
          ]
        },
        {
          "heading": "TD Backlog + Tech Acquisition",
          "items": [
            "Send accumulated TD approvals to Jeff today; keep Jeremy Martin's TDSR moving.",
            "Directors invited to TD review meetings where it helps their workflow.",
            "Tech acquisition workflow needs a written 'Permits to Build' artifact Deepak can share with Dan."
          ]
        }
      ]
    },
    {
      "title": "EA Follow-up with Michael Lessor",
      "time": "11:30 AM CDT",
      "instruction": "review summary from last meeting with Michael Lessor",
      "sections": [
        {
          "heading": "Carry-over from last Michael Lessor sync",
          "items": [
            "Policy Mod CTO-SCP engagement: Wiki + RACI + 'Permits to Build' framework for formal architecture sign-off.",
            "Exception handling path when SCP teams bypass the formal review.",
            "Socialization plan for Policy Mod SCP leads -- confirm publish date."
          ]
        },
        {
          "heading": "Today's Talking Points",
          "items": [
            "Status on Wiki publication and first round of Permits to Build submissions.",
            "Ask Michael to co-sign a one-page 'Permits to Build' summary for Dan Griffiths.",
            "Schedule next Lessor sync for early May (post-Board)."
          ]
        }
      ]
    },
    {
      "title": "Dan/Mark Sync",
      "time": "1:00 PM CDT",
      "instruction": "review past meetings in the last two weeks regarding ServiceNow, ServiceNow RFP, JJ's claims friction dashboard, cto/se engagement",
      "sections": [
        {
          "heading": "ServiceNow RFP -- from 4/21 sync (key facts)",
          "items": [
            "RFP sync-up meeting is scheduled for April 29th with Ramnik, Suhas, and Jeff.",
            "Sourcing wants upfront price negotiation and budget pre-approval for any project >$10M.",
            "Ramnik has specifically tasked Mark with negotiating lower pricing and validating P&C fit.",
            "Internal 'Experience Intelligence' (EI) platform -- Kafka + Beam + Flowable + Celonis -- already solves the same monitoring and SLO needs; POC on P&C claims data targets 4-5 week results vs ServiceNow's 8-week.",
            "Integration concern: how ServiceNow fits with Guidewire (primary BPM for P&C) and whether its role is orchestration or just exception management."
          ]
        },
        {
          "heading": "Mark's Open Actions on ServiceNow",
          "items": [
            "Lead price-transparency negotiation: usage/transactional pricing model, floor vs. ceiling, behavior when an annual cap is hit.",
            "Meet with Dan Weaver and Wes Arnold on next-step vendor engagement.",
            "Push for an interactive technical drill-down session with ServiceNow.",
            "Prepare a one-page 'Outcome Comparison' (5-week internal POC vs 8-week ServiceNow) for April 29th."
          ]
        },
        {
          "heading": "JJ's Claims Friction Dashboard + CTO/SE",
          "items": [
            "Bring current status of JJ's dashboard and how it ties to the EI POC on P&C claims data.",
            "CTO/SE engagement: continue the Applied Architecture framing Deepak is socializing with Dan Griffiths.",
            "Flag resource tension: EI team's pipeline is already full (ISCO, LifeCo, Bank); ServiceNow pivot would delay these."
          ]
        }
      ]
    }
  ],
  "generated": "2026-04-22T06:32:00-05:00"
}
;
