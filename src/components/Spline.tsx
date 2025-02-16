import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Background() {
    return (
        <div className="absolute top-0 left-0 z-10 w-full h-[100vh] overflow-hidden">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="transform h-[100vh] scale-150 -translate-y-10 overflow-hidden z-50"
            >
    <Spline scene="https://prod.spline.design/PAu-BWVvyOJosoKe/scene.splinecode" />
    </motion.div>
            <div className="absolute bottom-0 w-full h-80 z-50 bg-gradient-to-t from-white via-white/50 to-white/0 transform translate-y-5" />
        </div>
    );
}
