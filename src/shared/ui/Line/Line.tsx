import cls from './Line.module.css';
import { classNames } from '@/shared/lib/classNames/classNames';

interface ILineProps {
  className?: string;
}

const Line = ({ className }: ILineProps) => {
  return (
    <div className={classNames(cls.line, {}, [className ?? ''])}>
      <div className={classNames(cls.circle, {}, [])}></div>
    </div>
  )
}

export default Line;
