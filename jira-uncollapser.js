const swonk = function() {
  const buttonNodes = document.querySelectorAll('[data-test-id="issue.views.issue-details.issue-layout.left-most-column"] button');
  const buttonElements = [...buttonNodes].filter(e => e.innerText.match(/^View\s+\d+\s+remaining\snewer\scomments$/));

  buttonElements.forEach(e => e.click());
}

setInterval(swonk, 100);
