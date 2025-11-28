import './styles/index.css';
import { classNames } from "@/shared/lib/classNames/classNames";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div className={classNames('app', {}, [])}>
      <div className={classNames('wrapper', {}, [])}>
        <Header />
      </div>
    </div>
  );
}
