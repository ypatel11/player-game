import { forwardRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime }, 
  ref
) {
  return (
    <dialog ref={ref} className="result-modal" open>
      <h2>You Lost</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped timer with <strong>X secs left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
