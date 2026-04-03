(() => {
  // --- Theme toggle ---
  const cb = document.getElementById('theme-cb')
  const label = document.getElementById('theme-label')
  const saved = localStorage.getItem('theme')

  function setTheme(light) {
    document.documentElement.setAttribute('data-theme', light ? 'light' : 'dark')
    label.textContent = light ? 'light' : 'dark'
    cb.checked = light
    localStorage.setItem('theme', light ? 'light' : 'dark')
  }

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  setTheme(saved ? saved === 'light' : !prefersDark)
  cb.addEventListener('change', () => setTheme(cb.checked))

  // --- Modal ---
  const backdrop = document.getElementById('modal-backdrop')
  document.getElementById('modal-open').addEventListener('click', () => backdrop.style.display = '')
  document.getElementById('modal-close').addEventListener('click', () => backdrop.style.display = 'none')
  document.getElementById('modal-cancel').addEventListener('click', () => backdrop.style.display = 'none')
  document.getElementById('modal-confirm').addEventListener('click', () => backdrop.style.display = 'none')
  backdrop.addEventListener('click', (e) => { if (e.target === backdrop) backdrop.style.display = 'none' })

  // --- Toast ---
  const toast = document.getElementById('toast')
  let toastTimer
  document.getElementById('toast-trigger').addEventListener('click', () => {
    clearTimeout(toastTimer)
    toast.style.display = ''
    toastTimer = setTimeout(() => toast.style.display = 'none', 3000)
  })
  document.getElementById('toast-close').addEventListener('click', () => {
    clearTimeout(toastTimer)
    toast.style.display = 'none'
  })

  // --- Tabs ---
  const tabTriggers = document.querySelectorAll('.tab-trigger')
  const tabMap = { overview: 'tab-overview', config: 'tab-config', logs: 'tab-logs' }

  tabTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      tabTriggers.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false') })
      Object.values(tabMap).forEach(id => document.getElementById(id).hidden = true)
      trigger.classList.add('active')
      trigger.setAttribute('aria-selected', 'true')
      document.getElementById(tabMap[trigger.dataset.tab]).hidden = false
    })
  })

  // --- Accordion ---
  document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const body = document.getElementById(trigger.dataset.accordion)
      const isOpen = !body.hidden
      body.hidden = isOpen
      trigger.classList.toggle('open', !isOpen)
      trigger.setAttribute('aria-expanded', String(!isOpen))
    })
  })

  // --- Pagination ---
  const pageBtns = document.querySelectorAll('.pagination .page-btn:not(:disabled)')
  pageBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.pagination .page-btn').forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
    })
  })

  // --- Slider ---
  function setupSlider(sliderId, valueId) {
    const slider = document.getElementById(sliderId)
    if (!slider) return
    const track = slider.querySelector('.slider-track')
    const range = slider.querySelector('.slider-range')
    const thumb = slider.querySelector('.slider-thumb')
    const display = document.getElementById(valueId)

    function update(pct) {
      pct = Math.max(0, Math.min(100, pct))
      range.style.width = pct + '%'
      thumb.style.left = pct + '%'
      thumb.setAttribute('aria-valuenow', Math.round(pct))
      if (display) display.textContent = Math.round(pct)
    }

    function pctFromEvent(e) {
      const rect = track.getBoundingClientRect()
      return ((e.clientX - rect.left) / rect.width) * 100
    }

    let dragging = false

    thumb.addEventListener('mousedown', (e) => {
      e.preventDefault()
      dragging = true
    })

    document.addEventListener('mousemove', (e) => {
      if (!dragging) return
      update(pctFromEvent(e))
    })

    document.addEventListener('mouseup', () => { dragging = false })

    track.addEventListener('click', (e) => update(pctFromEvent(e)))

    // Keyboard support
    thumb.addEventListener('keydown', (e) => {
      const cur = parseInt(thumb.getAttribute('aria-valuenow'))
      if (e.key === 'ArrowRight' || e.key === 'ArrowUp') { e.preventDefault(); update(cur + 2) }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') { e.preventDefault(); update(cur - 2) }
    })
  }

  setupSlider('slider-demo', 'slider-value')
  setupSlider('slider-demo-2', 'slider-value-2')

  // --- Pin Input ---
  const pinCells = document.querySelectorAll('#pin-input .pin-cell')
  pinCells.forEach((cell, i) => {
    cell.addEventListener('input', () => {
      cell.value = cell.value.replace(/\D/g, '').slice(-1)
      if (cell.value && i < pinCells.length - 1) pinCells[i + 1].focus()
    })
    cell.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !cell.value && i > 0) {
        pinCells[i - 1].focus()
      }
    })
    cell.addEventListener('paste', (e) => {
      e.preventDefault()
      const data = (e.clipboardData.getData('text') || '').replace(/\D/g, '')
      for (let j = 0; j < pinCells.length && j < data.length; j++) {
        pinCells[j].value = data[j]
      }
      const nextEmpty = Math.min(data.length, pinCells.length - 1)
      pinCells[nextEmpty].focus()
    })
  })

  // --- Popover ---
  const popoverTrigger = document.getElementById('popover-trigger')
  const popoverContent = document.getElementById('popover-content')

  popoverTrigger.addEventListener('click', (e) => {
    e.stopPropagation()
    popoverContent.classList.toggle('open')
  })

  document.addEventListener('click', (e) => {
    if (!popoverContent.contains(e.target)) popoverContent.classList.remove('open')
  })

  // --- Dropdown Menu ---
  const dropdownTrigger = document.getElementById('dropdown-trigger')
  const dropdownContent = document.getElementById('dropdown-content')

  dropdownTrigger.addEventListener('click', (e) => {
    e.stopPropagation()
    dropdownContent.classList.toggle('open')
  })

  dropdownContent.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', () => dropdownContent.classList.remove('open'))
  })

  document.addEventListener('click', () => dropdownContent.classList.remove('open'))

  // --- Context Menu ---
  const contextArea = document.getElementById('context-area')
  const contextMenu = document.getElementById('context-menu')

  contextArea.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    contextMenu.style.left = e.clientX + 'px'
    contextMenu.style.top = e.clientY + 'px'
    contextMenu.classList.add('open')
  })

  contextMenu.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', () => contextMenu.classList.remove('open'))
  })

  document.addEventListener('click', () => contextMenu.classList.remove('open'))
  document.addEventListener('contextmenu', (e) => {
    if (!contextArea.contains(e.target)) contextMenu.classList.remove('open')
  })

  // --- Command Palette ---
  const cmdBackdrop = document.getElementById('command-backdrop')
  const cmdInput = document.getElementById('command-input')
  const cmdList = document.getElementById('command-list')
  const cmdEmpty = cmdBackdrop.querySelector('.command-empty')
  const cmdItems = cmdList.querySelectorAll('.command-item')
  const cmdLabels = cmdList.querySelectorAll('.command-group-label')

  function openCommand() {
    cmdBackdrop.classList.add('open')
    cmdInput.value = ''
    filterCommand('')
    setTimeout(() => cmdInput.focus(), 50)
  }

  function closeCommand() {
    cmdBackdrop.classList.remove('open')
  }

  function filterCommand(query) {
    let visibleCount = 0
    const q = query.toLowerCase()

    cmdItems.forEach(item => {
      const text = item.querySelector('span').textContent.toLowerCase()
      const match = !q || text.includes(q)
      item.style.display = match ? '' : 'none'
      if (match) visibleCount++
    })

    // Show/hide group labels based on whether they have visible items
    cmdLabels.forEach(label => {
      let sibling = label.nextElementSibling
      let hasVisible = false
      while (sibling && !sibling.classList.contains('command-group-label')) {
        if (sibling.classList.contains('command-item') && sibling.style.display !== 'none') {
          hasVisible = true
          break
        }
        sibling = sibling.nextElementSibling
      }
      label.style.display = hasVisible ? '' : 'none'
    })

    cmdEmpty.style.display = visibleCount === 0 ? '' : 'none'
  }

  document.getElementById('command-trigger').addEventListener('click', openCommand)

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault()
      if (cmdBackdrop.classList.contains('open')) closeCommand()
      else openCommand()
    }
    if (e.key === 'Escape' && cmdBackdrop.classList.contains('open')) closeCommand()
  })

  cmdBackdrop.addEventListener('click', (e) => { if (e.target === cmdBackdrop) closeCommand() })
  cmdInput.addEventListener('input', () => filterCommand(cmdInput.value))

  cmdItems.forEach(item => {
    item.addEventListener('click', () => closeCommand())
  })

  // --- Calendar ---
  const calEl = document.getElementById('calendar')
  let calYear, calMonth, calSelected = null
  const today = new Date()

  function initCalendar() {
    calYear = today.getFullYear()
    calMonth = today.getMonth()
    renderCalendar()
  }

  function renderCalendar() {
    const months = ['january','february','march','april','may','june','july','august','september','october','november','december']
    const days = ['su','mo','tu','we','th','fr','sa']
    const first = new Date(calYear, calMonth, 1)
    const lastDay = new Date(calYear, calMonth + 1, 0).getDate()
    const startDay = first.getDay()

    // Previous month's trailing days
    const prevLast = new Date(calYear, calMonth, 0).getDate()

    let html = '<div class="cal-header">'
    html += '<button class="cal-nav" id="cal-prev">&lsaquo;</button>'
    html += '<span class="cal-title">' + months[calMonth] + ' ' + calYear + '</span>'
    html += '<button class="cal-nav" id="cal-next">&rsaquo;</button>'
    html += '</div>'
    html += '<table class="cal-grid"><thead><tr>'
    days.forEach(d => html += '<th>' + d + '</th>')
    html += '</tr></thead><tbody>'

    let day = 1
    let nextDay = 1
    for (let row = 0; row < 6; row++) {
      if (day > lastDay) break
      html += '<tr>'
      for (let col = 0; col < 7; col++) {
        const cellIdx = row * 7 + col
        if (cellIdx < startDay) {
          const d = prevLast - startDay + cellIdx + 1
          html += '<td><button class="cal-day outside" disabled>' + d + '</button></td>'
        } else if (day > lastDay) {
          html += '<td><button class="cal-day outside" disabled>' + nextDay++ + '</button></td>'
        } else {
          const isToday = day === today.getDate() && calMonth === today.getMonth() && calYear === today.getFullYear()
          const isSelected = calSelected && day === calSelected.d && calMonth === calSelected.m && calYear === calSelected.y
          let cls = 'cal-day'
          if (isToday) cls += ' today'
          if (isSelected) cls += ' selected'
          html += '<td><button class="' + cls + '" data-day="' + day + '">' + day + '</button></td>'
          day++
        }
      }
      html += '</tr>'
    }

    html += '</tbody></table>'
    calEl.innerHTML = html

    document.getElementById('cal-prev').addEventListener('click', () => {
      calMonth--
      if (calMonth < 0) { calMonth = 11; calYear-- }
      renderCalendar()
    })

    document.getElementById('cal-next').addEventListener('click', () => {
      calMonth++
      if (calMonth > 11) { calMonth = 0; calYear++ }
      renderCalendar()
    })

    calEl.querySelectorAll('.cal-day[data-day]').forEach(btn => {
      btn.addEventListener('click', () => {
        calSelected = { d: parseInt(btn.dataset.day), m: calMonth, y: calYear }
        renderCalendar()
      })
    })
  }

  initCalendar()

  // --- Alert Dialog ---
  const alertBackdrop = document.getElementById('alert-backdrop')
  document.getElementById('alert-open').addEventListener('click', () => alertBackdrop.style.display = '')
  document.getElementById('alert-cancel').addEventListener('click', () => alertBackdrop.style.display = 'none')
  document.getElementById('alert-confirm').addEventListener('click', () => alertBackdrop.style.display = 'none')
  // Alert dialog intentionally does NOT close on backdrop click (mirrors bits-ui AlertDialog behavior)

  // --- Combobox ---
  const comboInput = document.getElementById('combobox-input')
  const comboList = document.getElementById('combobox-list')
  const comboItems = comboList.querySelectorAll('.combobox-item')

  comboInput.addEventListener('focus', () => comboList.classList.add('open'))
  comboInput.addEventListener('input', () => {
    const q = comboInput.value.toLowerCase()
    let any = false
    comboItems.forEach(item => {
      const match = item.textContent.toLowerCase().includes(q)
      item.style.display = match ? '' : 'none'
      if (match) any = true
    })
    comboList.classList.add('open')
  })

  comboItems.forEach(item => {
    item.addEventListener('click', () => {
      comboInput.value = item.textContent
      comboItems.forEach(i => i.classList.remove('selected'))
      item.classList.add('selected')
      comboList.classList.remove('open')
    })
  })

  document.addEventListener('click', (e) => {
    if (!document.getElementById('combobox').contains(e.target)) comboList.classList.remove('open')
  })

  // --- Toggle Button ---
  document.querySelectorAll('.toggle-btn:not(.toggle-group .toggle-btn)').forEach(btn => {
    btn.addEventListener('click', () => {
      const pressed = btn.classList.toggle('pressed')
      btn.setAttribute('aria-pressed', String(pressed))
    })
  })

  // --- Toggle Group ---
  document.querySelectorAll('.toggle-group').forEach(group => {
    group.querySelectorAll('.toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        group.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('pressed'))
        btn.classList.add('pressed')
      })
    })
  })

  // --- Rating ---
  const ratingDemo = document.getElementById('rating-demo')
  const ratingLabel = document.getElementById('rating-label')
  const ratingStars = ratingDemo.querySelectorAll('.rating-star')

  function setRating(value) {
    ratingDemo.dataset.value = value
    ratingStars.forEach((star, i) => {
      star.classList.toggle('filled', i < value)
    })
    ratingLabel.textContent = value + ' / 5'
  }

  ratingStars.forEach(star => {
    star.addEventListener('click', () => setRating(parseInt(star.dataset.star)))
    star.addEventListener('mouseenter', () => {
      const hover = parseInt(star.dataset.star)
      ratingStars.forEach((s, i) => s.classList.toggle('filled', i < hover))
    })
  })

  ratingDemo.addEventListener('mouseleave', () => {
    setRating(parseInt(ratingDemo.dataset.value))
  })

  // --- Collapsible ---
  const collTrigger = document.getElementById('collapsible-trigger')
  const collContent = document.getElementById('collapsible-content')
  collTrigger.addEventListener('click', () => {
    const isOpen = !collContent.hidden
    collContent.hidden = isOpen
    collTrigger.classList.toggle('open', !isOpen)
    collTrigger.setAttribute('aria-expanded', String(!isOpen))
  })

  // --- Navigation Menu ---
  document.querySelectorAll('.nav-menu-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation()
      const content = document.getElementById(trigger.dataset.navmenu)
      const wasOpen = content.classList.contains('open')
      document.querySelectorAll('.nav-menu-content').forEach(c => c.classList.remove('open'))
      if (!wasOpen) content.classList.add('open')
    })
  })

  document.addEventListener('click', () => {
    document.querySelectorAll('.nav-menu-content').forEach(c => c.classList.remove('open'))
  })

  // --- Menubar ---
  let menubarOpen = false
  document.querySelectorAll('.menubar-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation()
      const content = document.getElementById(trigger.dataset.menubar)
      const wasOpen = content.classList.contains('open')
      document.querySelectorAll('.menubar-content').forEach(c => c.classList.remove('open'))
      document.querySelectorAll('.menubar-trigger').forEach(t => t.classList.remove('open'))
      if (!wasOpen) {
        content.classList.add('open')
        trigger.classList.add('open')
        menubarOpen = true
      } else {
        menubarOpen = false
      }
    })
    trigger.addEventListener('mouseenter', () => {
      if (!menubarOpen) return
      document.querySelectorAll('.menubar-content').forEach(c => c.classList.remove('open'))
      document.querySelectorAll('.menubar-trigger').forEach(t => t.classList.remove('open'))
      const content = document.getElementById(trigger.dataset.menubar)
      content.classList.add('open')
      trigger.classList.add('open')
    })
  })

  document.querySelectorAll('.menubar-content .dropdown-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.menubar-content').forEach(c => c.classList.remove('open'))
      document.querySelectorAll('.menubar-trigger').forEach(t => t.classList.remove('open'))
      menubarOpen = false
    })
  })

  document.addEventListener('click', () => {
    document.querySelectorAll('.menubar-content').forEach(c => c.classList.remove('open'))
    document.querySelectorAll('.menubar-trigger').forEach(t => t.classList.remove('open'))
    menubarOpen = false
  })

  // --- Listbox ---
  const listbox = document.getElementById('listbox-demo')
  listbox.querySelectorAll('.listbox-item:not(.disabled)').forEach(item => {
    item.addEventListener('click', () => {
      listbox.querySelectorAll('.listbox-item').forEach(i => {
        i.classList.remove('selected')
        i.setAttribute('aria-selected', 'false')
      })
      item.classList.add('selected')
      item.setAttribute('aria-selected', 'true')
    })
  })

  // --- Range Calendar ---
  const rangeCalEl = document.getElementById('range-calendar')
  let rcYear, rcMonth, rcStart = null, rcEnd = null

  function initRangeCalendar() {
    rcYear = today.getFullYear()
    rcMonth = today.getMonth()
    renderRangeCalendar()
  }

  function renderRangeCalendar() {
    const months = ['january','february','march','april','may','june','july','august','september','october','november','december']
    const days = ['su','mo','tu','we','th','fr','sa']
    const first = new Date(rcYear, rcMonth, 1)
    const lastDay = new Date(rcYear, rcMonth + 1, 0).getDate()
    const startDay = first.getDay()
    const prevLast = new Date(rcYear, rcMonth, 0).getDate()

    let html = '<div class="cal-header">'
    html += '<button class="cal-nav" id="rc-prev">&lsaquo;</button>'
    html += '<span class="cal-title">' + months[rcMonth] + ' ' + rcYear + '</span>'
    html += '<button class="cal-nav" id="rc-next">&rsaquo;</button>'
    html += '</div>'
    html += '<table class="cal-grid"><thead><tr>'
    days.forEach(d => html += '<th>' + d + '</th>')
    html += '</tr></thead><tbody>'

    let day = 1, nextDay = 1
    for (let row = 0; row < 6; row++) {
      if (day > lastDay) break
      html += '<tr>'
      for (let col = 0; col < 7; col++) {
        const cellIdx = row * 7 + col
        if (cellIdx < startDay) {
          html += '<td><button class="cal-day outside" disabled>' + (prevLast - startDay + cellIdx + 1) + '</button></td>'
        } else if (day > lastDay) {
          html += '<td><button class="cal-day outside" disabled>' + nextDay++ + '</button></td>'
        } else {
          const dt = new Date(rcYear, rcMonth, day).getTime()
          const isToday = day === today.getDate() && rcMonth === today.getMonth() && rcYear === today.getFullYear()
          let cls = 'cal-day'
          if (isToday) cls += ' today'
          if (rcStart && dt === rcStart.getTime()) cls += ' range-start selected'
          if (rcEnd && dt === rcEnd.getTime()) cls += ' range-end selected'
          if (rcStart && rcEnd && dt > rcStart.getTime() && dt < rcEnd.getTime()) cls += ' in-range'
          html += '<td><button class="' + cls + '" data-day="' + day + '">' + day + '</button></td>'
          day++
        }
      }
      html += '</tr>'
    }

    html += '</tbody></table>'
    rangeCalEl.innerHTML = html

    document.getElementById('rc-prev').addEventListener('click', () => {
      rcMonth--
      if (rcMonth < 0) { rcMonth = 11; rcYear-- }
      renderRangeCalendar()
    })

    document.getElementById('rc-next').addEventListener('click', () => {
      rcMonth++
      if (rcMonth > 11) { rcMonth = 0; rcYear++ }
      renderRangeCalendar()
    })

    rangeCalEl.querySelectorAll('.cal-day[data-day]').forEach(btn => {
      btn.addEventListener('click', () => {
        const clicked = new Date(rcYear, rcMonth, parseInt(btn.dataset.day))
        if (!rcStart || rcEnd || clicked < rcStart) {
          rcStart = clicked
          rcEnd = null
        } else {
          rcEnd = clicked
        }
        renderRangeCalendar()
      })
    })
  }

  initRangeCalendar()

  // --- Date Picker Calendar Toggle ---
  const dpTrigger = document.getElementById('datepicker-trigger')
  const dpCal = document.getElementById('datepicker-calendar')
  dpTrigger.addEventListener('click', () => {
    dpCal.style.display = dpCal.style.display === 'none' ? '' : 'none'
  })

  // Render a simple calendar in the datepicker
  function renderDatePickerCal() {
    const months = ['january','february','march','april','may','june','july','august','september','october','november','december']
    const days = ['su','mo','tu','we','th','fr','sa']
    const y = today.getFullYear(), m = today.getMonth()
    const lastDay = new Date(y, m + 1, 0).getDate()
    const startDay = new Date(y, m, 1).getDay()
    const prevLast = new Date(y, m, 0).getDate()

    let html = '<div class="cal-header">'
    html += '<span class="cal-nav" style="visibility:hidden">&lsaquo;</span>'
    html += '<span class="cal-title">' + months[m] + ' ' + y + '</span>'
    html += '<span class="cal-nav" style="visibility:hidden">&rsaquo;</span>'
    html += '</div><table class="cal-grid"><thead><tr>'
    days.forEach(d => html += '<th>' + d + '</th>')
    html += '</tr></thead><tbody>'

    let day = 1, nextDay = 1
    for (let row = 0; row < 6; row++) {
      if (day > lastDay) break
      html += '<tr>'
      for (let col = 0; col < 7; col++) {
        const cellIdx = row * 7 + col
        if (cellIdx < startDay) {
          html += '<td><button class="cal-day outside" disabled>' + (prevLast - startDay + cellIdx + 1) + '</button></td>'
        } else if (day > lastDay) {
          html += '<td><button class="cal-day outside" disabled>' + nextDay++ + '</button></td>'
        } else {
          const isToday = day === today.getDate()
          const sel = day === 3
          let cls = 'cal-day'
          if (isToday) cls += ' today'
          if (sel) cls += ' selected'
          html += '<td><button class="' + cls + '">' + day + '</button></td>'
          day++
        }
      }
      html += '</tr>'
    }
    html += '</tbody></table>'
    dpCal.innerHTML = html
  }
  renderDatePickerCal()
})()
