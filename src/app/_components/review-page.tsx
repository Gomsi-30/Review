"use client"
import { useState } from 'react';
import { CircleX } from 'lucide-react';
import Star from './Star';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

interface ReviewProps {}

const Review: React.FC<ReviewProps> = () => {
  const [rating, setRating] = useState<number>(0);
  const [rating2, setRating2] = useState<number>(0);
  const [liked, setLiked] = useState<boolean>(false);
  const [disliked, setDisliked] = useState<boolean>(false);

  const handleStarClick = (index: number): void => {
    setRating(index + 1);
  };

  const handleStarClick2 = (index: number): void => {
    setRating2(index + 1);
  };

  const handleLikeClick = (): void => {
    setLiked(true);
    setDisliked(false); // Ensure only one option is selected at a time
  };

  const handleDislikeClick = (): void => {
    setLiked(false); // Ensure only one option is selected at a time
    setDisliked(true);
  };

  return (
    <div className="container p-4">
      <CircleX />
      <h1 className="text-3xl font-bold mb-6">Leave a review</h1>
      <hr />
      <main className="flex flex-col gap-7 p-4 rounded-lg">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">Safety</h2>
          <p className="mb-2">How much you will rate us in safety from 5-star?</p>
          <div className="flex flex-wrap gap-2">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                selected={index < rating}
                onSelect={() => handleStarClick(index)}
              />
            ))}
          </div>
        </div>
        <hr />
        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">Communication</h2>
          <p className="mb-2">How much you will rate us in communication from 5-star?</p>
          <div className="flex flex-wrap gap-2">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                selected={index < rating2}
                onSelect={() => handleStarClick2(index)}
              />
            ))}
          </div>
        </div>
        <hr />
        <div>
          <h2 className="text-2xl font-semibold mb-2">Would you recommend Trausati?</h2>
          <p className="mb-2">If you recommend, tick yes?</p>
          <div className="flex flex-wrap gap-12 mt-4">
            <button onClick={handleLikeClick}>
              <FontAwesomeIcon icon={faThumbsUp} style={{ color: liked ? 'blue' : 'black' }} />
            </button>
            <button onClick={handleDislikeClick}>
              <FontAwesomeIcon icon={faThumbsDown} style={{ color: disliked ? 'red' : 'black' }} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Review;
