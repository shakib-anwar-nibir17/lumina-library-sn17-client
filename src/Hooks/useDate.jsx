import useAuth from "./useAuth";

const useDate = () => {
  const { user } = useAuth();
  const time = parseInt(user.metadata.lastLoginAt);
  const date = new Date(time);
  const formattedDate = new Intl.DateTimeFormat({
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
  const borrowDate = formattedDate;
  return borrowDate;
};

export default useDate;
