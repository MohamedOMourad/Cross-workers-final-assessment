import React from 'react';
import PeopleList from '../components/PeopleList';

type HomeProps = {
  people: PersonDocument[] | undefined;
};

const Home = ({ people }: HomeProps) => {
  return (
    <div className="lg:pl-72">
      <section className="py-10">
        <div className="px-4 sm:px-6 lg:px-8">
          <PeopleList people={people} />
        </div>
      </section>
    </div>
  );
};

export default Home;
