let currentTab = 1;
const totalTabs = 16;

function showTab(n) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  const tab = document.getElementById('tab' + n);
  if (tab) tab.classList.add('active');
}

function nextTab() {
  if (currentTab < totalTabs) currentTab++;
  showTab(currentTab);
}

function prevTab() {
  if (currentTab > 1) currentTab--;
  showTab(currentTab);
}