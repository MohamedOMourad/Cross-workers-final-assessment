import { Communities } from '/communities/communities';

export const listAllEvents = async () => {
  const communities = await Communities.find().fetchAsync();

  return communities;
};
