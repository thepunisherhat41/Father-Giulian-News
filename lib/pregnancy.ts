export const DUE_DATE = '2027-04-11';

export function getPregnancyStatus(referenceDate = new Date()) {
  const due = new Date(`${DUE_DATE}T12:00:00-03:00`);
  const msPerDay = 1000 * 60 * 60 * 24;
  const totalPregnancyDays = 280;
  const conceptionAnchor = new Date(due.getTime() - totalPregnancyDays * msPerDay);
  const elapsedDays = Math.max(0, Math.floor((referenceDate.getTime() - conceptionAnchor.getTime()) / msPerDay));
  const gestationalWeek = Math.min(40, Math.floor(elapsedDays / 7));
  const gestationalDay = Math.min(6, elapsedDays % 7);
  const daysRemaining = Math.max(0, Math.ceil((due.getTime() - referenceDate.getTime()) / msPerDay));

  return {
    dueDate: DUE_DATE,
    gestationalWeek,
    gestationalDay,
    daysRemaining,
  };
}
