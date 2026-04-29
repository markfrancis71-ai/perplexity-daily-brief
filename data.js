const EMBEDDED_CALENDAR = {
  "events": [
    {"title":"TF Standup","start":"8:00 AM","end":"9:00 AM","start_iso":"2026-04-29T08:00:00-05:00","end_iso":"2026-04-29T09:00:00-05:00","description":"Meeting prep: resiliency granularity, ask Jon about the Jeff Kennedy resiliency work","location":""},
    {"title":"Arch Forum Panel Review Meeting","start":"9:00 AM","end":"10:30 AM","start_iso":"2026-04-29T09:00:00-05:00","end_iso":"2026-04-29T10:30:00-05:00","description":"Recurring panel review","location":""},
    {"title":"Interview - Ravikanth Chavali R0114993","start":"10:30 AM","end":"12:00 PM","start_iso":"2026-04-29T10:30:00-05:00","end_iso":"2026-04-29T12:00:00-05:00","description":"Solution Architect candidate interview","location":""},
    {"title":"SAT Food Truck Mixer","start":"11:00 AM","end":"2:00 PM","start_iso":"2026-04-29T11:00:00-05:00","end_iso":"2026-04-29T14:00:00-05:00","description":"Office event","location":""},
    {"title":"Monthly: Architecture Sync with Deepak Srinivasan","start":"1:30 PM","end":"1:55 PM","start_iso":"2026-04-29T13:30:00-05:00","end_iso":"2026-04-29T13:55:00-05:00","description":"Meeting Prep: ask about 15 million dollar telematics pilot, ai work, PCS update","location":""},
    {"title":"Weekly: Horizontal Platform WG","start":"2:00 PM","end":"2:30 PM","start_iso":"2026-04-29T14:00:00-05:00","end_iso":"2026-04-29T14:30:00-05:00","description":"Meeting prep: review ServiceNow themes from the past week","location":""},
    {"title":"EA Follow-up with Michael Lessor","start":"2:30 PM","end":"2:55 PM","start_iso":"2026-04-29T14:30:00-05:00","end_iso":"2026-04-29T14:55:00-05:00","description":"Meeting prep: list out summary and takeaways from last couple of meetings with Michael Lessor","location":""},
    {"title":"PL4s for Technology Architecture","start":"3:00 PM","end":"4:00 PM","start_iso":"2026-04-29T15:00:00-05:00","end_iso":"2026-04-29T16:00:00-05:00","description":"PL4 review session","location":""},
    {"title":"EA All People Leader Meeting (Monthly)","start":"4:00 PM","end":"4:50 PM","start_iso":"2026-04-29T16:00:00-05:00","end_iso":"2026-04-29T16:50:00-05:00","description":"Meeting prep: summarize key themes over the past 2 weeks","location":""}
  ],
  "advice": "Heavy back-to-back from 8:00 AM through 4:50 PM with multiple conflicts. Critical: 10:30-12:00 Ravikanth Chavali interview is the immovable; SAT Food Truck Mixer (11-2) overlaps it -- skip the mixer or stop by briefly only after the interview. Triple stack 1:30-3:00: Deepak Architecture Sync (1:30-1:55), Horizontal Platform WG (2:00-2:30), Michael Lessor (2:30-2:55) -- end each on time, no buffers. Deepak prep: bring telematics pilot question ($15M), AI work, PCS update; Horizontal Platform WG prep: pull ServiceNow themes from past week (yesterday's 4/28 BPM/RFP discussion is the source). Michael Lessor: review takeaways from last 2 syncs. PL4 review at 3:00 PM and EA All People Leader at 4:00 PM close the day -- summarize 2-week themes for the leader meeting (Tech BoD, ServiceNow, James Karras, Resiliency, Deepak AMA, Arch huddle MCP rollout). 4 open tasks today including 'Confirm Reward Spot' (due TODAY) and three Friday-due follow-ups from Justin and Jonathan.",
  "generated": "2026-04-29T06:31:00-05:00"
}
;
const EMBEDDED_TASKS = [
  {
    "title": "Confirm Reward Spot entries went in for the team",
    "due": "2026-04-29T00:00:00.000Z",
    "status": "needsAction",
    "notes": "DUE TODAY"
  },
  {
    "title": "Resolve Datadog/Scan AI/Whatfix tool overlap -- 30-min ratio",
    "due": "2026-04-30T00:00:00.000Z",
    "status": "needsAction",
    "notes": "From Justin White 4/27"
  },
  {
    "title": "[Mark] Share Opterics homework with Adam for sniff test",
    "due": "2026-04-30T00:00:00.000Z",
    "status": "needsAction",
    "notes": "From Jonathan 4/27 -- before involving John"
  },
  {
    "title": "[Mark] Deep dive review of architecture documentation today",
    "due": "2026-04-30T00:00:00.000Z",
    "status": "needsAction",
    "notes": "Slack link from Jonathan 4/27"
  }
]
;
const EMBEDDED_PREP = {
  "success": true,
  "preps": [
    {
      "title": "TF Standup",
      "time": "8:00 AM CDT",
      "instruction": "resiliency granularity, ask Jon about the Jeff Kennedy resiliency work",
      "sections": [
        {
          "heading": "From Resiliency / Dan Mascorro 4/28",
          "items": [
            "The 15-minute RTO from Jeff Kennedy's prior analysis is widely viewed as impractical -- team pivoting to 'real-world' resiliency conversations.",
            "Push to manage resiliency at the process or experience level rather than per-application.",
            "John Fisher (Point), Justin (Claims), and Thomas Wiedemeyer (Policy) driving the technical analysis.",
            "Need to align with Faith's team (PNC business process criticality) and update Fusion with attainable data."
          ]
        },
        {
          "heading": "From Dialogue with Deepak 4/28",
          "items": [
            "160-170 applications backlogged in 'pilot' status because resiliency testing isn't complete.",
            "Mark expected to take more accountability driving resiliency completion alongside OsterCam and Hermann.",
            "Gap between NFR policy and SDLC implementation -- CIO concern.",
            "Q3 priority: PAM stack automation to replace manual mapping."
          ]
        },
        {
          "heading": "Today's Asks",
          "items": [
            "Ask Jon for the latest Jeff Kennedy resiliency analysis spreadsheet.",
            "Get a status check on the 160+ pilot-status apps.",
            "Confirm John Fisher is ready for the Faith's-team sync."
          ]
        }
      ]
    },
    {
      "title": "Architecture Sync with Deepak Srinivasan",
      "time": "1:30 PM CDT",
      "instruction": "ask about 15 million dollar telematics pilot, ai work, PCS update",
      "sections": [
        {
          "heading": "$15M Telematics Pilot",
          "items": [
            "Mentioned in the James Karras 4/28 sync as a 'final tech decision' that Suhas should not be blindsided on.",
            "Confirm whether Deepak knows the funding source and the IOT/Loss-Prevention pillar tie-in (Justin's three-pillar framing: Automated FNOL / Loss Prevention / Adjuster Co-pilot).",
            "Position as part of the AI strategy story to Dan Griffiths."
          ]
        },
        {
          "heading": "AI Work",
          "items": [
            "Agent Assist POC (AWS) launching with limited MSR set -- single vendor for business validation.",
            "IBM/WatsonX $2M investment stalled (cannot move to production).",
            "ServiceNow consumption model still under fire ($13M tokens for small scope per yesterday's RFP discussion).",
            "Tech Strategy publication paused for new CIO review before May Board."
          ]
        },
        {
          "heading": "PCS Update",
          "items": [
            "Confirm PCS Hub coverage status and any open items from the end-of-April commitment.",
            "Request status on Architecture Day scheduling adjustment for the new CIO."
          ]
        }
      ]
    },
    {
      "title": "Weekly Horizontal Platform WG",
      "time": "2:00 PM CDT",
      "instruction": "review ServiceNow themes from the past week",
      "sections": [
        {
          "heading": "Themes from past week (drawn from 4/27 contract review and 4/28 RFP discussion)",
          "items": [
            "Consumption-based pricing trending $13M+ for limited scope. Dan and Mark target: cap $5M-$10M or walk.",
            "Closed platform concern -- ServiceNow does not adhere to BPMN/CMMN standards.",
            "Senior leadership pressure: ServiceNow described as 'zombie that won't die' in some circles.",
            "Internal alternatives: optimize existing Guidewire vs. extend Flowable + Beam + Celonis EI platform.",
            "Top 6 critical transactions identification still outstanding -- Mark owns.",
            "ServiceNow could replace Celonis and Aris if consolidation savings justify -- Stay/Go analysis pending."
          ]
        },
        {
          "heading": "WG Discussion Targets",
          "items": [
            "Volume data needed for Pay-a-Bill, Correspondence, and other non-claim P&C transactions.",
            "Side-by-side comparison framework: Guidewire optimization vs. internal Flowable build vs. ServiceNow.",
            "Define 'success' criteria before Tuesday's RFP working session."
          ]
        }
      ]
    },
    {
      "title": "EA Follow-up with Michael Lessor",
      "time": "2:30 PM CDT",
      "instruction": "list out summary and takeaways from last couple of meetings with Michael Lessor",
      "sections": [
        {
          "heading": "Carry-over from prior Lessor syncs",
          "items": [
            "Policy Mod CTO-SCP engagement: Wiki + RACI + 'Permits to Build' framework.",
            "Exception handling path when SCP teams bypass formal review.",
            "Socialization plan for Policy Mod SCP leads -- publish-date confirmation pending.",
            "Action remained open: co-sign a one-page 'Permits to Build' summary for Dan Griffiths."
          ]
        },
        {
          "heading": "Today's Talking Points",
          "items": [
            "Status on Wiki publication and the first Permits to Build submissions.",
            "Tie EA value proposition to Dan Griffiths' resiliency/NFR implementation gap (from Deepak AMA 4/28).",
            "Schedule next sync for mid-May (after Tech Strategy publication post-Board)."
          ]
        }
      ]
    },
    {
      "title": "EA All People Leader Meeting",
      "time": "4:00 PM CDT",
      "instruction": "summarize key themes over the past 2 weeks",
      "sections": [
        {
          "heading": "Two-Week Themes",
          "items": [
            "ServiceNow: POC closed (4/27), consumption model under fire, $5M-$10M cap negotiation, RFP scoping.",
            "Resiliency: 160+ apps in pilot, 15-minute RTO debate, shift to experience-level ownership.",
            "Tech BoD 4/28: PNC data product strategy (37 products / 10 domains), Pub/Sub model failure, double-bubble cloud cost.",
            "Architecture: TPA retired, MCP server registry rolling out (September 2026 enforcement), three-tier framework milestone reached.",
            "AI: Agent Assist AWS POC launched, three-pillar framing (FNOL / Loss Prevention / Co-pilot), IBM WatsonX stalled.",
            "Claims: Activities burndown (73 retired, 200+ target), Adjuster 2.0 notification reset, Khyber vs Iris evaluation.",
            "SMS: Hi Marley plan threatened by new CISO/NYDFS hard line; RCS as longer-term path.",
            "People: New CIO Tech Strategy publication paused, EA centralized model reaffirmed, Pulse Survey closes May 5."
          ]
        },
        {
          "heading": "Asks for Team",
          "items": [
            "Pulse Survey participation by May 5 (10 PM CT).",
            "MCP server registry submissions before September enforcement.",
            "Identify 'soup-to-nuts' initiatives architects can own end-to-end."
          ]
        }
      ]
    }
  ],
  "generated": "2026-04-29T06:32:00-05:00"
}
;
