type MongoDocument = {
  _id: string;
};

type PersonDocument = Person & MongoDocument;
type CommunityDocument = Community & MongoDocument;
