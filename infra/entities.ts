type Person = {
  firstName: string;
  lastName: string;
  title?: string | null;
  companyName?: string | null;
  communityId?: string | null;
  checkInTime?: Date | null;
  checkOutTime?: Date | null;
};

type Community = {
  name: string;
};
