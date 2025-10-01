import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: "easeOut",
        },
    },
    exit: {
        opacity: 0,
        y: 20,
        transition: {
            duration: 0.5,
            ease: "easeIn"
        },
    },
};


const Homepage :React.FC = () => (
<motion.section
className='page-content'
variants={pageVariants}
initial='initial'
animate='animate'
exit='exit'
>
    
        <h1>ようこそ私のポートフォリオへ</h1>
        <p>このサイトでは、私の自己紹介、スキル、これまでのプロジェクトを紹介します</p>
        <p>ReactとTypeScriptを学習中の初心者プログラマーです</p>
        

    </motion.section>
);

export default Homepage;