const PercentageBar = ({ value }: { value: number }) => {
  return (
    <div
      className="w-full bg-gray-0 rounded-full h-2.5 dark:bg-gray-700"
      title={`${Math.min(value, 100)}%`}
    >
      <div
        className="bg-blue h-2.5 rounded-full"
        style={{ width: `${Math.min(value, 100)}%` }}
      ></div>
    </div>
  );
};
export default PercentageBar;
