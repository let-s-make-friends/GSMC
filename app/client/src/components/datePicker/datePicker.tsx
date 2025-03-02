import React, { useState } from "react";
import { Container, DropdownContainer } from "./styles";

interface DatePickerProps {
  label: string;
  onChange?: (date: string) => void;
  initialDate?: string;
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
    <Container>
      <label>{label}</label>
      <div style={{ display: "flex", gap: "8px" }}>
        <DropdownContainer
          name={label}
          value={year}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setYear(Number(e.target.value))
          }
        >
          {years.map((y) => (
            <option key={y} value={y}>
              {y}년
            </option>
          ))}
        </DropdownContainer>

        <DropdownContainer
          value={month}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setMonth(Number(e.target.value))
          }
        >
          {months.map((m) => (
            <option key={m} value={m}>
              {m}월
            </option>
          ))}
        </DropdownContainer>

        <DropdownContainer
          value={day}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setDay(Number(e.target.value))
          }
        >
          {days.map((d) => (
            <option key={d} value={d}>
              {d}일
            </option>
          ))}
        </DropdownContainer>
      </div>
    </Container>
  );
};

export default DatePicker;
