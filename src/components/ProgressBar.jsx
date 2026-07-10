
function ProgressBar({ step }) {
  const progress = (step / 3) * 100;

  return (
    <div className="progress">
      <div
        className="progress-fill"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;