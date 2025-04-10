interface FormattedNumber {
  value: number;
  className?: string;
}

const formatNumber: React.FC<FormattedNumber> = ({ value, className = "" }) => {
  const formattedValue = value.toLocaleString();

  return <span className={`${className}`}>{formattedValue}</span>;
};

export default formatNumber;
