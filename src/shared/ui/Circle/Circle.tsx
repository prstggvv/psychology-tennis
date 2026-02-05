import cls from './Circle.module.css';
import { classNames } from '@/shared/lib/classNames/classNames';

interface ICircleProps {
  className?: string;
}

const Circle = ({ className }: ICircleProps) => {
  return (
    <div className={classNames(cls.circle, {}, [className ?? ''])}>
      <div className={classNames(cls.secondCircle, {}, [])}>
        <p className={classNames(cls.subtitle, {}, [])}>
          Я так работаю
        </p>
      </div>
    </div>
  )
};

export default Circle;
