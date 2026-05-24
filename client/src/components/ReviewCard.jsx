import React from 'react';

const ReviewCard = ({ review }) => {
  return (
    <div className="border-b py-4">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center font-bold">{review.user?.name?.charAt(0)}</div>
        <div>
          <p className="font-semibold">{review.user?.name}</p>
          <div className="flex text-yellow-400">{'★'.repeat(review.rating)}{'☆'.repeat(5-review.rating)}</div>
        </div>
      </div>
      <p className="text-gray-700">{review.review}</p>
    </div>
  );
};

export default ReviewCard;