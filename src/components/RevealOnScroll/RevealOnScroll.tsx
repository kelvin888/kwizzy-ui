"use client"
import { motion, useAnimation } from 'framer-motion';
import { Children, FC, ReactNode, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface RevealOnScrollProps {
    children: ReactNode;
    direction?: 'top' | 'bottom' | 'left' | 'right';
    transitionDuration?: number;
    slideDistance?: number;
}

const RevealOnScroll: FC<RevealOnScrollProps> = ({ children, direction = 'bottom', transitionDuration = 0.5, slideDistance = 50 }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, ...getAnimationProps(direction, slideDistance) });
        }
    }, [controls, direction, inView, slideDistance]);

    const getAnimationProps = (dir: string, distance: number) => {
        switch (dir) {
            case 'top':
                return { y: 0 };
            case 'bottom':
                return { y: 0 };
            case 'left':
                return { x: 0 };
            case 'right':
                return { x: 0 };
            default:
                return {};
        }
    };

    return (
        <div ref={ref}>
            {Children.map(children, (child, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, ...getInitialProps(direction, slideDistance) }}
                    animate={controls}
                    transition={{ duration: transitionDuration, delay: index * 0.1 }}
                >
                    {child}
                </motion.div>
            ))}
        </div>
    );
}

const getInitialProps = (dir: string, distance: number) => {
    switch (dir) {
        case 'top':
            return { y: -distance };
        case 'bottom':
            return { y: distance };
        case 'left':
            return { x: -distance };
        case 'right':
            return { x: distance };
        default:
            return {};
    }
};

export default RevealOnScroll;
