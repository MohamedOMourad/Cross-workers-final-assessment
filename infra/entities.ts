type Person = {
  firstName: string;
  lastName: string;
  title?: string | null;
  companyName?: string | null;
  communityId?: string | null;
  checkInTime?: Date | null;
  checkOutTime?: Date | null;
  readyForCheckout?: boolean;
};

type Community = {
  name: string;
};
