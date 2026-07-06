import { memo } from "react";

export const FilterButton = memo(({ onFilterChange }: { onFilterChange: (filter: 'all' | 'completed' | 'incomplete') => void }) => (
    <div>
        <button onClick={() => onFilterChange('all')}>Все</button>
        <button onClick={() => onFilterChange('completed')}>Завершенные</button>
        <button onClick={() => onFilterChange('incomplete')}>Активные</button>
    </div>
))