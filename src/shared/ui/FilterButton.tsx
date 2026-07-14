import { memo } from "react";
import style from './FilterButton.module.css'

export const FilterButton = memo(({ onFilterChange }: { onFilterChange: (filter: 'all' | 'completed' | 'incomplete') => void }) => (
    <div className={style.buttonBlock}>
        <button className={style.button} onClick={() => onFilterChange('all')}>Все</button>
        <button className={style.button} onClick={() => onFilterChange('completed')}>Завершенные</button>
        <button className={style.button} onClick={() => onFilterChange('incomplete')}>Активные</button>
    </div>
))