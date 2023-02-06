import { useState } from 'react';

import styles from './app.module.scss';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistic from './Statistic/Statistic';
import Section from './Section/Section';
import Notification from './Notification/Notification';

const Feedback = () => {
  const [rating, setRating] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = rating;
  const total = good + neutral + bad;

  const onLeaveFeedback = option => {
    setRating(prevState => {
      return { ...prevState, [option]: prevState[option] + 1 };
    });
  };
  const countPositiveFeedbackPercentage = option => {
    if (!total) {
      return 0;
    }

    return Math.round((rating[option] / total) * 100);
  };

  return (
    <div className={styles.feedback}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(rating)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage('good')}
          />
        )}
      </Section>
    </div>
  );
};

export default Feedback;
