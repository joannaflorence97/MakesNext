import Instagram from '@/assets/instagram.svg';
import YouTube from '@/assets/youtube.svg';
import { Copyright } from './Copyright';

export function Footer() {
  return (
    <footer className="py-12 text-center">
      <div className="flex justify-center space-x-4 tracking-tight my-3">
        <a href="https://instagram.com/joannaflorencemakes">
          <Instagram
            width={26}
            height={26}
            className="hover:fill-[#FF0069] duration-500"
          />
        </a>
        <a href="http://youtube.com/@joannaflorencemakes/">
          <YouTube
            width={26}
            height={26}
            className="hover:fill-[#FF0000] duration-500"
          />
        </a>
      </div>
      <div className="flex justify-center space-x-4 tracking-tight mb-3">
        <Copyright />
      </div>
    </footer>
  );
}
