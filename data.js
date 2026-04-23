const EMBEDDED_CALENDAR = {
  "events": [
    {"title":"Sync up on P&C/ServiceNow next step (Pre-RFP prep)","start":"8:45 AM","end":"9:00 AM","start_iso":"2026-04-23T08:45:00-05:00","end_iso":"2026-04-23T09:00:00-05:00","description":"Zoom (USAA)","location":""},
    {"title":"Weekly Staff - P&C CTO Leadership","start":"9:00 AM","end":"10:00 AM","start_iso":"2026-04-23T09:00:00-05:00","end_iso":"2026-04-23T10:00:00-05:00","description":"Meeting prep: list out topics and todos from last meeting with Dan Weaver, also do the same from last EASLT meeting, also last P&C IT EMG standup","location":""},
    {"title":"PI Monthly All Hands Meeting","start":"10:00 AM","end":"10:50 AM","start_iso":"2026-04-23T10:00:00-05:00","end_iso":"2026-04-23T10:50:00-05:00","description":"Zoom (USAA)","location":""},
    {"title":"TD Sync","start":"10:00 AM","end":"10:30 AM","start_iso":"2026-04-23T10:00:00-05:00","end_iso":"2026-04-23T10:30:00-05:00","description":"Meeting prep: issues with Tammy keeping up, TPA changes, survey needs to be filled out for PL4 - look at to-do page","location":"Marks Office"},
    {"title":"Mark <> Steve - Intro","start":"11:00 AM","end":"11:25 AM","start_iso":"2026-04-23T11:00:00-05:00","end_iso":"2026-04-23T11:25:00-05:00","description":"Zoom (USAA)","location":""},
    {"title":"Ryan Loker - EA Follow up - Tech Overview","start":"11:30 AM","end":"11:55 AM","start_iso":"2026-04-23T11:30:00-05:00","end_iso":"2026-04-23T11:55:00-05:00","description":"Meeting Prep: review and summarize key topics and takeaways from last meeting with Ryan Loker","location":""},
    {"title":"Lunch / Desk Time","start":"12:00 PM","end":"1:00 PM","start_iso":"2026-04-23T12:00:00-05:00","end_iso":"2026-04-23T13:00:00-05:00","description":"","location":""},
    {"title":"School fiesta","start":"1:00 PM","end":"3:15 PM","start_iso":"2026-04-23T13:00:00-05:00","end_iso":"2026-04-23T15:15:00-05:00","description":"Personal","location":""},
    {"title":"Exception PER0002685: AEF Process to adhere to the PoP r...","start":"1:30 PM","end":"2:00 PM","start_iso":"2026-04-23T13:30:00-05:00","end_iso":"2026-04-23T14:00:00-05:00","description":"Zoom (USAA)","location":""}
  ],
  "advice": "Heavy morning, conflict-heavy 10:00 AM slot: PI Monthly All Hands (10:00-10:50) overlaps TD Sync (10:00-10:30) -- pick TD Sync given the Tammy/TPA/PL4 survey action items; catch PI recording later. 8:45 AM Pre-RFP ServiceNow sync is only 15 minutes -- protect it. School fiesta 1:00-3:15 PM collides with Exception PER0002685 at 1:30 -- delegate or reschedule the exception call. Afternoon is otherwise open; use 3:30-5:00 PM for Board-deck cleanup, TD approvals to Jeff, and the Reward Spot entries due tomorrow (April 24). No lunch meeting today -- good window for Dan/Mark follow-ups from yesterday's ServiceNow $100M conversation.",
  "generated": "2026-04-23T06:31:00-05:00"
}
;
const EMBEDDED_TASKS = []
;
const EMBEDDED_PREP = {
  "success": true,
  "preps": [
    {
      "title": "Weekly Staff - P&C CTO Leadership",
      "time": "9:00 AM CDT",
      "instruction": "list out topics and todos from last meeting with Dan Weaver, also do the same from last EASLT meeting, also last P&C IT EMG standup",
      "sections": [
        {
          "heading": "From Dan Weaver sync 4/22",
          "items": [
            "ServiceNow skepticism is deep: claims cost trending $20M -> $38M, enterprise-wide potentially $100M. Goal: cap at $5M-$10M or walk.",
            "Internal Snowflake + Beam capabilities already cover the core monitoring/observability ask -- ServiceNow is 'heavyweight bloat'.",
            "Claims HQ building on top of Guidewire is making the architecture brittle; blocks Guidewire native R&D uptake.",
            "Dan and Mark to coordinate on potential architect rotations (Unsworth situation) BEFORE they happen -- avoid poaching friction.",
            "Thomas gets runway; potential Shared Services rotation if Policy reputation stays damaged.",
            "Sync with Teddy on Vince Sanchez's AWS cost optimization AI tool (dormant environments)."
          ]
        },
        {
          "heading": "From EA SLT 4/22",
          "items": [
            "APMO renamed to APO (Association Planning Office). Debbie Brown joining with heavy PMO focus.",
            "CTO architects now required on M3+ incident calls within their domain.",
            "InfoSec dropping SSO requirements for low-risk suppliers (no business data shared) -- get the decision in writing including signer.",
            "IBM information-architecture contract will NOT be renewed.",
            "Mark standing up 'PL Forces for Technical Architecture' next Wednesday -- Slack Mark to be included.",
            "EA Comms Workshop invite sent to leadership team -- attendance strongly encouraged."
          ]
        },
        {
          "heading": "From TF Standup 4/22 (EMG standup context)",
          "items": [
            "Strategy shift 'Cloud First' -> 'Fit for Purpose'. Team always thought they were Fit for Purpose -- messaging gap.",
            "Rumors of 'killing Dynamo and Aurora' circulating without direct comms -- morale risk.",
            "Data Center utilization 33% CPU / 34% RAM now, target 55-65%. Need historical 120% peak context.",
            "Position Technical Architects as 'CTO of the Domain' in the Friday deck.",
            "Deposits Build vs Buy slide: 60% custom / 40% vendor -- use to justify architect need even when buying.",
            "Gather Andy Jameson's list of '12 Workstreams' (Dan's next year directives).",
            "Mark considering bypassing channels to set up 30-min 1:1 with Dan -- others advise 'let the dust settle'."
          ]
        },
        {
          "heading": "Talking Points for Today",
          "items": [
            "Share the Board outcomes from today's session (this meeting is BEFORE the Board).",
            "Socialize ServiceNow position and the $5M-$10M cap target.",
            "Reinforce M3+ incident presence expectation with direct reports.",
            "Confirm PL Forces kickoff next Wednesday and the Friday deck owners."
          ]
        }
      ]
    },
    {
      "title": "TD Sync",
      "time": "10:00 AM CDT",
      "instruction": "issues with Tammy keeping up, TPA changes, survey needs to be filled out for PL4 - look at to-do page",
      "sections": [
        {
          "heading": "Tammy Capacity Issues",
          "items": [
            "Document specific symptoms (missed SLAs, dropped follow-ups, re-work). Separate signal from noise.",
            "Decide today: redistribute, pair her with a senior, or have the formal conversation.",
            "If redistribute, identify the 2-3 items to move and the receiving owner."
          ]
        },
        {
          "heading": "TPA Changes",
          "items": [
            "Identify which TPA process step is changing and who is impacted downstream.",
            "Confirm Jeff is aware of the backlog state (from yesterday's 4/22 action to send approvals).",
            "Decide on rollout timing so it doesn't collide with Reward Spot deadline tomorrow."
          ]
        },
        {
          "heading": "PL4 Survey",
          "items": [
            "Open the To-Do page and pull PL4 survey link.",
            "Complete it during this meeting or schedule a 15-min block before EOD.",
            "Pulse Survey (separate) is due May 5 at 10 PM CT -- flag for the whole team."
          ]
        }
      ]
    },
    {
      "title": "Ryan Loker - EA Follow up - Tech Overview",
      "time": "11:30 AM CDT",
      "instruction": "review and summarize key topics and takeaways from last meeting with Ryan Loker",
      "sections": [
        {
          "heading": "Carry-over from last Ryan Loker sync",
          "items": [
            "EA Tech Overview walkthrough -- confirm which layers Ryan wanted a deeper view on.",
            "Fit for Purpose positioning and how that lands with Ryan's team.",
            "Applied Architecture framing that Deepak is socializing with Dan Griffiths."
          ]
        },
        {
          "heading": "Today's Talking Points",
          "items": [
            "Share the ServiceNow $100M narrative and the internal Snowflake/Beam alternative.",
            "Tease the Deposits Build-vs-Buy 60/40 frame as a template Ryan could adapt.",
            "Identify one concrete artifact (SADD, decision, or diagram) Mark can deliver for Ryan in the next 2 weeks."
          ]
        }
      ]
    }
  ],
  "generated": "2026-04-23T06:32:00-05:00"
}
;
