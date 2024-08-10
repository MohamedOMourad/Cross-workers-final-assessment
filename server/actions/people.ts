import { People } from '/people/people';

export const listAllPeople = async () => {
  return await People.find().fetchAsync();
};
