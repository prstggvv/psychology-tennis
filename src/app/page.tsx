import './styles/index.css';
import { classNames } from "@/shared/lib/classNames/classNames";
import { Header } from "@/components/Header";
import { Hero } from '@/components/Hero';
import { AboutMe } from '@/components/AboutMe';

export default function Home() {
  return (
    <div className={classNames('app', {}, [])}>
      <div className={classNames('wrapper', {}, [])}>
        <Header />
        <Hero />
        <AboutMe />
      </div>
    </div>
  );
}
