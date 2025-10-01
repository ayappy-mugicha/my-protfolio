import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
    initial: {
        opacity: 0,
        x: -200,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            ease: "easeOut",
        },
    },
    exit: {
        opacity: 0,
        x: 200,
        transition: {
            duration: 0.5,
            ease: "easeIn"
        },
    },
};


const SkillsPage: React.FC = () =>(
    <motion.section
    className='page-content'
    variants={pageVariants}
    initial='initial'
    animate='animate'
    exit='exit'
    >
        <h1>スキル</h1>
        <h3>プログラミング言語</h3>
        <ul>
            <li>typescript</li>
            <li>python（授業内の使用制作で使用）</li>
            <li>C (授業内の使用制作の使用)</li>
            <li>gas (趣味で使用)</li>
        </ul>
        <h3>フレームワーク</h3>
        <ul>
            <li>React</li>
        </ul>
        <ul>
            <h3>ツール</h3>
            <li>git / github</li>
            <li>vscode</li>
        </ul>
        <p>現在の新しい技術を積極的に学習中で特に、AIに興味があります</p>
        <p>今年専門に入ってプログラムを学び始めたばかりなので、</p>
        <p>わからないことのほうが多いです。</p>
        
    </motion.section>
)

export default SkillsPage;