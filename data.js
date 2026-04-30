const EMBEDDED_CALENDAR = {
  "events": [
    {"title":"Claims HQ & Comms UI demo","start":"9:30 AM","end":"10:00 AM","start_iso":"2026-04-30T09:30:00-05:00","end_iso":"2026-04-30T10:00:00-05:00","description":"Jenna scheduling visualization demo per Sarah Hudson 4/27","location":""},
    {"title":"Bi-weekly 1:1 w/Randy Burris","start":"9:30 AM","end":"9:55 AM","start_iso":"2026-04-30T09:30:00-05:00","end_iso":"2026-04-30T09:55:00-05:00","description":"Recurring 1:1","location":""},
    {"title":"Portfolio & Principal Architect Forum","start":"10:00 AM","end":"11:00 AM","start_iso":"2026-04-30T10:00:00-05:00","end_iso":"2026-04-30T11:00:00-05:00","description":"Recurring forum","location":""},
    {"title":"TD Sync","start":"10:00 AM","end":"10:30 AM","start_iso":"2026-04-30T10:00:00-05:00","end_iso":"2026-04-30T10:30:00-05:00","description":"Recurring TD sync","location":""},
    {"title":"Weekly Staff – P&C CTO Leadership","start":"11:00 AM","end":"12:00 PM","start_iso":"2026-04-30T11:00:00-05:00","end_iso":"2026-04-30T12:00:00-05:00","description":"Meeting prep: takeaways from Deepak's full staff; cross cutting themes over the past week; do pulse survey","location":""},
    {"title":"Interview with Manoj Jacob - R0114993","start":"1:00 PM","end":"2:30 PM","start_iso":"2026-04-30T13:00:00-05:00","end_iso":"2026-04-30T14:30:00-05:00","description":"Solutions Engineer candidate interview","location":""},
    {"title":"Bi-Monthly sync with EA - Sarah Cook","start":"2:30 PM","end":"2:55 PM","start_iso":"2026-04-30T14:30:00-05:00","end_iso":"2026-04-30T14:55:00-05:00","description":"Meeting prep: review notes from last meeting with Sarah Cook; Drips and marketing sms update","location":""},
    {"title":"EA Communications Workshop","start":"3:00 PM","end":"4:00 PM","start_iso":"2026-04-30T15:00:00-05:00","end_iso":"2026-04-30T16:00:00-05:00","description":"Placeholder","location":""}
  ],
  "advice": "Two morning conflicts to resolve. 9:30 AM Claims HQ demo overlaps the Randy Burris 1:1 -- the demo is the rarer asset (Jenna scheduling), so reschedule Randy to next week. 10:00 AM Portfolio & Principal Architect Forum overlaps TD Sync -- pick the Forum given the architect-value/Architecture Day momentum from yesterday's TF standup; catch TD Sync recap from Tammy. 11:00 Weekly Staff is the day's anchor -- prep card synthesizes Deepak's full staff takeaways and cross-cutting themes; reminder also: do the Pulse Survey before May 5. Interview at 1:00 PM is 90 minutes -- block 12:30 PM for review of Manoj's resume. Sarah Cook 2:30 PM has prep on Drips/marketing SMS update. EA Comms Workshop at 3:00 PM is a placeholder; confirm whether it's still on. 3 active tasks all due TODAY: Datadog/Scan AI/Whatfix tool overlap, Opterics homework, and architecture documentation deep dive (overdue Reward Spot from yesterday should already be closed).",
  "generated": "2026-04-30T06:32:00-05:00"
}
;
const EMBEDDED_TASKS = [
  {"title":"Resolve Datadog/Scan AI/Whatfix tool overlap -- 30-min ratio","due":"2026-04-30T00:00:00.000Z","status":"needsAction","notes":"DUE TODAY"},
  {"title":"[Mark] Share Opterics homework with Adam for sniff test","due":"2026-04-30T00:00:00.000Z","status":"needsAction","notes":"DUE TODAY -- before involving John"},
  {"title":"[Mark] Deep dive review of architecture documentation","due":"2026-04-30T00:00:00.000Z","status":"needsAction","notes":"DUE TODAY -- Slack link from Jonathan 4/27"},
  {"title":"Confirm Reward Spot entries went in for the team","due":"2026-04-29T00:00:00.000Z","status":"needsAction","notes":"OVERDUE from 4/29"}
]
;
const EMBEDDED_PREP = {
  "success": true,
  "preps": [
    {
      "title": "Weekly Staff - P&C CTO Leadership",
      "time": "11:00 AM CDT",
      "instruction": "takeaways from Deepak's full staff; cross cutting themes over the past week; do pulse survey",
      "sections": [
        {
          "heading": "Takeaways from Deepak Full Staff 4/29",
          "items": [
            "Project Leapfrog / CMT Telematics: $14M POC under heavy scrutiny -- CEO Bill Powers reportedly went around channels to align directly with Wayne Peacock on pricing. 30-day bail-out clause being added to the SOW.",
            "Archetype AI surfaced as fallback to CMT -- physics-based modeling that could span Home, Flume, etc. for a fuller member fingerprint.",
            "Renters platform sales gap: PCS/demos performing well, zero policy sales in field. Coordination with Tiffany needed.",
            "Power Sports (formerly Motorcycle) and Home/Auto warranty are next launches.",
            "Personnel: Ronnig departure noted blunt; rumors on Tina Craig. Team in 'survivor mode' -- stay productive, stay under the radar."
          ]
        },
        {
          "heading": "Cross-Cutting Themes (Past Week)",
          "items": [
            "Solo.io Enterprise Agent Gateway selected as centralized AI/MCP traffic control point. Three deployments in flight: Egress, Internal, dedicated MCP cluster on OpenShift.",
            "ForgeRock to Microsoft Entra identity migration imminent (9-month target) -- impacts agent identity model.",
            "Bank Pod: 'Cloud First / Fit for Purpose' standard with teeth on AWS. Tim director-level pushback being managed.",
            "Architecture Day debate: shift from 'Dog and Pony' showcases to half-day in-person 'Hard Discussion' sessions.",
            "Resiliency: 160+ apps in pilot, 15-min RTO retired, shift to experience-level criticality with Faith's team.",
            "ServiceNow consumption model under fire ($13M+ tokens for limited scope); $5M-$10M cap target, RFP scoping continues."
          ]
        },
        {
          "heading": "Pulse Survey",
          "items": [
            "Closes May 5 at 10 PM CT.",
            "Reminder for the team during today's staff.",
            "Mark to complete personally if not done."
          ]
        }
      ]
    },
    {
      "title": "Bi-Monthly sync with EA - Sarah Cook",
      "time": "2:30 PM CDT",
      "instruction": "review notes from last meeting with Sarah Cook; Drips and marketing sms update",
      "sections": [
        {
          "heading": "Drips / Marketing SMS Update",
          "items": [
            "Drips decommission tied to the 4/22 Salesforce Mobile Connect decision for one-way marketing SMS. 3-month carrier shortcode approval is the gating item.",
            "TCPA risk drove keeping marketing and operational traffic distinct; June 2026 PLN review will revisit long-term merge.",
            "Hi Marley two-way pilot status separate -- now under heavy CISO/NYDFS pressure (4/27 Rick sync).",
            "Pull data portability concern forward -- avoid Salesforce lock-in on shortcodes and audience data."
          ]
        },
        {
          "heading": "Carry-over Items from Last Sarah Cook Sync",
          "items": [
            "Confirm what action items closed since the last sync.",
            "Update Sarah on the May 1 ATC/NBA vendor decision context.",
            "Briefly cover ServiceNow $5M-$10M cap negotiation if relevant to her scope."
          ]
        }
      ]
    }
  ],
  "generated": "2026-04-30T06:32:00-05:00"
}
;
