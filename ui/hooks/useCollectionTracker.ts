import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';

const useCollectionTracker = (collection: any, subscriber: string) => {
  const { trackedCollection, isLoading } = useTracker(() => {
    try {
      const trackedCollectionsSub = Meteor.subscribe(subscriber);
      const isLoading = !trackedCollectionsSub.ready();

      const trackedCollection = collection.find().fetch();

      return { trackedCollection, isLoading, error: null };
    } catch (error) {
      console.error('Error fetching communities:', error);

      return { trackedCollections: [], isLoading: false, error };
    }
  }, [collection]);

  return { trackedCollection, isLoading };
};

export default useCollectionTracker;
