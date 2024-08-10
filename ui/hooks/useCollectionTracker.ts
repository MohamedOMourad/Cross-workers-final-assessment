import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { useTracker } from 'meteor/react-meteor-data';

const useCollectionTracker = <T extends MongoDocument>(
  collection: Mongo.Collection<T>,
  subscriber: string,
  documentId = '',
) => {
  const { trackedCollection, isLoading } = useTracker(() => {
    try {
      const trackedCollectionsSub = Meteor.subscribe(subscriber, documentId);
      const isLoading = !trackedCollectionsSub.ready();

      const trackedCollection = collection.find().fetch();

      return { trackedCollection, isLoading, error: null };
    } catch (error) {
      console.error('Error fetching communities:', error);

      return { trackedCollections: [], isLoading: false, error };
    }
  });

  return { trackedCollection, isLoading };
};

export default useCollectionTracker;
