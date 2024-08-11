import { Meteor } from 'meteor/meteor';
import { Communities } from '/communities/communities';

const publishCommunities = () => {
  Meteor.publish('communities', () => {
    try {
      const communities = Communities.find();

      if (!communities) {
        throw new Meteor.Error(
          'communities-not-found',
          'Communities not found.',
        );
      }
      return communities;
    } catch (error) {
      throw new Meteor.Error(
        'communities-publish-error',
        error as string,
        'Error publishing communities.',
      );
    }
  });
};

export default publishCommunities;
