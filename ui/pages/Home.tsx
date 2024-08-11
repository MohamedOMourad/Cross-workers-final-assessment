import React from 'react';
import PeopleList from '../components/PeopleList';
import EmptyList from '../components/EmptyList';
import EventStats from '../components/EventStats';

type HomeProps = {
  people: PersonDocument[] | undefined;
};

const Home = ({ people }: HomeProps) => {
  if (!people?.length) {
    return <EmptyList />;
  }

  return (
    <div className="lg:pl-72 mt-6">
      <section>
        <EventStats people={people} />
        <div className="px-1 lg:px-8">
          <PeopleList people={people} />
        </div>
      </section>
    </div>
  );
};

export default Home;
