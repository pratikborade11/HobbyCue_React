
import React from 'react';
import FeatureCard from '../components/FeatureCard';

const FeatureSection = () => {
  return (
    <div className='my-14 main-container m-auto grid grid-cols-1 md:grid-cols-2 gap-7'>
      <FeatureCard
        title='People'
        decription='Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.'
        iconPath="./img/png/groups_black_24dp (1) 1.png"
        btnTxt='Connect'
        hoverColor='#8064A2'
      />
      <FeatureCard
        title='Place'
        decription='Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.'
        iconPath="./img/png/location_on_black_24dp 1.png"
        btnTxt='Meet up'
        hoverColor='#77933C'
      />
      <FeatureCard
        title='Product'
        decription='Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.'
        iconPath="./img/png/shopping_basket_black_24dp (2) 1.png"
        btnTxt='Get it'
        hoverColor='#C0504D'
      />
      <FeatureCard
        title='Program'
        decription='Find events, meetups and workshops related to your hobby.  Register or buy tickets online.'
        iconPath="./img/png/event_available_black_24dp 2.png"
        btnTxt='Attend'
        hoverColor='#0096C8'
      />
    </div>
  );
};

export default FeatureSection;
