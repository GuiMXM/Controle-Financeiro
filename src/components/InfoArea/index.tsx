import React from 'react'
import { categories } from '../../data/categories';
import { formatCurrentMonth } from '../../helpers/datefilter';
import { ResumeItem } from '../ResumeItem';
import * as C from './styles';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';


type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
}

const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) => {

    const categoryKeys: string[] = Object.keys(categories);

    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth( currentDate.getMonth() - 1 );
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }

    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
       
        currentDate.setMonth( currentDate.getMonth() + 1 );
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
        console.log(categoryKeys)
    }

  return (
    <C.Container>
    <C.MonthArea>
                <C.MonthArrow onClick={handlePrevMonth}>
                    <BsFillArrowLeftCircleFill/>
                </C.MonthArrow>
                <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
                <C.MonthArrow onClick={handleNextMonth}>
                    <BsFillArrowRightCircleFill/>
                </C.MonthArrow>
    </C.MonthArea>
    <C.ResumeArea>
                <ResumeItem title="Receitas" value={income} />
                <ResumeItem title="Despesas" value={expense} />
                <ResumeItem
                    title="Balanço"
                    value={income - expense}
                    color={(income-expense) < 0 ? 'red' :  'green'}
                />
    </C.ResumeArea>
</C.Container>
  )
}

export default InfoArea