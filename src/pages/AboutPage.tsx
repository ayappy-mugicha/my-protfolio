import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
    initial: {
        opacity: 0,
        x: 200,
        
    },  animate: {
        opacity: 1,
        x: 0,
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


const AboutPage: React.FC = () => (
    <motion.section
    className='page-content'
    variants={pageVariants}
    initial='initial'
    animate='animate'
    exit='exit'
    >
        <h1>自己紹介</h1>
        <p>
            こんにちわ、あやっぴーです！
            ReactとTypeScriptを学習中の初心者プログラマーです
        </p>
        <p>趣味は、ギターで、休日は、ギターか、プログラム勉強をしてます</p>
        <p>ゲームはbluearchiveというソシャゲをプレイしてます。</p>
        <p>ホロリスでもあります。その人は、絶賛休暇中ですね。あと1か月の辛抱</p>
    </motion.section>
);

export default AboutPage;