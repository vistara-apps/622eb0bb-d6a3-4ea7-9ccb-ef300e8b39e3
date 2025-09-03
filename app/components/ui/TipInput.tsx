'use client';

interface TipInputProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  variant?: 'numeric';
}

export function TipInput({
  value,
  onChange,
  label = 'Amount',
  placeholder = '0.001',
  variant = 'numeric'
}: TipInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    
    if (variant === 'numeric') {
      // Only allow numbers and decimal point
      const regex = /^\d*\.?\d*$/;
      if (regex.test(inputValue) || inputValue === '') {
        onChange(inputValue);
      }
    } else {
      onChange(inputValue);
    }
  };

  const quickAmounts = ['0.001', '0.005', '0.01', '0.05'];

  return (
    <div>
      {label && (
        <label className="block text-sm text-white/80 mb-2">
          {label}
        </label>
      )}
      
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full px-4 py-3 pr-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors font-mono"
        />
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 text-sm">
          ETH
        </span>
      </div>
      
      <div className="flex gap-2 mt-2">
        {quickAmounts.map((amount) => (
          <button
            key={amount}
            onClick={() => onChange(amount)}
            className="px-3 py-1 text-xs bg-white/10 hover:bg-white/20 text-white/80 rounded transition-colors"
          >
            {amount}
          </button>
        ))}
      </div>
    </div>
  );
}
