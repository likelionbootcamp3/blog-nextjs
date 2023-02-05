import moment, { Moment } from "moment";

export const getFullDate = (date: Moment) => {
  return moment(date)
    .subtract(1, "month")
    .startOf("month")
    .format("MMMM DD, YYYY");
};
