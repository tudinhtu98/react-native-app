export const convertHourToMin = (hours = 0) => {
  let min = 0;
  let sec = 0;
  const totalSec = Math.floor(hours * 3600);
  min = Math.floor(totalSec / 60);
  sec = totalSec - min * 60;
  return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
};
