'use client';
import { Button, Tooltip } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <Tooltip content="Наверх">
          <Button
            onClick={scrollToTop}
            isIconOnly
            radius="full"
            size="lg"
            type="submit"
            variant="flat"
            className="size-12 fixed bottom-0 z-[11] left-0 mb-6 ml-6 md:mb-8 md:ml-8 hidden sm:flex"
          >
            <IoIosArrowUp className="size-6" />
          </Button>
        </Tooltip>
      )}
    </>
  );
};

export default ScrollToTop;
