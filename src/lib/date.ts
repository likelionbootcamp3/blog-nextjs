import moment, { Moment } from "moment";

export const getFullDate = (timestamp: number) => {
  return moment.unix(timestamp).format("MMMM DD, YYYY");
};
