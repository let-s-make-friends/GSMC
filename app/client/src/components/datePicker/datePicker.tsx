import { useState } from "react";

interface DatePickerProps {
  label: string;
}

const DatePicker = ({ label }: DatePickerProps) => {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(1);
  const [day, setDay] = useState(1);

  const years = Array.from({ length: 101 }, (_, i) => currentYear - 100 + i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const daysInMonth = new Date(year, month, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div>
      <label>{label}</label>
      <div style={{ display: "flex", gap: "8px" }}>
        <select value={year} onChange={(e) => setYear(Number(e.target.value))}>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}년
            </option>
          ))}
        </select>

        <select
          value={month}
          onChange={(e) => setMonth(Number(e.target.value))}
        >
          {months.map((m) => (
            <option key={m} value={m}>
              {m}월
            </option>
          ))}
        </select>

        <select value={day} onChange={(e) => setDay(Number(e.target.value))}>
          {days.map((d) => (
            <option key={d} value={d}>
              {d}일
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DatePicker;
