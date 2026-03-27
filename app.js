// ── Theme Toggle ──
(function() {
  var root = document.documentElement;
  var prefersDark = matchMedia('(prefers-color-scheme: dark)').matches;
  var theme = prefersDark ? 'dark' : 'light';
  root.setAttribute('data-theme', theme);

  document.querySelectorAll('[data-theme-toggle]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      theme = theme === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', theme);
    });
  });
})();

// ── Mobile Menu ──
(function() {
  var btn = document.getElementById('mobileMenuBtn');
  var nav = document.getElementById('mobileNav');
  if (!btn || !nav) return;
  btn.addEventListener('click', function() { nav.classList.toggle('open'); });
  nav.querySelectorAll('a').forEach(function(a) {
    a.addEventListener('click', function() { nav.classList.remove('open'); });
  });
})();

// ── Tabs ──
(function() {
  document.querySelectorAll('.tab-btn[data-tab]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      document.querySelectorAll('.tab-panel').forEach(function(p) { p.classList.remove('active'); });
      var el = document.getElementById('tab-' + btn.getAttribute('data-tab'));
      if (el) el.classList.add('active');
    });
  });
})();

// ── Utility Functions ──
function escapeHtml(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function toCDT(isoStr) {
  var d = new Date(isoStr);
  var utc = d.getTime() + d.getTimezoneOffset() * 60000;
  return new Date(utc - 5 * 3600000);
}

function fmtHM(date) {
  var h = date.getHours();
  var m = date.getMinutes();
  var ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  return h + ':' + String(m).padStart(2, '0') + ' ' + ampm;
}

function formatTime(isoStr) {
  var cdt = toCDT(isoStr);
  return fmtHM(cdt);
}

function formatDuration(startStr, endStr) {
  var ms = new Date(endStr) - new Date(startStr);
  var mins = Math.round(ms / 60000);
  if (mins >= 60) {
    var hrs = mins / 60;
    return hrs % 1 === 0 ? hrs + 'h' : hrs.toFixed(1) + 'h';
  }
  return mins + 'm';
}

function detectConflicts(events) {
  var conflicts = {};
  for (var i = 0; i < events.length; i++) {
    for (var j = i + 1; j < events.length; j++) {
      var aStart = new Date(events[i].start).getTime();
      var aEnd = new Date(events[i].end).getTime();
      var bStart = new Date(events[j].start).getTime();
      var bEnd = new Date(events[j].end).getTime();
      if (aStart < bEnd && bStart < aEnd) {
        conflicts[events[i].id] = true;
        conflicts[events[j].id] = true;
      }
    }
  }
  return conflicts;
}

function getLocationLabel(loc) {
  if (!loc) return '';
  if (loc.toLowerCase().indexOf('zoom') !== -1) return 'Zoom';
  if (loc.toLowerCase().indexOf('teams') !== -1) return 'Teams';
  if (loc.toLowerCase().indexOf('meet.google') !== -1) return 'Google Meet';
  if (loc.toLowerCase().startsWith('http')) return 'Virtual';
  if (loc.length > 40) return loc.substring(0, 40) + '\u2026';
  return loc;
}

// ── Dynamic Schedule Advice ──
function generateAdvice(events) {
  if (!events || events.length === 0) return '';

  var now = toCDT(new Date().toISOString());
  var nowMs = now.getTime();

  var parsed = events.map(function(ev) {
    var s = toCDT(ev.start);
    var e = toCDT(ev.end);
    return {
      title: ev.title, start: s, end: e,
      startMs: s.getTime(), endMs: e.getTime(),
      description: ev.description || '',
      isBreak: /lunch|desk time|break|focus|blocked|hold/i.test(ev.title),
      id: ev.id
    };
  }).sort(function(a, b) { return a.startMs - b.startMs; });

  var upcoming = parsed.filter(function(e) { return e.endMs > nowMs; });
  var current = parsed.filter(function(e) { return e.startMs <= nowMs && e.endMs > nowMs; });
  var past = parsed.filter(function(e) { return e.endMs <= nowMs; });
  var future = parsed.filter(function(e) { return e.startMs > nowMs; });

  var conflicts = [];
  for (var i = 0; i < upcoming.length; i++) {
    for (var j = i + 1; j < upcoming.length; j++) {
      if (upcoming[i].startMs < upcoming[j].endMs && upcoming[j].startMs < upcoming[i].endMs) {
        conflicts.push([upcoming[i], upcoming[j]]);
      }
    }
  }

  var backToBack = [];
  for (var k = 0; k < future.length - 1; k++) {
    var gap = future[k + 1].startMs - future[k].endMs;
    if (gap >= 0 && gap <= 5 * 60000 && !future[k].isBreak && !future[k + 1].isBreak) {
      backToBack.push([future[k], future[k + 1]]);
    }
  }

  var nextGap = null;
  for (var g = 0; g < future.length - 1; g++) {
    var gapMs = future[g + 1].startMs - future[g].endMs;
    if (gapMs >= 15 * 60000) {
      nextGap = { after: future[g], before: future[g + 1], mins: Math.round(gapMs / 60000) };
      break;
    }
  }
  if (!nextGap && future.length > 0) {
    var gapBefore = future[0].startMs - nowMs;
    if (gapBefore >= 15 * 60000) {
      nextGap = { after: null, before: future[0], mins: Math.round(gapBefore / 60000) };
    }
  }

  var importantKeywords = /demo|review|1on1|1:1|leadership|steering|planning|finalize|exec|strategy|prep|kickoff|standup/i;
  var importantUpcoming = future.filter(function(e) {
    return !e.isBreak && importantKeywords.test(e.title + ' ' + e.description);
  });

  var parts = [];

  if (current.length > 0 && !current[0].isBreak) {
    var cur = current[0];
    var minsLeft = Math.round((cur.endMs - nowMs) / 60000);
    parts.push('You are currently in <strong>' + escapeHtml(cur.title) + '</strong> (' + minsLeft + ' min remaining).');
  } else if (current.length > 0 && current[0].isBreak) {
    var breakEv = current[0];
    var breakLeft = Math.round((breakEv.endMs - nowMs) / 60000);
    parts.push('You have <strong>' + breakLeft + ' minutes</strong> of open time right now (' + escapeHtml(breakEv.title) + ').');
  }

  if (future.length > 0) {
    var next = future[0];
    var minsUntil = Math.round((next.startMs - nowMs) / 60000);
    if (minsUntil <= 0) {
      parts.push('<strong>' + escapeHtml(next.title) + '</strong> starts now.');
    } else if (minsUntil <= 5) {
      parts.push('<strong>' + escapeHtml(next.title) + '</strong> starts in ' + minsUntil + ' min \u2014 heads up.');
    } else if (minsUntil <= 30) {
      parts.push('Next up: <strong>' + escapeHtml(next.title) + '</strong> at ' + fmtHM(next.start) + ' (' + minsUntil + ' min).');
    } else {
      parts.push('Next up: <strong>' + escapeHtml(next.title) + '</strong> at ' + fmtHM(next.start) + '.');
    }
  }

  if (conflicts.length > 0) {
    var c = conflicts[0];
    parts.push('<span style="color:var(--red);font-weight:600">Conflict:</span> <strong>' + escapeHtml(c[0].title) + '</strong> and <strong>' + escapeHtml(c[1].title) + '</strong> overlap at ' + fmtHM(c[1].start) + '.');
  }

  if (backToBack.length > 0) {
    if (backToBack.length === 1) {
      var bb = backToBack[0];
      parts.push('<span style="color:var(--red);font-weight:600">Back-to-back:</span> <strong>' + escapeHtml(bb[0].title) + '</strong> flows directly into <strong>' + escapeHtml(bb[1].title) + '</strong> \u2014 no buffer.');
    } else {
      var startTime = fmtHM(backToBack[0][0].start);
      var endTime = fmtHM(backToBack[backToBack.length - 1][1].end);
      parts.push('<span style="color:var(--red);font-weight:600">Back-to-back meetings ' + startTime + '\u2013' + endTime + '</span> \u2014 ' + (backToBack.length + 1) + ' meetings with no buffer.');
    }
  }

  if (nextGap && importantUpcoming.length > 0) {
    var prepTarget = null;
    for (var p = 0; p < importantUpcoming.length; p++) {
      if (nextGap.before && importantUpcoming[p].startMs >= nextGap.before.startMs) {
        prepTarget = importantUpcoming[p];
        break;
      }
    }
    if (!prepTarget) prepTarget = importantUpcoming[0];
    if (nextGap.after) {
      parts.push('Use the <strong>' + nextGap.mins + '-min gap</strong> after ' + escapeHtml(nextGap.after.title) + ' (' + fmtHM(nextGap.after.end) + ') to prepare for <strong>' + escapeHtml(prepTarget.title) + '</strong>.');
    } else {
      parts.push('You have <strong>' + nextGap.mins + ' min</strong> before your next meeting \u2014 good window to prepare for <strong>' + escapeHtml(prepTarget.title) + '</strong>.');
    }
  } else if (nextGap && !nextGap.after) {
    parts.push('You have <strong>' + nextGap.mins + ' min</strong> of open time before ' + escapeHtml(nextGap.before.title) + '.');
  }

  if (future.length === 0 && past.length > 0) {
    parts.push('All ' + past.length + ' meetings are done for today. Time to wrap up and tackle follow-up items.');
  } else {
    var remaining = future.filter(function(e) { return !e.isBreak; }).length;
    if (remaining > 0 && past.length > 0) {
      parts.push(remaining + ' meeting' + (remaining !== 1 ? 's' : '') + ' remaining today.');
    }
  }

  return parts.length > 0 ? '<strong>Day Management:</strong> ' + parts.join(' ') : '';
}

// ── Render Schedule ──
var cachedTasks = [];

function renderSchedule(events) {
  var container = document.getElementById('schedule-container');
  if (!container) return;
  if (!events || events.length === 0) {
    container.innerHTML = '<div class="tasks-empty">No events today</div>';
    updateAdviceBar([]);
    return;
  }
  var conflicts = detectConflicts(events);
  var html = '<div class="schedule-list">';
  events.forEach(function(ev) {
    var isConflict = conflicts[ev.id];
    var isBreak = /lunch|desk time|break|focus/i.test(ev.title);
    var highlightClass = isConflict ? 'highlight-red' : isBreak ? 'highlight-green' : '';
    var locLabel = getLocationLabel(ev.location);
    var detail = '';
    if (locLabel) detail += locLabel;
    if (ev.description) {
      var prep = ev.description.length > 120 ? ev.description.substring(0, 120) + '\u2026' : ev.description;
      detail += (detail ? ' \u00b7 ' : '') + prep;
    }

    html += '<div class="sched-item">';
    html += '<div class="sched-time">';
    html += '<span class="sched-hour">' + formatTime(ev.start) + '</span>';
    html += '<span class="sched-dur">' + formatDuration(ev.start, ev.end) + '</span>';
    html += '</div>';
    html += '<div class="sched-body ' + highlightClass + '">';
    html += '<p class="sched-title">' + escapeHtml(ev.title);
    if (isConflict) html += ' <span class="sched-tag tag-conflict">Conflict</span>';
    html += '</p>';
    if (detail) html += '<p class="sched-detail">' + escapeHtml(detail) + '</p>';
    html += '</div></div>';
  });
  html += '</div>';
  container.innerHTML = html;
  updateAdviceBar(events);
}

function updateAdviceBar(events) {
  var bar = document.querySelector('.advice-bar');
  if (!bar) return;
  var advice = generateAdvice(events);
  if (advice) {
    bar.innerHTML = advice;
    bar.style.display = '';
  } else {
    bar.style.display = 'none';
  }

  var heroH1 = document.querySelector('.hero h1');
  if (heroH1) {
    var cdtNow = toCDT(new Date().toISOString());
    var h = cdtNow.getHours();
    var greeting = h < 12 ? 'Good Morning' : h < 17 ? 'Good Afternoon' : 'Good Evening';
    heroH1.textContent = greeting + ', Mark.';
  }

  var heroSub = document.querySelector('.hero-sub');
  if (heroSub && events) {
    var cdtNow2 = toCDT(new Date().toISOString());
    var nowMs2 = cdtNow2.getTime();
    var futureCount = events.filter(function(ev) { return toCDT(ev.start).getTime() > nowMs2; }).length;
    var totalCount = events.length;
    var density = totalCount >= 8 ? 'Dense schedule' : totalCount >= 5 ? 'Moderate schedule' : 'Light schedule';
    var label = futureCount === totalCount ? totalCount + ' meeting' + (totalCount !== 1 ? 's' : '')
      : futureCount + ' of ' + totalCount + ' meetings remaining';
    heroSub.textContent = label + ' \u00b7 ' + cachedTasks.length + ' task' + (cachedTasks.length !== 1 ? 's' : '') + ' \u00b7 ' + density + ' today';
  }
}

// ── Render Tasks ──
var currentSort = 'date';

function formatTaskDate(dateStr) {
  if (!dateStr) return '';
  var d = new Date(dateStr);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return months[d.getMonth()] + ' ' + d.getDate();
}

function sortTasks(tasks, mode) {
  var sorted = tasks.slice();
  if (mode === 'date') {
    sorted.sort(function(a, b) {
      var da = a.due ? new Date(a.due).getTime() : Infinity;
      var db = b.due ? new Date(b.due).getTime() : Infinity;
      return da - db;
    });
  } else {
    sorted.sort(function(a, b) {
      var ua = a.updated ? new Date(a.updated).getTime() : 0;
      var ub = b.updated ? new Date(b.updated).getTime() : 0;
      return ub - ua;
    });
  }
  return sorted;
}

function renderTasks() {
  var container = document.getElementById('tasks-container');
  if (!container) return;
  if (cachedTasks.length === 0) {
    container.innerHTML = '<div class="tasks-empty">No tasks</div>';
    return;
  }
  var sorted = sortTasks(cachedTasks, currentSort);
  var html = '';
  sorted.forEach(function(t) {
    var dueStr = t.due ? 'Due ' + formatTaskDate(t.due) : '';
    var addedStr = t.updated ? 'Added ' + formatTaskDate(t.updated) : '';
    var link = t.webViewLink || '#';
    html += '<div class="task-row">';
    html += '<div class="task-check"><div class="task-circle" title="View in Google Tasks"></div></div>';
    html += '<div>';
    html += '<p class="task-name"><a href="' + link + '" target="_blank" rel="noopener">' + escapeHtml(t.title) + '</a></p>';
    html += '<p class="task-meta">Google Tasks' + (addedStr ? ' \u00b7 ' + addedStr : '') + '</p>';
    if (dueStr) html += '<p class="task-due">' + dueStr + '</p>';
    html += '</div></div>';
  });
  container.innerHTML = html;
}

// ── Render Meeting Prep ──
function renderMeetingPrep(data) {
  var container = document.getElementById('meeting-prep-container');
  if (!container) return;
  if (!data || !data.preps || data.preps.length === 0) {
    container.innerHTML = '<div class="prep-empty">No meeting prep available</div>';
    return;
  }
  var html = '';
  data.preps.forEach(function(prep, idx) {
    var isOpen = idx === 0 ? ' open' : '';
    html += '<details class="prep-card"' + isOpen + '>';
    html += '<summary class="prep-header">';
    html += '<div class="prep-title-row">';
    html += '<h3>' + escapeHtml(prep.title) + '</h3>';
    html += '<span class="prep-time">' + escapeHtml(prep.time) + '</span>';
    html += '</div>';
    html += '<svg class="prep-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>';
    html += '</summary>';
    html += '<div class="prep-body">';

    if (prep.instruction) {
      html += '<div class="prep-instruction">' + escapeHtml(prep.instruction) + '</div>';
    }

    if (prep.sections && prep.sections.length > 0) {
      prep.sections.forEach(function(section) {
        if (section.heading) {
          html += '<h4>' + escapeHtml(section.heading) + '</h4>';
        }
        if (section.items && section.items.length > 0) {
          html += '<ul>';
          section.items.forEach(function(item) {
            html += '<li>' + escapeHtml(item) + '</li>';
          });
          html += '</ul>';
        }
        if (section.text) {
          html += '<p>' + escapeHtml(section.text) + '</p>';
        }
      });
    }

    html += '</div></details>';
  });
  container.innerHTML = html;
}

// ── Sort Pills ──
(function() {
  document.querySelectorAll('.pill[data-sort]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.pill[data-sort]').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      currentSort = btn.getAttribute('data-sort');
      renderTasks();
    });
  });
})();

// ── Smooth Scroll ──
document.querySelectorAll('a[href^="#"]').forEach(function(a) {
  a.addEventListener('click', function(e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ── Scroll Reveal ──
(function() {
  if (!('IntersectionObserver' in window)) return;
  var items = document.querySelectorAll('.section, .story-card, .sched-item, .hist-row, .task-row');
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-up');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });
  items.forEach(function(el) { obs.observe(el); });
})();

// ── "Add to Tasks" buttons (static: opens Google Tasks in new tab) ──
function initAddTaskButtons() {
  document.querySelectorAll('.add-task-btn').forEach(function(btn) {
    if (btn.dataset.bound) return;
    btn.dataset.bound = '1';
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      // In static mode, open Google Tasks directly
      window.open('https://tasks.google.com', '_blank');
      var button = this;
      button.classList.add('added');
      button.textContent = 'Open Tasks \u2197';
    });
  });
}

// ── Initialize from embedded data ──
(function() {
  // Calendar
  if (typeof EMBEDDED_CALENDAR !== 'undefined' && EMBEDDED_CALENDAR.events) {
    renderSchedule(EMBEDDED_CALENDAR.events);
  }

  // Tasks
  if (typeof EMBEDDED_TASKS !== 'undefined') {
    cachedTasks = Array.isArray(EMBEDDED_TASKS) ? EMBEDDED_TASKS : [];
    renderTasks();
  }

  // Meeting Prep
  if (typeof EMBEDDED_PREP !== 'undefined') {
    renderMeetingPrep(EMBEDDED_PREP);
  }

  // Add to Tasks buttons
  initAddTaskButtons();
  new MutationObserver(function() { initAddTaskButtons(); }).observe(document.body, { childList: true, subtree: true });

  // Refresh advice bar every 5 minutes (still dynamic based on time-of-day)
  if (typeof EMBEDDED_CALENDAR !== 'undefined' && EMBEDDED_CALENDAR.events) {
    setInterval(function() {
      updateAdviceBar(EMBEDDED_CALENDAR.events);
    }, 5 * 60 * 1000);
  }

  // Show a static mode banner
  var schedUpdated = document.getElementById('schedUpdated');
  if (schedUpdated) {
    schedUpdated.textContent = 'Static view';
    schedUpdated.title = 'This is a read-only snapshot. Interactive features available at perplexity.ai/computer.';
  }
})();

// ── Header scroll shadow ──
(function() {
  var header = document.getElementById('header');
  if (!header) return;
  window.addEventListener('scroll', function() {
    header.style.borderBottomColor = window.scrollY > 10 ? '' : 'transparent';
  }, { passive: true });
  if (window.scrollY <= 10) header.style.borderBottomColor = 'transparent';
})();
