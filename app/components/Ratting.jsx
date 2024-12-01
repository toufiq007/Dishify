const Ratting = ({ value }) => {
  const filledStars = Math.floor(value); // Full stars
  const hasHalfStar = value % 1 >= 0.5; // Half star condition
  const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0); // Remaining stars

  return (
    <div className="flex">
      {/* Render full stars */}
      {[...Array(filledStars)].map((_, index) => (
        <span key={index} className="text-yellow-500">
          ★
        </span>
      ))}
      {/* Render half star */}
      {hasHalfStar && <span className="text-yellow-500">☆</span>}
      {/* Render empty stars */}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={index} className="text-gray-300">
          ★
        </span>
      ))}
    </div>
  );
};

export default Ratting;
