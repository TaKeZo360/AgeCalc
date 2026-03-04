// Dom Elements
const submitBtn = document.getElementById("submitBtn") as HTMLButtonElement;
const dateInput = document.getElementById("birthDate") as HTMLInputElement;

const ageEl = document.getElementById("age")!;
const yearsEl = document.getElementById("years")!;
const monthsEl = document.getElementById("months")!;
const daysEl = document.getElementById("days")!;
const hoursEl = document.getElementById("hours")!;
const minutesEl = document.getElementById("minutes")!;
const secondsEl = document.getElementById("seconds")!;

submitBtn.addEventListener("click", () => {
  if (!dateInput.value) return;

  const birthDate = new Date(dateInput.value);
  ageConverter(birthDate);
});

function ageConverter(birthDate: Date) {
  const now = new Date();

  let years = now.getFullYear() - birthDate.getFullYear();
  let months = now.getMonth() - birthDate.getMonth();
  let days = now.getDate() - birthDate.getDate();

  // Fix negative days
  if (days < 0) {
    months--;
    const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += lastMonth.getDate();
  }

  // Fix negative months
  if (months < 0) {
    years--;
    months += 12;
  }

  // Total time difference
  const diffMs = now.getTime() - birthDate.getTime();

  const totalSeconds = Math.floor(diffMs / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);

  // Display values
  ageEl.textContent = `${years}y ${months}m ${days}d`;
  yearsEl.textContent = years.toString();
  monthsEl.textContent = months.toString();
  daysEl.textContent = days.toString();
  hoursEl.textContent = totalHours.toString();
  minutesEl.textContent = totalMinutes.toString();
  secondsEl.textContent = totalSeconds.toString();
}